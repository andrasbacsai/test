import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  backButton: {
    padding: "12px 10px 12px 20.75px"
  },
  backButtonImg: { width: "11px", height: "20px" },
  emptySpace: { width: "100%", height: "24px" },
  headerSpace: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "60px"
  },
  headerTitle: { fontSize: "18px", marginLeft: "-44px", fontWeight: "bold" }
}));
const NavBar = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <div className={classes.emptySpace} />
      <div className={classes.headerSpace}>
        <Link
          onClick={() => {
            console.log("요기야");
            window.location.href = props.backLink;
            return;
          }}
          className={classes.backButton}
        >
          <img
            className={classes.backButtonImg}
            src={require("../assets/img/backButton.png")}
            alt="logo"
          />
        </Link>
        <span className={classes.headerTitle}>{props.title}</span>
        <span />
      </div>
      <div className={classes.emptySpace} />
    </>
  );
};

export default withRouter(NavBar);
