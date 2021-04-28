import React, { useState } from 'react';
import JobPosting from './JobPostingComponent';
import Search from './SearchComponent';
import { Postings } from '../shared/Postings';
import '../jobs.scss';

const Jobs = () => {

    const [keywordInput, setKeywordInput] = useState('');
    const [locationInput, setLocationInput] = useState('');
    const [jobDisplay, setJobDisplay] = useState(Postings);
    const [originalList, setOrignalList] = useState(jobDisplay);

    const searchKeywordUpdated = (e) => {
        const searchQuery = e.target.value;
        setKeywordInput(searchQuery);
    }

    const searchLocationUpdated = (e) => {
        const locationQuery = e.target.value;
        setLocationInput(locationQuery);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setKeywordInput(keywordInput);
        setLocationInput(locationInput);
        const filterDisplay = Postings.filter(job => {
            if (keywordInput && locationInput) {
                return (
                    job.role.toLowerCase().includes(keywordInput.toLowerCase()) &&
                    job.location.toLowerCase().includes(locationInput.toLowerCase())
                )
            }
            else if (keywordInput && !locationInput) {
                return (
                    job.role.toLowerCase().includes(keywordInput.toLowerCase())
                )
            }
            else {
                return (
                    job.location.toLowerCase().includes(locationInput.toLowerCase())
                )
            }
        });
        setJobDisplay(filterDisplay ? filterDisplay : Postings);
        setOrignalList(filterDisplay ? filterDisplay : Postings);
    }

    const handleSort = (e) => {
        let sortBy = e.target.value;
        let sortedList = [...jobDisplay];
        if (sortBy === 'date') {
            sortedList.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
            setJobDisplay(sortedList);
        }
        else {
            setJobDisplay(originalList);
        }
    }

    return (
        <div className="jobs container">
            <Search 
                keywordInput={keywordInput}
                keywordInputChanged={(e) => searchKeywordUpdated(e)}
                handleSearch={(e) => handleSearch(e)}
                locationInput={locationInput}
                locationInputChanged={e => searchLocationUpdated(e)}
                handleSort={e => handleSort(e)}
            />
            {jobDisplay.map((job) => (
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