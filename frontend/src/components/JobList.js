import React, { useEffect, useState } from 'react';
import JoblyApi from '../api';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const jobsData = await JoblyApi.getJobs();
            console.log(jobsData);
            setJobs(jobsData);
        };
        fetchJobs();
    }, []);

    return (
        <div>
            <h2>Jobs</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <a href={`/jobs/${job.id}`}>{job.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList; 