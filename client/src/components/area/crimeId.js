import React, {Component} from 'react';
import CrimeAPI from '../crimes/crimeAPI';

class CrimeId extends Component {
    render(){
        return(
            <div className="container col xs12">
                <CrimeAPI/>
            </div>
        )
    }
}


export default CrimeId;
