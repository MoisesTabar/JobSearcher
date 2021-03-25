import '../styles/Search.css';
import React, { useState } from 'react';
import axiosClient from '../config/axios.config';
import Error from './Error';

function Search(props){
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const { onResults = [] } = props

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(input === ''){
            setError(true);
            return; 
        }

        setError(false);
        
        const request = await axiosClient.get(input);
        const response = await request.data.contents;

        console.log(JSON.parse(response));

        onResults(JSON.parse(response));
    }   

    return(
        <div className="search-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-normal" onChange={e => setInput(e.target.value)} type="text" placeholder="Example: NodeJS, Python" />
                </div>

                <button className="button is-black">Search for jobs</button>
            </form>
            {error ? <Error>Please enter a search term</Error> : null}
        </div>
    )
}

export default Search;