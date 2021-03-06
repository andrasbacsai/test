import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../../components/NavBar.js";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useGlobal } from "../../globalContext";
import Alert from "../../components/Alert";
import { useAuth } from "../../AuthContext";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Slide from "@material-ui/core/Slide";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import SubTitle from "../../components/SubTitle";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
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
      // border: "none"
    }
  },
  select: {
    "&:before": {
      // border: "none"
    },
    "&:after": {
      // border: "none"
    },
    "&:hover:not(.Mui-disabled):before": {
      // border: "none"
    },
    "&:hover::before": {
      // border: "none"
    }
  }
}));

function LoginPage(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState("yes");
  const [bank, setBank] = React.useState("");
  const context = useGlobal();
  const auth = useAuth();
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "yes") {
      console.log(auth.userExtraInfo);
      if (auth.userExtraInfo) {
        context.setInvest_bank(auth.userExtraInfo.bank);
        context.setInvest_bankAccount(auth.userExtraInfo.accountNumber);
        context.setInvest_depositor(auth.userExtraInfo.depositor);
      }
    }
  };
  const handleSlectChange = (event) => {
    console.log(event.target.value);
    console.log(context.getInvestInfo);
    context.setInvest_bank(event.target.value);
  };
  React.useEffect(() => {
    if (auth.userExtraInfo) {
      context.setInvest_bank(auth.userExtraInfo.bank);
      context.setInvest_bankAccount(auth.userExtraInfo.accountNumber);
      context.setInvest_depositor(auth.userExtraInfo.depositor);
    }
  }, []);
  const textFieldsBody = (
    <>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          margin: "16px 0 0 24px"
        }}
      >
        ????????????
      </p>

      <TextField
        variant="outlined"
        id="standard-full-width"
        // label="Phone Number"
        className={classes.textField}
        placeholder="Name"
        // helperText="???????????? ?????? ???????????? ????????? ???????????????"
        value={context.getInvestInfo.depositor}
        onChange={(e) => {
          context.setInvest_depositor(e.target.value);
        }}
        style={{
          margin: "0 24px",
          marginTop: "12px",
          width: "calc(100% - 64px)"
        }}
        InputLabelProps={{
          style: {}
        }}
        inputProps={{
          style: {
            // paddingLeft: "0px",
            fontSize: "26px",
            fontFamily: "Montserrat",
            fontWeight: "bold"

            // boxSizing: "border-box",
            // marginTop: "10px"
          }
        }}
      />
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          margin: "16px 0 0 24px"
        }}
      >
        ??????
      </p>

      <div>
        <FormControl
          style={{
            margin: "0 0 0 24px",
            marginTop: "12px",
            width: "calc(100% - 64px)"
          }}
        >
          <InputLabel
            shrink={false}
            style={{
              paddingLeft: "0px",
              fontSize: "26px",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              color: "black",
              opacity: "0.4",
              boxSizing: "border-box"
            }}
            id="demo-simple-select-label"
          ></InputLabel>

          <Select
            className={classes.select}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={context.getInvestInfo.bank}
            placeholder="Bank"
            variant="outlined"
            style={{
              fontSize: "26px",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              boxSizing: "border-box",
              marginTop: "10px"
            }}
            onChange={handleSlectChange}
            // native={true}
            inputProps={{
              style: {
                fontSize: "26px",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                boxSizing: "border-box",
                marginTop: "10px"
              }
            }}
          >
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"??????"}>??????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"???????????????"}>???????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"??????????????????"}>??????????????????</MenuItem>
            <MenuItem value={"???????????????"}>???????????????</MenuItem>
            <MenuItem value={"??????"}>??????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"??????"}>??????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"?????????"}>?????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"???????????????"}>???????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"SC??????"}>SC??????</MenuItem>
            <MenuItem value={"HSBC??????"}>HSBC??????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"???????????????????????????"}>???????????????????????????</MenuItem>
            <MenuItem value={"??????????????????"}>??????????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"??????????????????"}>??????????????????</MenuItem>
            <MenuItem value={"?????????????????????"}>?????????????????????</MenuItem>
            <MenuItem value={"??????????????????"}>??????????????????</MenuItem>
            <MenuItem value={"???????????????"}>???????????????</MenuItem>
            <MenuItem value={"??????????????????"}>??????????????????</MenuItem>
            <MenuItem value={"?????????????????????"}>?????????????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"??????????????????"}>??????????????????</MenuItem>
            <MenuItem value={"??????????????????"}>??????????????????</MenuItem>
            <MenuItem value={"??????????????????"}>??????????????????</MenuItem>
            <MenuItem value={"??????????????????"}>??????????????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
            <MenuItem value={"HMC????????????"}>HMC????????????</MenuItem>
            <MenuItem value={"LIG????????????"}>LIG????????????</MenuItem>
            <MenuItem value={"NH????????????"}>NH????????????</MenuItem>
            <MenuItem value={"SK??????"}>SK??????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
          </Select>
        </FormControl>
      </div>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          margin: "16px 0 0 24px"
        }}
      >
        ????????????
      </p>

      <TextField
        variant="outlined"
        id="standard-full-width"
        // label="Phone Number"
        className={classes.textField}
        placeholder="Bank Account"
        // helperText="???????????? ?????? ???????????? ????????? ???????????????"
        value={context.getInvestInfo.bankAccount}
        onChange={(e) => {
          context.setInvest_bankAccount(e.target.value);
        }}
        style={{
          margin: "0 24px",
          marginTop: "12px",
          width: "calc(100% - 64px)"
        }}
        InputLabelProps={{
          style: {}
        }}
        inputProps={{
          style: {
            // paddingLeft: "0px",
            fontSize: "26px",
            fontFamily: "Montserrat",
            fontWeight: "bold"

            // boxSizing: "border-box",
            // marginTop: "10px"
          }
        }}
      />
    </>
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
            <NavBar title="???????????? ??????" backLink="/investor/invest" />
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
                  2/4
                </p>
                <SubTitle title="????????????" />
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    paddingTop: "12px",
                    margin: "16px 0 0 24px"
                  }}
                >
                  ???????????????{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontSize: "18px"
                    }}
                  >
                    {auth.userExtraInfo ? auth.userExtraInfo.name : "?????????"}
                  </span>
                  ?????????
                </p>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    margin: "16px 0 0 24px"
                  }}
                >
                  ?????? ?????????{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontSize: "18px"
                    }}
                  >
                    {auth.userExtraInfo ? auth.userExtraInfo.bank : "????????????"}
                  </span>
                  ?????????
                </p>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    margin: "16px 0 0 24px"
                  }}
                >
                  ???????????????{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontSize: "18px"
                    }}
                  >
                    {auth.userExtraInfo
                      ? auth.userExtraInfo.accountNumber
                      : "12312312345"}
                  </span>
                  ?????????
                </p>
              </div>
              <div style={{ marginLeft: "8px" }}>
                <FormControl
                  component="fieldset"
                  style={{ margin: "28px 0 0 24px" }}
                >
                  {/* <FormLabel component="legend">Gender</FormLabel> */}
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="yes"
                      control={
                        <Radio
                          icon={<CircleUnchecked />}
                          checkedIcon={<CircleCheckedFilled />}
                          style={{
                            color: "black",
                            "&$checked": {
                              color: "black"
                            },

                            checked: {}
                          }}
                        />
                      }
                      label="???. ???????????????"
                    />
                    <FormControlLabel
                      value="no"
                      control={
                        <Radio
                          icon={<CircleUnchecked />}
                          checkedIcon={<CircleCheckedFilled />}
                          style={{
                            color: "black",
                            "&$checked": {
                              color: "black"
                            },

                            checked: {}
                          }}
                        />
                      }
                      label="?????????"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              {value === "no" && textFieldsBody}

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => {
                    if (value === "yes") {
                      if (!auth.userExtraInfo) {
                        context.setInvest_bank("????????????");
                        context.setInvest_bankAccount("12312312345");
                        context.setInvest_depositor("?????????");
                        props.history.push("/investor/method");

                        return;
                      }
                      context.setInvest_bank(auth.userExtraInfo.bank);
                      context.setInvest_bankAccount(
                        auth.userExtraInfo.accountNumber
                      );
                      context.setInvest_depositor(auth.userExtraInfo.name);
                    }

                    props.history.push("/investor/method");
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

export default LoginPage;
