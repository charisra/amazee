import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const Results = (props) => {
  

// Display each course's items in a <ul>. 
    let children = [];
    const arr = [props.hors, props.soup, props.salad, props.fish, props.main, props.dessert]
    arr.map((item,i)=> {
        return(
            children[i] = <span key={i}><b>
            - {item}
            </b><br/></span>
        )
    })

    return (
        <div>
            <h4 className="text-center">Allergy Info: {props.allergy.map((a,i) => {
                return ( <span key={i}>
                    {(i ? ', ' : '')+a}
                    </span> )})}
            </h4>
            <List className="list">
                {/* If no dishes are selected, skip displaying that course */}
                {arr.map((item,i) => {
                    return(
                        item.length > 0 &&
                        <ListItem className="list-item" key={item}>
                        <ListItemAvatar>
                            <Avatar src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200707-r-xl-grilled-vegetable-bruschetta.jpg%3Fitok%3DkP4cvjXP&w=1600&q=70">
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Hors d'oeuvres"  secondary={item.map((course,i)=> {
                            return(
                                <i key={i} className="course-item">- {course}</i>
                            )
                        })}/> 
                    </ListItem>
                    )
                })}
        </List>
      </div>
    );
}

export default Results;
