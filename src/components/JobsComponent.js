import React from 'react';
import JobPosting from './JobPostingComponent';
import Search from './SearchComponent';
import { Postings } from '../shared/Postings';
import '../jobs.scss';

const Jobs = () => {

    return (
        <div className="jobs container">
            <Search />
            {Postings.map((job) => (
                <JobPosting 
                    key={job.id}
                    role={job.role}
                    description={job.description}
                    date={job.date}
                    location={job.location}
                    id={job.id}
                />
            ))}
        </div>
    );
}

export default Jobs;