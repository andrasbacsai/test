import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HeaderInfo } from "../../components/HeaderInfo.js";
import NavBar from "../../components/NavBar.js";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useGlobal } from "../../globalContext";
import Alert from "../../components/Alert";
import { useAuth } from "../../AuthContext";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import * as constant from "../../Const";
import * as common from "../../common";
import SubTitle from "../../components/SubTitle";

var _ = require("lodash");

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
  const [value, setValue] = React.useState("banto");
  const [bank, setBank] = React.useState("");
  const [invitations, setInvitatations] = React.useState([
    { key: "1111", id: "", portion: 0 }
  ]);
  let percentage = _.range(0, 26);
  const maxPortion = 70;
  const context = useGlobal();
  const auth = useAuth();
  const handleChange = (event) => {
    setValue(event.target.value);

    context.setInvest_salesMethod(event.target.value);

    console.log(context.getInvestInfo);
  };
  const handleSlectChange = (event) => {
    console.log(event.target.value);
    context.setInvest_salesPortion(event.target.value);
  };

  const bantoBody = (
    <>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          margin: "16px 0 0 24px",
          paddingTop: "24px"
        }}
      >
        ????????? ??????????????? ????????? ???????????? ???????????????
      </p>

      <div>
        <FormControl
          style={{
            margin: "0 24px",
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
            value={context.getInvestInfo.salesPortion}
            placeholder="Bank"
            variant="outlined"
            style={{
              fontSize: "26px",
              fontFamily: "Montserrat",
              fontWeight: "bold"
              // boxSizing: "border-box"
            }}
            onChange={handleSlectChange}
            inputProps={{
              style: {
                fontSize: "26px",
                fontFamily: "Montserrat",
                fontWeight: "bold"
                // boxSizing: "border-box"
              }
            }}
          >
            {common.percentArray(0, maxPortion).map((value) => {
              return <MenuItem value={value}>{value} % </MenuItem>;
            })}
          </Select>
        </FormControl>

        <p
          style={{
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            margin: "16px 38px 24px 24px",
            textAlign: "right"
          }}
        >
          ??? ?????? ????????? :{" "}
          {myPortionCalculater(maxPortion, context.getInvestInfo.salesPortion)}%
        </p>
      </div>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "200",
          fontSize: "16px",
          margin: "16px 0 0 28px"
        }}
      >
        <>
          - ????????? ???????????? ????????? ???????????? ?????? ????????? ????????? ????????? ???
          ????????????
        </>
      </p>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "200",
          fontSize: "16px",
          margin: "16px 0 0 24px"
        }}
      >
        - ????????? ???????????? ??????????????? ?????? ????????? ?????? ????????? ????????? ?????????
        ???????????? ????????? ???????????????
      </p>
    </>
  );
  function myPortionCalculater(maxPortion, salesPortion) {
    return maxPortion - salesPortion;
  }
  const ownSalesBody = (
    <>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          margin: "16px 0 0 24px",
          paddingTop: "36px"
        }}
      >
        ????????? ????????? ???????????? ??????????????????
      </p>
      {invitations.map((value) => (
        <>
          {" "}
          <TextField
            variant="outlined"
            id="standard-full-width"
            // label="Phone Number"
            className={classes.textField}
            placeholder="????????? ????????? ????????? ID"
            // helperText="???????????? ?????? ???????????? ????????? ???????????????"
            value={value.id}
            onChange={(e) => {
              const invis = [...invitations];
              const varaibleToUpdate = invis.find(
                (variable) => variable.key === value.key
              );
              console.log(varaibleToUpdate);
              varaibleToUpdate.id = e.target.value;
              setInvitatations(invis);
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
                // fontFamily: "Montserrat",
                fontWeight: "bold"

                // boxSizing: "border-box"
                // marginTop: "10px"
              }
            }}
          />{" "}
          <FormControl
            style={{
              margin: "0 24px",
              marginTop: "12px",
              width: "calc(100% - 64px)"
            }}
          >
            <p
              style={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px"
              }}
            >
              ????????? ???????????? ?????????
            </p>
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
              variant="outlined"
              value={value.portion}
              placeholder="Bank"
              style={{
                fontSize: "26px",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                boxSizing: "border-box",
                marginTop: "10px"
              }}
              onChange={(e) => {
                const invis = [...invitations];
                const varaibleToUpdate = invis.find(
                  (variable) => variable.key === value.key
                );

                varaibleToUpdate.portion = e.target.value;
                setInvitatations(invis);
              }}
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
              {common.percentArray(0, maxPortion).map((value) => {
                return <MenuItem value={value}>{value} % </MenuItem>;
              })}
            </Select>
          </FormControl>
          <Button
            style={{ paddingLeft: "24px" }}
            onClick={() => {
              const invis = [...invitations].filter(
                (variable) => variable.key !== value.key
              );
              setInvitatations(invis);
            }}
          >
            ?????????
          </Button>
        </>
      ))}
      <Button
        onClick={() => {
          setInvitatations([
            ...invitations,
            {
              key: common.uuidv4(),
              id: "",
              portion: 0
            }
          ]);
        }}
      >
        ?????????
      </Button>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "200",
          fontSize: "16px",
          margin: "16px 0 0 24px"
        }}
      >
        <>????????? ????????? ??? ????????? ?????????</>
        <br />
        {"???????????? ????????? -> ??? ??????????????? ?????? ??? ??? ????????????"}
      </p>
    </>
  );

  const yetSalesBody = (
    <>
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "200",
          fontSize: "16px",
          margin: "16px 0 0 24px"
        }}
      >
        <>????????? ?????? ????????? ?????????</>
        <br />
        {"(???????????? ??????????????? ?????? -> ???????????? ?????? ????????? ??? ????????????)"}
      </p>
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
            <NavBar title="???????????? ??????" backLink="/investor/depositor" />
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
                  3/4
                </p>
                <SubTitle title="?????? ??????" />

                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    margin: "16px 0 0 24px",
                    paddingTop: "12px"
                  }}
                >
                  ?????? ???????????? ???????????? ?????? ????????? ????????????????????????
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
                      value={constant.salesMethod.banto}
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
                      label="???. ?????? ??????????????? ?????? ?????????????????????"
                    />
                    <FormControlLabel
                      value={constant.salesMethod.ownSales}
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
                      label="?????????. ????????????(????????????)??? ?????? ?????????????????????"
                    />
                    <FormControlLabel
                      value={constant.salesMethod.yet}
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
                      label="????????? ?????????????????????"
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "16px",
                  margin: "16px 0 0 24px",
                  color: "blue"
                }}
              >
                {value === constant.salesMethod.banto
                  ? "*??????????????? ????????? ?????????, ???????????? ?????? ???????????? ???????????????"
                  : value === constant.salesMethod.ownSales
                  ? "*????????? ?????????(????????????)??? ?????? ??????????????? ????????? ??? ????????????"
                  : "*?????? ?????? ????????? ??? ????????????"}
              </p>
              {value === constant.salesMethod.banto
                ? bantoBody
                : value === constant.salesMethod.ownSales
                ? ownSalesBody
                : yetSalesBody}

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => {
                    if (value === constant.salesMethod.banto) {
                      context.setInvest_salesMethod(constant.salesMethod.banto);
                      context.setInvest_preSalesIds([]);
                      context.setInvest_preSalesManagers([]);
                    } else if (value === constant.salesMethod.ownSales) {
                      context.setInvest_salesMethod(
                        constant.salesMethod.ownSales
                      );
                      context.setInvest_salesPortion(0);
                      const managersId = invitations.map((value) => value.id);
                      context.setInvest_preSalesIds(managersId);
                      context.setInvest_preSalesManagers(invitations);
                    }
                    // ????????????
                    else {
                      context.setInvest_salesMethod(constant.salesMethod.yet);
                      context.setInvest_salesPortion(0);
                    }
                    console.log(context.getInvestInfo);
                    if (auth.userExtraInfo) {
                      context.setInvest_buyer(auth.userExtraInfo.id);
                      context.setInvest_buyerPortion(70);
                    } else {
                      context.setInvest_buyer("example114");
                      context.setInvest_buyerPortion(70);
                    }
                    props.history.push("/investor/final");
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
