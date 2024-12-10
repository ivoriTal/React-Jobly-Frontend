import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job, appliedJobs, applyForJob }) => {
  const hasApplied = appliedJobs.includes(job.id);

  const handleApply = async () => {
    if (!hasApplied) {
      await applyForJob(job.id);
    }
  };

  return (
    <div>
      <Link to={`/jobs/${job.id}`}>
        <h2>{job.title}</h2>
      </Link>
      <p>{job.company}</p>
      <p>{job.salary ? `Salary: ${job.salary}` : 'Salary: Not specified'}</p>
      <p>{job.equity ? `Equity: ${job.equity}` : 'Equity: Not specified'}</p>
      <button onClick={handleApply} disabled={hasApplied}>
        {hasApplied ? 'Applied' : 'Apply'}
      </button>
    </div>
  );
};

export default JobCard; 