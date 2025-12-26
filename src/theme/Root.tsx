import React from 'react';

export default function Root({children}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Psychologist",
            "name": "Adeline Poirette",
            "description": "Psychologue clinicienne spécialisée en périnatalité à Saint-Amand-les-Eaux. Accompagnement psychologique des adultes, futurs parents, jeunes parents. Dépression post-partum, PMA, deuil périnatal, guidance parentale.",
            "url": "https://thibdeez.github.io/adeline.poirette.psychologue/",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "13 Rue du 18 Juin 1940",
              "addressLocality": "Saint-Amand-les-Eaux",
              "postalCode": "59230",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.4478",
              "longitude": "3.4294"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "12:30"
              }
            ],
            "priceRange": "50€",
            "paymentAccepted": ["Cash", "Credit Card"],
            "areaServed": [
              {
                "@type": "City",
                "name": "Saint-Amand-les-Eaux"
              },
              {
                "@type": "City",
                "name": "Lille"
              },
              {
                "@type": "City",
                "name": "Valenciennes"
              },
              {
                "@type": "City",
                "name": "Douai"
              },
              {
                "@type": "City",
                "name": "Orchies"
              },
              {
                "@type": "City",
                "name": "Raismes"
              },
              {
                "@type": "City",
                "name": "Condé-sur-l'Escaut"
              },
              {
                "@type": "City",
                "name": "Denain"
              },
              {
                "@type": "City",
                "name": "Villeneuve-d'Ascq"
              },
              {
                "@type": "City",
                "name": "Marcq-en-Barœul"
              },
              {
                "@type": "City",
                "name": "Roubaix"
              },
              {
                "@type": "City",
                "name": "Tourcoing"
              }
            ],
            "availableLanguage": ["French"],
            "medicalSpecialty": ["Perinatal Psychology", "Clinical Psychology"],
            "serviceType": [
              "Consultation psychologique",
              "Périnatalité",
              "Accompagnement à la parentalité",
              "Dépression post-partum",
              "Accompagnement PMA",
              "Deuil périnatal",
              "Guidance parentale"
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Numéro ADELI",
                "name": "599326485"
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Numéro RPPS",
                "name": "10009288001"
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}

