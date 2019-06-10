import React from 'react';
import {Link} from 'react-router-dom';


const Nopage = () => {
    return( 
        <div>
            <p>404 - content not found, go home</p>
            <Link to="/">Home</Link>
        </div>
    )
}
export default Nopage;