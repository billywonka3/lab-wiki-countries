import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import axios from 'axios';
import Countrydetail from './components/Countrydetail';
import data from './countries.json';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {allcountries: data, codeCountry:''}
  }

  showDetail = (countryx)=>{
    // console.log("was cliked " + countryx.cca3 );
    this.props.history.push('/countrydetails/'+ countryx.cca3 );
    // this.setState = {codeCountry: }
  }
  
  showCountries= ()=>{
    return (
      this.state.allcountries.map((clickedItem, i)=>{
        return (
          <div onClick={ ()=>{this.showDetail(clickedItem)} } key={i} className="showdetail">
            <h5 > {clickedItem.flag} {clickedItem.name.common} </h5>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className="container">

        <div>
          <nav className="navbar navbar-light bg-primary">
            <a className="navbar-brand" href="/">
              <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
            </a>
            <ul className="navbar-nav">
              <li className="text-white">WikiCountries</li>
            </ul>
          </nav>
        </div>

        <div className="row">
          <div className="col-5">

            {this.showCountries()}
          
          </div>

          <div className="col-7">
            <Switch>
              {/* <Route exact path='/' component={Home}/> */}
              <Route path='/countrydetails/:code' component={Countrydetail}/>
            </Switch>
          </div>
        </div>

      </div>
    );
  }
}
 
export default App;


/* <div>here all coiuntries  {this.state.allcountries[0].name.common }</div> */
 // https://raw.githubusercontent.com/mledoze/countries/master/countries.json
 
//   const restCountriesApi = axios.create({
//     baseURL: 'https://restcountries.eu/rest/v2/all/'
// });
// restCountriesApi.get()
// .then(responseFromAPI => {
//     console.log('Response from API is: ', responseFromAPI.data);           
// })
// .catch(err => {
// console.log('Error is: ', err);
// })