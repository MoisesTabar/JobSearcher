import '../styles/Jobs.css';
import React, { useState } from 'react';
import Search from './Search';
import Error from './Error';

function Jobs(){
    const [ results, setResults ] = useState([]);
    const [ noResults, setNoResults ] = useState(false);

    const setState = (results) => {
        setResults(results);
        setNoResults({ noResults: true });
    }

    const displayResults = () => {
        return(
            <div className="jobs-list">
                {
                    results.map(job => {
                        return(
                        <div className="box">
                            <h2 className="title is-2">{job.title}</h2>
                            <p className="subtitle is-5">Company:${job.company}</p>
                            <p className="subtitle is-5">Contract type:${job.type}</p>
                            <a className="button is-black" href={job.url}>Extend vacant</a>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
    const renderInfo = () => {
        return results.length === 0 ? <Error>Sorry, no results</Error> : displayResults()
    }

    return (
        <div>
            <Search onResults={setState}/>
            <div>
                { noResults ? renderInfo() : null }
            </div>
        </div>
    )
}

export default Jobs;