import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import "../../../../index.css"

const NavigationListBlogT: React.FC = () => { 

  const classes = useStyles();





    return ( 
  
        <nav className={classes.MenuLeft}>
            <ul className={classes.MenuLeftUl}>
                <li className={classes.MenuLeftLi}>  <Link className={classes.MenuLeftLink} to="/products"> Техники знакомств</Link></li>
                <li className={classes.MenuLeftLi}> <Link className={classes.MenuLeftLink} to="/products"> Где знакомится</Link> </li>
                <li className={classes.MenuLeftLi}> <Link className={classes.MenuLeftLink} to="/products"> Куда пойти</Link> </li>
            </ul>
        </nav>    

    )
}
export default NavigationListBlogT;

