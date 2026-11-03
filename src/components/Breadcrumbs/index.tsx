import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type Props = {
  current: string;
  currentPath: string;
  parent?: {label: string; path: string} | null;
};

export default function Breadcrumbs({
  current,
  currentPath,
  parent = {label: 'Consultations', path: '/consultations'},
}: Props): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const homeUrl = new URL(useBaseUrl('/'), siteConfig.url).href;
  const parentUrl = new URL(
    useBaseUrl(parent?.path ?? '/consultations'),
    siteConfig.url,
  ).href;
  const currentUrl = new URL(useBaseUrl(currentPath), siteConfig.url).href;
  const breadcrumbItems = [
    {label: 'Accueil', path: '/'},
    ...(parent ? [parent] : []),
    {label: current, path: currentPath},
  ];
  const breadcrumbUrls = [
    homeUrl,
    ...(parent ? [parentUrl] : []),
    currentUrl,
  ];
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map(({label}, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: label,
      item: breadcrumbUrls[index],
    })),
  };

  return (
    <>
      <nav className={styles.breadcrumbs} aria-label="Fil d’Ariane">
        <ol>
          {breadcrumbItems.map(({label, path}, index) => {
            const isCurrent = index === breadcrumbItems.length - 1;
            return (
              <li
                key={`${label}-${path}`}
                aria-current={isCurrent ? 'page' : undefined}>
                {index > 0 && <span aria-hidden="true">/</span>}
                {isCurrent ? label : <Link to={path}>{label}</Link>}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
      />
    </>
  );
}
