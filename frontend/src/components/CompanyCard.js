import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = ({ company }) => {
  return (
    <div>
      <Link to={`/companies/${company.handle}`}>
        <h2>{company.name}</h2>
      </Link>
      <p>{company.description}</p>
    </div>
  );
};

export default CompanyCard; 