import React, {Component} from 'react';
import moment from 'moment';

class DatePicker extends Component {
    state = {
        age: '',
        dateOfBirth: ''
    }
    //initially, age & dateOfBirth are undefined so we set the state to be...nothing(an empty string.)
  
    dateOfBirthChangedHandler = (event) => {
        this.setState({ dateOfBirth: event.target.value })
    }
    //our dateOfBirth change handler is taking event as an argument and setting the state of dateOfBirth to the value of the targeted element ()
    calculateAge = (event) => {
        event.preventDefault();
        const now = moment();
        const birthDay = moment(this.state.dateOfBirth);
        if (now < birthDay) {
            alert('Birth date must be less than todays date');
            return null;
        }
        this.setState({age: now.diff(birthDay, "years")});
    };

 
    render() {
        return (
            <div className="displayAgeCard">
                <p className="headerText"> Enter your date of birth</p>
                <form onSubmit={this.calculateAge}>
                <input type="date" id="datePicker" onChange={this.dateOfBirthChangedHandler} required={true} />
                <button type="submit" id="calculateButton"> Calculate Age </button>
                <p className="ageText"> {this.state.age} </p>
                </form>
            </div>
        );
    }
}
export default DatePicker;