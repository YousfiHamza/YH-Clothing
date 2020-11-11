/*eslint-disable*/
import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  selectCartHidden,
  selectCartItems,
} from "../../redux/cart/cart.selectors";

import { auth } from "../../firebase/firebase.utils.js";

// react components for routing our app without refresh
import { Link, withRouter } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import {
  StorefrontTwoTone,
  ContactMailTwoTone,
  ExitToAppTwoTone,
  ArtTrackTwoTone,
  ShoppingBasketTwoTone,
} from "@material-ui/icons";

// core components
import CustomDropdown from "../customDropdown/customDropdown.component";
import Button from "../customButton2/button.component";

import styles from "../headerLinks/headerLinks.styles";

const useStyles = makeStyles(styles);

const FooterLinks = ({ currentUser, hidden, cartItems, history }) => {
  const classes = useStyles();
  console.log(history);
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title={window.innerWidth <= 959 ? "And More ..." : "It's All "}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/YH-Clothing/about-us" className={classes.navLink}>
            <ArtTrackTwoTone className={classes.icons} /> About Us
          </Link>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          title={window.innerWidth <= 959 ? "But it's Closed Now ..." : "Visit"}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/YH-Clothing/shop" className={classes.navLink}>
            <StorefrontTwoTone className={classes.icons} />
            Our Shop
          </Link>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title={window.innerWidth <= 959 ? "Or Dont ..." : "Try To"}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/YH-Clothing/contact" className={classes.navLink}>
            <ContactMailTwoTone className={classes.icons} /> Contact Us
          </Link>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title={window.innerWidth <= 959 ? "In-N-Out" : "You Should"}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          {currentUser ? (
            <a
              onClick={() => auth.signOut()}
              className={classes.navLink}
              style={{ cursor: "pointer" }}
            >
              <ExitToAppTwoTone className={classes.icons} /> SIGN OUT
            </a>
          ) : (
            <Link to="/YH-Clothing/sign-in" className={classes.navLink}>
              <ExitToAppTwoTone className={classes.icons} /> Sign In
            </Link>
          )}
        </Tooltip>
      </ListItem>
    </List>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(FooterLinks));