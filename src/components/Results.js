import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

class Results extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

// Display each course's items in a <ul>. 
    render() {
    let childrenHors = <ul>
        {this.props.hors.map((h,i) => {
            return(<li>
                {h}
                </li>)
        })}
        </ul>
    let childrenSoup = <ul>
        {this.props.soup.map((h,i) => {
            return(<li>
                {h}
                </li>)
        })}
        </ul>
    let childrenFish = <ul>
        {this.props.fish.map((h,i) => {
            return(<li>
                {h}
                </li>)
        })}
        </ul>
    let childrenSalad = <ul>
        {this.props.salad.map((h,i) => {
            return(<li>
                {h}
                </li>)
        })}
        </ul>
    let childrenMain = <ul>
        {this.props.main.map((h,i) => {
            return(<li>
                {h}
                </li>)
        })}
        </ul>
        let childrenDessert = <ul>
        {this.props.dessert.map((h,i) => {
            return(<li>
                {h}
                </li>)
        })}
        </ul>
    return (
        <div>
            <h4>Allergy Info: {this.props.allergy.map((a,i) => {
                return ( <span>
                    {(i ? ', ' : '')+a}
                    </span> )})}
            </h4>
            <List className="list">
                {/* If no dishes are selected, skip displaying that course */}
                {this.props.hors.length > 0 &&  
                <ListItem className="list-item">
                    <ListItemAvatar>
                        <Avatar src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200707-r-xl-grilled-vegetable-bruschetta.jpg%3Fitok%3DkP4cvjXP&w=1600&q=70">
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hors d'oeuvres"  secondary={childrenHors}/>
                </ListItem>
                }
                {this.props.soup.length > 0 &&
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201409-xl-tomato-soup-with-feta-olives-and-cucumber.jpg%3Fitok%3DwVUbCG-4&w=1600&q=70">
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Soup" secondary={childrenSoup}/>
                </ListItem>
                }
                 {this.props.fish.length > 0 &&
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1532533774%2Fseared-salmon-with-summer-vegetables-XL-RECIPE0918.jpg&w=1600&q=70">
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Fish" secondary={childrenFish}/>
                </ListItem>
                }
                 {this.props.salad.length > 0 &&
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201206-xl-classic-caesar-salad.jpg%3Fitok%3DGbtQ427B&w=1600&q=70">
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Salad" secondary={childrenSalad}/>
                </ListItem>
                }
                 {this.props.main.length > 0 &&
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1532533774%2Fseared-salmon-with-summer-vegetables-XL-RECIPE0918.jpg&w=1600&q=70">
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Main" secondary={childrenMain}/>
                </ListItem>
                }
                {this.props.dessert.length > 0 &&
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1527190887%2Fbrown-sugar-cake-with-ricotta-and-blueberries-ft-RECIPE0718.jpg%3Fitok%3D24grW74f&w=1600&q=70">
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Dessert" secondary={childrenDessert}/>
                </ListItem>
                }
        </List>
      </div>
    );
}
}

export default Results;
