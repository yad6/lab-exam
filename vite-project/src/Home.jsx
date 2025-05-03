import React from 'react';

function Home() {
  const companies = [
    {
      id: 1,
      name: 'Grameenphone',
      sector: 'Telecommunications',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Grameenphone_Logo.svg/1200px-Grameenphone_Logo.svg.png',
      headquarter: 'Dhaka',
      founded: 1997,
      description: 'Largest mobile telecommunications operator in Bangladesh',
    },
    {
      id: 2,
      name: 'Square Pharmaceuticals',
      sector: 'Pharmaceutical',
      logo: 'https://www.squarepharma.com.bd/images/logo.png',
      headquarter: 'Dhaka',
      founded: 1958,
      description: 'Leading pharmaceutical company in Bangladesh',
    },
    {
      id: 3,
      name: 'Beximco Pharmaceuticals',
      sector: 'Pharmaceutical',
      logo: 'https://www.beximcopharma.com/wp-content/uploads/2020/04/bpl-logo.png',
      headquarter: 'Dhaka',
      founded: 1976,
      description: 'Innovator in generic pharmaceutical products',
    },
    {
      id: 4,
      name: 'BRAC Bank',
      sector: 'Banking',
      logo: 'https://www.bracbank.com/sites/default/files/logo.png',
      headquarter: 'Dhaka',
      founded: 2001,
      description: 'Leading SME-focused commercial bank',
    },
    {
      id: 5,
      name: 'Walton Hi-Tech Industries',
      sector: 'Electronics',
      logo: 'https://www.waltonbd.com/image/catalog/logo.png',
      headquarter: 'Gazipur',
      founded: 1977,
      description: 'Leading electronics and appliance manufacturer',
    },
    {
      id: 6,
      name: 'PRAN-RFL Group',
      sector: 'Food & Beverage',
      logo: 'https://www.pranfoods.net/image/logo.png',
      headquarter: 'Dhaka',
      founded: 1981,
      description: 'Largest agro food processor and exporter',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Top Bangladeshi Companies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-4 flex justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="h-32 object-contain"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Sector:</span> {company.sector}
                </p>
                <p>
                  <span className="font-medium">Headquarter:</span> {company.headquarter}
                </p>
                <p>
                  <span className="font-medium">Founded:</span> {company.founded}
                </p>
                <p>
                  <span className="font-medium">About:</span> {company.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
