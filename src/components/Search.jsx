import '../styles/Search.css';
import React, { useState } from 'react';
import axiosClient from '../config/axios.config';

function Search(){
    return(
        <div className="search-wrapper">
            <div className="control has-icons-left has-icons-right">
                <input className="input is-normal" type="text" placeholder="Example: NodeJS, Python" />
            </div>
        </div>
    )
}

export default Search;