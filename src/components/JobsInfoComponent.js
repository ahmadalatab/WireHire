import React from 'react';
import { Postings } from '../shared/Postings';
import '../jobs.scss';
import FullJobPosting from './FullPostingComponent';
//import Apply from './ApplyComponent';

const JobsInfo = (props) => {

    const { match: { params } } = props;

    return (
        <div className="jobs container">
            {Postings.filter(job => job.id === parseInt(params.id)).map(job =>
                <FullJobPosting
                    key={job.id}
                    role={job.role}
                    description={job.description}
                    date={job.date}
                    id={job.id}
                />
            )}
        </div>
    );
}

export default JobsInfo;