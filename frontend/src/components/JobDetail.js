import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api';

const JobDetail = ({ currentUser }) => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      const jobData = await JoblyApi.getJob(id); // Ensure you have this method in your API class
      setJob(jobData);
      if (currentUser) {
        const userProfile = await JoblyApi.getUserProfile(currentUser.username);
        setHasApplied(userProfile.applications.includes(jobData.id));
      }
    };
    fetchJob();
  }, [id, currentUser]);

  const handleApply = async () => {
    if (!hasApplied) {
      await JoblyApi.applyToJob(job.id);
      setHasApplied(true);
    }
  };

  if (!job) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.description}</p>
      <p>{job.salary ? `Salary: ${job.salary}` : 'Salary: Not specified'}</p>
      <p>{job.equity ? `Equity: ${job.equity}` : 'Equity: Not specified'}</p>
      <button onClick={handleApply} disabled={hasApplied}>
        {hasApplied ? 'Applied' : 'Apply'}
      </button>
    </div>
  );
};

export default JobDetail; 