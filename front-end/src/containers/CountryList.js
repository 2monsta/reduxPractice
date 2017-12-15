import React, {Component} from 'react';
import {connect} from 'react-redux';

class CountryList extends Component{
  render(){
    var countryArray = this.props.country.map((data, index)=>{
      // console.log(data.Name);
      return (
        <li key={index}>{data.Name}</li>
      )
    });
    // console.log(countryArray);
    return(
      <div>
        <h1>Hello World</h1>
        <ul>
          {countryArray}
        </ul>
      </div>
    )
  }
}

// export default CountryList;
function mapStateToProps(state){
  return {
    country: state.countries
  }
}
export default connect(mapStateToProps)(CountryList)