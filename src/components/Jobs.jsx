import '../styles/Jobs.css';
import React from 'react'

function Jobs(props){
    const { company, type, title, url } = props;

    return(
        <div className="box">
            <h2 className="title is-3">{title}</h2>
            <p className="subtitle is-5">Company: {company}</p>
            <p className="subtitle is-5">Contract type: {type}</p>
            <a className="button is-black" href={url}>Lookup Vacant</a>
        </div>
    )
}

export default Jobs;