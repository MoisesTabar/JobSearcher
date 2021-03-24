import React from 'react';

function Error({children}){
    return(
        <article className="message is-danger" style={{marginTop: 15}}>
            <div className="message-body">
                {children}
            </div>
        </article>
    )
}

export default Error;