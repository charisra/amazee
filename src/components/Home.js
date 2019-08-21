import React, { Component } from 'react';
import Course from './Course';
import Results from './Results';

class Home extends Component {
    constructor(props){
        super(props);
        //Save state on the Home (parent) component, which then renders children and passes props
        this.state = {  
            step: 0,
            text: 'Hors d\'oeuvres',
            hors: '',
            soup: '',
            fish: '',
            salad: '',
            main: '',
            dessert: '',
            allergy: [],  
        }
    }

// Fires each time the user clicks 'Next' button. Increments the 'step' in state and updates the data the user passes
nextStep = (courses, step, allergy) => {
    let arr = [];
    arr.push(allergy);
    function onlyUnique(value, index, self) {   // Remove duplicates from allergy array 
        return self.indexOf(value) === index;
    }
    let arrFinal = allergy.filter(onlyUnique);
    this.setState({allergy: arrFinal});
    switch (step) {
        case 0:
            this.setState({hors:courses, text: 'Soup'})
            break;
        case 1:
            this.setState({soup:courses, text: 'Fish'})
            break
        case 2:
            this.setState({fish:courses, text: 'Salad'})
            break;
        case 3:
            this.setState({salad:courses, text: 'Main course'})
            break
        case 4:
            this.setState({main:courses, text: 'Dessert'})
            break;
        case 5:
            this.setState({dessert:courses})
            break;
    }
    this.setState({step: this.state.step + 1})
}

    render() {
    return (
        <div>
            {this.state.step >= 6 ? <h1>Below are your course selections. Bon Appétit... </h1> : <h1>Welcome to the Amazee Labs Restaurant Menu</h1>}
            {this.state.step >= 6 ?
            <Results allergy={this.state.allergy} hors={this.state.hors} soup={this.state.soup} fish={this.state.fish} salad={this.state.salad} main={this.state.main} dessert={this.state.dessert}/> :
            <Course step={this.state.step} nextStep={this.nextStep} text={this.state.text}/>
            }
        </div>
    );
}
}

export default Home;
