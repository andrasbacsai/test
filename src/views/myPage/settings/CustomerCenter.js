import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HeaderInfo } from "../../../components/HeaderInfo.js";
import NavBar from "../../../components/NavBar.js";

import { useGlobal } from "../../../globalContext";
import { useAuth } from "../../../AuthContext";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import InfoIcon from "@material-ui/icons/Info";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  emptySpace: { width: "100%", height: "44px" },
  headerSpace: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "60px"
  },
  headerTitle: { fontSize: "18px", fontWeight: "bold", margin: "auto" },
  textField: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none"
    }
  },
  container: { backgroundColor: "#E5E5E5", width: "100%", height: "100vh" },
  header: {
    backgroundColor: "#E5E5E5",
    width: "100%",
    height: "30%",
    borderBottom: "1px solid black",
    display: "flex",
    alignItems: "center"
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "50%"
  },
  emailContainer: {
    width: "100%",
    alignContent: "center",
    textAlign: "center"
  },
  emailSpan: { textAlign: "center", width: "100%", alignSelf: "center" },

  useInfoEditButton: {
    alignSelf: "flex-start",
    backgroundColor: "#E0E0E0",
    width: "108px"
  }
}));

function LoginPage(props) {
  const classes = useStyles(props);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });
  const context = useGlobal();
  const auth = useAuth();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1)
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#52d869",
          opacity: 1,
          border: "none"
        }
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff"
      }
    },
    thumb: {
      width: 24,
      height: 24,
      backgroundColor: "white"
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[300]}`,
      backgroundColor: theme.palette.grey[300],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"])
    },
    checked: {},
    focusVisible: {}
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked
        }}
        {...props}
      />
    );
  });

  const BlackCheckbox = withStyles({
    root: {
      color: "black",
      "&$checked": {
        color: "black"
      }
    },
    checked: {
      color: "black"
    }
  })((props) => <Checkbox color="default" {...props} />);

  const MyPageHeader = () => (
    <div className={classes.headerContainer}>
      <div className={classes.emailContainer}>
        <span className={classes.emailSpan}>
          {auth.user.email && auth.user.email}
        </span>
      </div>
    </div>
  );
  const BantoSwitch = (props) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Typography
        variant="body1"
        component="h2"
        align="left"
        color="textPrimary"
        gutterBottom
      >
        {props.title}
      </Typography>
      <FormControlLabel
        control={<IOSSwitch checked={props.checked} {...props} />}
      />
    </div>
  );

  return (
    <>
      <Slide
        direction="left"
        in={true}
        timeout={{ enter: "0.15s", exit: "5s" }}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.root}>
          <NavBar title="????????????" backLink="/sales/regist/contact" />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <Typography
                  variant="h6"
                  component="h2"
                  align="left"
                  color="textPrimary"
                  gutterBottom
                >
                  ?????? ????????????
                </Typography>
                <Typography
                  variant="body1"
                  component="h2"
                  align="left"
                  gutterBottom
                >
                  ???????????????, ?????? ?????????????????????.
                  <br /> ????????? ??????????????? ?????? ????????? ????????? 1:1 ?????????
                  ???????????? ???????????? ????????????. <br />
                  ??????????????? ????????????????????? ??????????????? ?????? ???????????? ????????????.
                  <br />
                  ????????? ?????? 1~2??? ?????? ????????????, ????????? ????????? ????????? ????????????
                  ????????? ????????? ?????? ??? ????????????. <br />
                  ????????? ?????? ???????????? ?????? ?????? ??? ????????? ?????????????????????.
                </Typography>
                <Typography variant="body1" component="h2" align="left">
                  * ???????????? : ?????? 10:00 ~ 19:00
                </Typography>
                <Divider light />

                <div
                  style={{
                    width: "100%",
                    margin: "16px 0px",
                    display: "flex",
                    justifyContent: "flex-start"
                  }}
                >
                  <Button
                    className={classes.useInfoEditButton}
                    onClick={() => {
                      props.history.push("/mypage/userinfo");
                    }}
                    style={{ marginRight: "16px" }}
                  >
                    ????????????
                  </Button>
                  <Button
                    className={classes.useInfoEditButton}
                    onClick={() => {
                      props.history.push("/mypage/userinfo");
                    }}
                  >
                    ???????????? ??????
                  </Button>
                </div>

                <Box m={2} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Slide>
    </>
  );
}

export default LoginPage;
