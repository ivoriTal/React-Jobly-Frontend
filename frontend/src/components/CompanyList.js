import React, { useEffect, useState } from 'react';
import JoblyApi from '../api';

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            const companiesData = await JoblyApi.getCompanies();
            setCompanies(companiesData);
        };
        fetchCompanies();
    }, []);

    return (
        <div>
            <h2>Companies</h2>
            <ul>
                {companies.map(company => (
                    <li key={company.id}>
                        <a href={`/companies/${company.id}`}>{company.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyList; 