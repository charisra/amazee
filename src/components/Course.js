import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import { data } from '../fe-tech-data.js'
import Button from '@material-ui/core/Button';

class Course extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCourses:[],
            allergy: [],
            cardSelected: false,
            selectedElement: {}
        }
    }

    // Store allergies from every step
    handleClick = (i, title, allergy) => {
      let arr = this.state.selectedCourses;
      if (arr.includes(title)) {
        let arr2 = arr.filter(item => item !== title)
        arr = arr2;
      } else {
        arr.push(title);
      }

      let allergyArr = this.state.allergy;
      let arrergyArrFinal = [...allergyArr, ...allergy];
      let selected = this.state.selectedElement;
      selected[i] = !selected[i];
      this.setState({selectedCourses:arr, allergy: arrergyArrFinal, cardSelected: !this.state.cardSelected, selectedElement: selected})
    }

    // Fires when the user clicks the 'Next' button and triggers the function on the parent (Home). 
    // Also checks that at least one main course is selected
    handleClickNext = () => {
      if (this.props.step === 4 && this.state.selectedCourses.length === 0) {
        alert("Please select at least one main course to continue")
      } else {
      this.props.nextStep(this.state.selectedCourses, this.props.step, this.state.allergy)
      this.setState({selectedCourses: []})
    }
    }

    render() {
    return (
        <div>
          <h4 className="text-center">Select your {this.props.text} below:</h4>
          <div className="card-container">
          {data.map((course,i) => {
            let currentStep;
            course.courseType.map(type => {
                if(this.props.step === type) {
                  currentStep = type;
                }
              })
              return(
                currentStep >= 0 && 
                <Card key={course.id} onClick={()=>this.handleClick(i, course.title, course.allery)} className={this.state.selectedElement[i] ? "selected card": "card"}>
                <CardActionArea>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className="avatar">
                        {course.title.substring(0,1)}
                    </Avatar>
                    }
                    title={course.title}
                />
                <CardMedia
                    className="media"
                    image={course.image}
                    title="course-image"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {course.description}
                    </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
              )
         })}
        </div>
        <Button variant="contained" color="primary" className="button" style={{marginBottom:20,marginTop:15}} onClick={this.handleClickNext}>
        Next
      </Button>
        </div>
    );
}
}

export default Course;
