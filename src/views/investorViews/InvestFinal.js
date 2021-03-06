import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";

import { HeaderInfo } from "../../components/HeaderInfo.js";
import NavBar from "../../components/NavBar.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { Link } from "react-router-dom";
import * as common from "../../common";
import Slide from "@material-ui/core/Slide";
import { useGlobal } from "../../globalContext";
import Alert from "../../components/Alert";
import { useAuth } from "../../AuthContext";
import * as constant from "../../Const";

const useStyles = makeStyles((theme) => ({
  card: { backgroundColor: "black", margin: "12px 16px", borderRadius: "15px" },
  description: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    marginTop: "16px"
  },
  card2: {
    backgroundColor: "#F7F7F7",
    margin: "12px 16px",
    borderRadius: "15px",
    border: "2px solid #F7F7F7",
    marginTop: "32px"
  },
  bankInfo: {
    display: "flex",
    flexDirection: "column",
    "& li": { marginTop: "32px" },
    textAlign: "left",
    marginLeft: "24px"
  },
  bankInfoDescription: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    opacity: "0.8"
  },
  bankInfoInfo: {
    fontWeight: "900",
    fontSize: "24px",
    lineHeight: "36px",
    marginTop: "8px"
  }
}));
function InvestFinal(props) {
  const classes = useStyles(props);
  const context = useGlobal();
  const auth = useAuth();
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  console.log(context.getInvestInfo);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  console.log(context.getInvestInfo.stationAmount);
  const GreenCheckbox = withStyles({
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
          {!auth.userExtraInfo && (
            <>
              <Alert
                type="info"
                title="????????????"
                description="?????? ??????????????? ??????????????????"
                actionDescription="?????????"
                link="/login/login"
                onClick={() => {
                  props.history.push("/login/login");
                }}
              ></Alert>
            </>
          )}
          <header>
            <NavBar title="????????????" backLink="/investor/method" />
          </header>

          <main>
            <section>
              <Paper variant="outlined" square className={classes.card}>
                <div style={{ margin: "52px 24px" }}>
                  <p
                    style={{
                      color: "#5DDEF4",
                      fontWeight: "400",
                      fontSize: "16px",
                      textAlign: "left"
                    }}
                  >
                    {" "}
                    ????????? ??????
                  </p>
                  <p
                    style={{
                      color: "#5DDEF4",
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "32px",
                      lineHeight: "34px",
                      textAlign: "right",
                      marginTop: "16px",
                      textAlign: "left"
                    }}
                  >
                    {context.getInvestInfo.bank}
                  </p>
                  <p
                    style={{
                      color: "#5DDEF4",
                      fontWeight: "400",
                      fontSize: "16px",
                      marginTop: "56px",
                      textAlign: "left"
                    }}
                  >
                    ????????????
                  </p>
                  <p
                    style={{
                      color: "#5DDEF4",
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "32px",
                      lineHeight: "34px",
                      textAlign: "right",
                      marginTop: "16px",
                      textAlign: "left"
                    }}
                  >
                    {context.getInvestInfo.depositor}
                  </p>
                  <p
                    style={{
                      color: "#5DDEF4",
                      fontWeight: "400",
                      fontSize: "16px",
                      marginTop: "56px",
                      textAlign: "left"
                    }}
                  >
                    ????????????
                  </p>
                  <p
                    style={{
                      color: "#5DDEF4",
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "32px",
                      lineHeight: "34px",
                      textAlign: "right",
                      marginTop: "16px",
                      textAlign: "left"
                    }}
                  >
                    {context.getInvestInfo.bankAccount}
                  </p>
                  <p
                    style={{
                      color: "#5DDEF4",
                      fontWeight: "400",
                      fontSize: "16px",
                      marginTop: "56px",
                      textAlign: "left"
                    }}
                  >
                    ??? ?????? / ???????????? ???
                  </p>
                  <p
                    style={{
                      color: "#5DDEF4",
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "32px",
                      lineHeight: "34px",
                      textAlign: "right",
                      marginTop: "16px",
                      textAlign: "left"
                    }}
                  >
                    {numberWithCommas(context.getInvestInfo.totalPrice) +
                      " ??? / "}{" "}
                    {`${context.getInvestInfo.amount}???`}
                  </p>
                </div>
              </Paper>
              <p className={classes.description}>
                ?????? ????????? ??????????????? ????????? ???????????????!
              </p>
            </section>
            <section className={classes.section}>
              <div className={classes.amount}>
                <Paper variant="outlined" square className={classes.card2}>
                  <div style={{ marginBottom: "32px" }}>
                    <ul className={classes.bankInfo}>
                      <li>
                        <p className={classes.bankInfoDescription}>??????</p>
                        <p className={classes.bankInfoInfo}>????????????</p>
                      </li>
                      <li>
                        <p className={classes.bankInfoDescription}>????????????</p>
                        <p className={classes.bankInfoInfo}>010112149493</p>
                      </li>
                      <li>
                        <p className={classes.bankInfoDescription}>?????????</p>
                        <p className={classes.bankInfoInfo}>??????????????????</p>
                      </li>
                      <li>
                        <p className={classes.bankInfoDescription}>?????? ??????</p>
                        <p className={classes.bankInfoInfo}>
                          {context.getInvestInfo.salesMethod}
                        </p>
                      </li>
                      <li>
                        <p className={classes.bankInfoDescription}>
                          ????????? & ??????????????? ID
                        </p>
                        <p className={classes.bankInfoInfo}>
                          {context.getInvestInfo.preSalesIds}
                        </p>
                      </li>
                    </ul>
                  </div>
                </Paper>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "rows",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <FormControlLabel
                    style={{ marginLeft: "14px" }}
                    control={
                      <GreenCheckbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        icon={<CircleUnchecked />}
                        checkedIcon={<CircleCheckedFilled />}
                      />
                    }
                    label={
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "normal",
                          fontSize: "14px",
                          lineHeight: "21px"
                        }}
                      >
                        2020??? ????????? ??????????????? ?????? ?????????
                      </span>
                    }
                  />
                  <p style={{ textAlign: "right" }}>
                    <Link
                      style={{
                        marginRight: "24px",
                        textDecoration: "underline"
                      }}
                    >
                      ????????????
                    </Link>
                  </p>
                </div>
              </div>
              <div className={classes.root}></div>
              <div style={{}}>
                <Button
                  variant="contained"
                  style={{
                    width: "calc(100% - 32px)",
                    height: "64px",
                    margin: "40px 16px",
                    borderRadius: "15px",
                    border: "2px solid #000A12",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "18px",
                    color: "#ECEFF1",
                    backgroundColor: "black"
                  }}
                  onClick={async () => {
                    if (!auth.userExtraInfo) {
                      if (
                        window.confirm(
                          "???????????? ???????????????. ?????? ????????? ????????????"
                        )
                      ) {
                        props.history.push("/login/login");
                        return;
                      }
                      return;
                    }

                    await auth.updateApplication(
                      constant.role.buyer,
                      context.getInvestInfo
                    );
                    props.history.push("/investor/done");
                  }}
                >
                  ??????
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

export default InvestFinal;
