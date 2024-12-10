import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api';

const CompanyDetail = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      const companyData = await JoblyApi.getCompany(handle);
      setCompany(companyData);
    };
    fetchCompany();
  }, [handle]);

  if (!company) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <h2>Jobs at {company.name}</h2>
      <ul>
        {company.jobs.map(job => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDetail; 