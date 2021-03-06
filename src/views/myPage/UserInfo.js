import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HeaderInfo } from "../../components/HeaderInfo.js";
import NavBar from "../../components/NavBar.js";
import Button from "@material-ui/core/Button";
import { useGlobal } from "../../globalContext";
import { useAuth } from "../../AuthContext";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { BlackBackgroundLgButton } from "../../components/BlackBackgroundLgButton.js";
import { MultipleForms } from "../../components/MultipleForms.js";
import Alert from "../../components/Alert.js";
import Divider from "../../components/Divider.js";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%"
    }
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
  infoTextField: { marginTop: "10px", width: "calc(100% - 25px)" }
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
  const data = [
    {
      title: "?????????",
      contentText: auth.user && auth.user.email,
      link: "/store/apply/address",
      bUsing: true,
      disabled: true,
      bButton: false
    },
    {
      title: "????????????",
      contentText: auth.userExtraInfo.phoneNumber,
      link: "/store/apply/contact",
      bUsing: true,
      value: auth.user && auth.user.phoneNumber,
      bButton: true,
      disabled: true,
      onclick: function () {
        if (!auth.userExtraInfo.bProfitable) {
          props.history.push("/login/register/fifth");
          return;
        }
        props.history.push("/mypage/userinfo/edit");
        return;
      }
    }
  ];

  const extraData = [
    {
      title: "????????????",
      contentText: auth.userExtraInfo && auth.userExtraInfo.birthdate,
      link: "/mypage/userinfo/edit",
      bUsing: true,
      disabled: true,
      bButton: true,
      onclick: function () {
        if (!auth.userExtraInfo.bProfitable) {
          props.history.push("/login/register/fifth");
          return;
        }
        props.history.push("/mypage/userinfo/edit");
        return;
      }
    },
    {
      title: "??????",
      contentText: auth.userExtraInfo && auth.userExtraInfo.bank,
      link: "/mypage/userinfo/edit",

      bUsing: true,
      bButton: true,
      disabled: true,
      onclick: function () {
        if (!auth.userExtraInfo.bProfitable) {
          props.history.push("/login/register/fifth");
          return;
        }
        props.history.push("/mypage/userinfo/edit");
        return;
      }
    },
    {
      title: "????????????",
      contentText: auth.userExtraInfo && auth.userExtraInfo.accountHolder,
      link: "/store/apply/address",
      bUsing: true,
      bButton: true,
      disabled: true,
      onclick: function () {
        if (!auth.userExtraInfo.bProfitable) {
          props.history.push("/login/register/fifth");
          return;
        }
        props.history.push("/mypage/userinfo/edit");
        return;
      }
    },
    {
      title: "?????????",
      contentText: auth.userExtraInfo && auth.userExtraInfo.bank,
      link: "/store/apply/address",
      bUsing: true,
      bButton: true,
      disabled: true,
      onclick: function () {
        if (!auth.userExtraInfo.bProfitable) {
          props.history.push("/login/register/fifth");
          return;
        }
        props.history.push("/mypage/userinfo/edit");
        return;
      }
    }
  ];
  console.log("??????", auth);

  ///////////////////////////////////
  return (
    <>
      <Slide
        direction="left"
        in={true}
        timeout={{ enter: "0.15s", exit: "5s" }}
        mountOnEnter
        unmountOnExit
      >
        <div>
          {!auth.userExtraInfo.bProfitable && (
            <Alert
              type="error"
              title="????????????"
              description="??????????????? ???????????? ????????? ????????? ???????????? ????????????"
              actionDescription="????????????"
              link="/mypage/userinfo/edit"
              onClick={() => {
                props.history.push("/login/register/fifth");
              }}
            ></Alert>
          )}
          <header>
            <NavBar title="?????????" backLink="/mypage" />
          </header>

          <main>
            <Divider />

            <section
              style={{
                marginTop: "32px"
              }}
              className={classes.section}
            >
              <div
                style={{
                  fontSize: "22px",
                  marginLeft: "22px",
                  marginTop: "24px",
                  marginBottom: "54px"
                }}
              >
                <span>??????????????????</span>
              </div>
              <MultipleForms data={data} />
            </section>
            <div></div>
            <Divider />

            <section
              style={{
                marginTop: "32px"
              }}
              className={classes.section}
            >
              <div
                style={{
                  fontSize: "22px",
                  marginLeft: "22px",
                  marginTop: "24px",
                  marginBottom: "54px"
                }}
              >
                <span>????????????</span>
              </div>
              <MultipleForms data={extraData} />
            </section>

            <BlackBackgroundLgButton title={"??????"} />
          </main>
          <footer></footer>
        </div>
      </Slide>
    </>
  );
}

export default LoginPage;
