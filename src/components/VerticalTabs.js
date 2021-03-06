import React from "react";
import firebase from "firebase";
import { Tabs, Tab } from "@material-ui/core";
import {
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EventIcon from "@material-ui/icons/Event";
import CreateIcon from "@material-ui/icons/Create";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import { Link } from "react-router-dom";

let useStyle = makeStyles({
  tabs: {
    backgroundColor: "#dadada"
  }
});

export default function VerticalTabs(props) {
  let classes = useStyle();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  let logout = () => {
    firebase.auth().signOut();
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <List component="nav" className={classes.tabs}>
      {/* <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link> */}
      <Link style={{ textDecoration: "none", color: "black" }} to="/blogs">
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="Blogs" />
        </ListItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/events">
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
      </Link>
      <ListItem button onClick={logout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
    // <Tabs orientation='vertical' className={props.style}>
    //   <Link to='/posts'>
    //     <Tab icon={<CreateIcon/>} label='Posts' />
    //   </Link>
    //   <Link to='events'>
    //     <Tab label='Events'>
    //     </Tab>
    //   </Link>
    // </Tabs>
  );
}
