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
            "description": "Psychologue à Saint-Amand-les-Eaux. Accompagnement psychologique pour enfants, adolescents et adultes.",
            "url": "https://thibdeez.github.io/adeline.poirette.psychologue/",
            "telephone": "+33-XXX-XXX-XXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Saint-Amand-les-Eaux",
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
                "closes": "19:00"
              }
            ],
            "priceRange": "50€",
            "paymentAccepted": ["Cash", "Check"],
            "areaServed": {
              "@type": "City",
              "name": "Saint-Amand-les-Eaux"
            },
            "availableLanguage": ["French"],
            "medicalSpecialty": "Psychology",
            "serviceType": [
              "Consultation psychologique",
              "Psychothérapie",
              "Accompagnement enfants",
              "Accompagnement adolescents",
              "Accompagnement adultes"
            ]
          })
        }}
      />
      {children}
    </>
  );
}

