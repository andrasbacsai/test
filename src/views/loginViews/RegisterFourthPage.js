import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HeaderInfo } from "../../components/HeaderInfo.js";
import NavBar from "../../components/NavBar.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useGlobal } from "../../globalContext";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { useAuth } from "../../AuthContext";
import firebase from "../../firebaseConfig";

const useStyles = makeStyles((theme) => ({
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
  }
}));

function LoginPage(props) {
  const classes = useStyles(props);
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [emailVerified, setEmailVerified] = React.useState(false);

  const auth = useAuth();
  const context = useGlobal();
  React.useEffect(() => {
    if (auth.user.emailVerified) {
      setEmailVerified(true);
    } else {
      setEmailVerified(false);
    }
  }, [auth.user]);
  // firebase.auth().onAuthStateChanged((user) => {
  //   if (!user) {
  //     return;
  //   } else {
  //     if (user.emailVerified) {
  //       setEmailVerified(true);
  //     } else {
  //       setEmailVerified(false);
  //     }
  //   }
  // });
  // React.useEffect(() => {
  //   var actionCodeSettings = {
  //     url: "https://75qiy.csb.app",
  //     // iOS: {
  //     //   bundleId: "com.example.ios"
  //     // },
  //     // android: {
  //     //   packageName: "com.example.android",
  //     //   installApp: false,
  //     //   minimumVersion: "12"
  //     // },
  //     handleCodeInApp: true
  //   };
  //   if (!firebase.auth().currentUser) {
  //     alert("??????");
  //     return;
  //   }
  //   firebase
  //     .auth()
  //     .currentUser.sendEmailVerification(actionCodeSettings)
  //     .then(function () {
  //       // Verification email sent.
  //       return;
  //     })
  //     .catch(function (error) {
  //       // Error occurred. Inspect error.code.
  //       alert(error.message);
  //       console.log(error.code);
  //       console.log(error.message);
  //       return;
  //     }),
  //     [];
  // });
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
          <header>
            <NavBar title="???????????????" backLink="/login/register/second" />
          </header>

          <main>
            <section className={classes.section}>
              <div className={classes.amount}>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    opacity: "0.8",
                    letterSpacing: "5px",
                    margin: "16px 0 0 24px"
                  }}
                >
                  3/3
                </p>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    margin: "16px 0 0 24px"
                  }}
                >
                  {context.getRegisterInfo.email}??? ??????????????? ???????????????.
                </p>
                <Button
                  onClick={() => {
                    var actionCodeSettings = {
                      url: "https://dynamic.banto.mulli.world/hello",
                      iOS: {
                        bundleId: "io.banto.banto-partners-packaging"
                      },
                      // android: {
                      //   packageName: "com.example.android",
                      //   installApp: false,
                      //   minimumVersion: "12"
                      // },
                      handleCodeInApp: true
                    };
                    console.log(firebase.auth().currentUser, "?????????");
                    firebase
                      .auth()
                      .currentUser.sendEmailVerification(actionCodeSettings)
                      .then(function () {
                        // Verification email sent.
                        alert("?????? ????????? ?????????????????????");
                        return;
                      })
                      .catch(function (error) {
                        // Error occurred. Inspect error.code.
                        alert(error.message);
                        console.log(error.code);
                        console.log(error.message);
                        return;
                      });
                  }}
                >
                  ???????????? ???????????????
                </Button>
                {console.log(auth.user)}
                <p>{emailVerified ? "????????????" : "????????????"}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => {
                    const user = firebase.auth().currentUser;
                    if (!user) {
                      alert("????????? ?????? ??????????????? ????????????");
                      return;
                    }
                    if (user.emailVerified) {
                      props.history.push("/login/register/fourth");
                    } else {
                      alert(
                        `?????? ${context.getRegisterInfo.email}????????? ???????????? ???????????????`
                      );
                    }
                  }}
                  style={{
                    width: "64px",
                    height: "64px",
                    margin: "24px 32px",
                    borderRadius: "15px",
                    border: "2px solid #000A12",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "12px",
                    alignText: "right"
                  }}
                >
                  next
                </Button>
              </div>
            </section>
          </main>
          <footer></footer>
        </div>
      </Slide>
    </>
  );
}

export default LoginPage;
