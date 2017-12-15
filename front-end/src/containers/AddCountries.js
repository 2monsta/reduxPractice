import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AddCountryAction from '../actions/AddCountryAction';

class AddCountries extends Component{
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    var cName = document.getElementById("country-name").value;
    var newCountry ={
      countryName : cName
    };
    this.props.addCountries(newCountry);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" id={"country-name"} placeholder={"Add Country"}/>
        <button>Add</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addCountries: AddCountryAction
  },dispatch)
}

// export default AddCountries;
export default connect(null, mapDispatchToProps)(AddCountries);