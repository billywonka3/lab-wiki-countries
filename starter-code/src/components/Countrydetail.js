import React, {Component} from 'react';
import '../App.css';
import data from '../countries.json';

class Countrydetail extends Component {
    constructor(props){
        super(props)
            this.state = { theCountry:''}
    }

    fetchCountry() {
        let theCode = this.props.match.params.code;
        // console.log(theCode)

        let theCountry = allItems.find((eachItem)=>{
            return eachItem.cca3 === theCode;
        })
    }



    render(){
        return(
            // console.log('render active')
            <table className="table">
                <thead>
                    <tr>
                    
                        <th colSpan="2" className="">  </th>
                    
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    
                        <td>Capital</td>
                        <td>Otto</td>
                    
                    </tr>
                    <tr>
                    
                        <td>Area</td>
                        <td>Thornton</td>
                    
                    </tr>
                    <tr>
                    
                        <td>Borders</td>
                        <td>the Bird</td>
                    
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Countrydetail;