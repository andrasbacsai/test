import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { HeaderInfo } from "../../components/HeaderInfo.js";
import NavBar from "../../components/NavBar.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import { useGlobal } from "../../globalContext";
import Alert from "../../components/Alert";
import { useAuth } from "../../AuthContext";
import * as common from "../../common";
import * as constant from "../../Const";

import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  contact: { padding: "0px 0 0 25px" },
  contactPerson: { display: "flex", flexDirection: "column" },
  contactTexts: {
    display: "flex",
    flexDirection: "rows",
    alignItems: "baseline"
  },
  contactPersonTitle: {
    fontSize: "25px",
    fontWeight: "700",
    marginTop: "40px"
  },
  contactPersonDescription: {
    fontSize: "14px",
    color: "#6f6f6f",
    paddingLeft: "10px"
  },
  contactPersonTextField: { marginTop: "10px", width: "calc(100% - 25px)" },
  nextButton: {
    fontSize: "25px",
    fontWeight: "700",
    borderRadius: "0",
    border: "none",
    marginTop: "40px",
    position: "absolute",
    padding: "0 25px",
    right: "0px",
    display: "block",
    margin: "0 auto"
  },
  radioButtonGroup: { padding: "30px 30px 0 30px " },

  consentInvestor: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "black"
  },
  radio: {
    "&$checked": {
      color: "black"
    }
  },
  checked: {}
}));
function RegistAddInvestor(props) {
  const classes = useStyles(props);
  function mySubmitHandler() {}
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const [bInvestor, setBInvestor] = React.useState("banto");
  const context = useGlobal();
  const auth = useAuth();
  const [partnersStations, setPartnersStations] = React.useState(null);
  const [ownSalesStations, setownSalesStations] = React.useState(null);
  const [myStations, setMyStations] = React.useState(null);

  const [ownStation, setOwnStation] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const id = auth.userExtraInfo
        ? auth.userExtraInfo.id
        : constant.exampleUserId;
      const result = await common.fetchOwnSalesStations(id);
      // await common.insertStationExample();
      if (result.code !== 200) {
        alert(result.msg);
        return;
      }
      console.log(result.data, "??????????????????");
      setownSalesStations(result.data);
    })();
    (async () => {
      const result = await common.fetchPartnerStations();
      // await common.insertStationExample();
      if (result.code !== 200) {
        alert(result.msg);
        return;
      }
      setPartnersStations(result.data);
    })();
    (async () => {
      const id = auth.userExtraInfo
        ? auth.userExtraInfo.id
        : constant.exampleUserId;
      const result = await common.fetchUserStations(id);
      // await common.insertStationExample();
      if (result.code !== 200) {
        alert(result.msg);
        return;
      }
      setMyStations(result.data);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const id = auth.userExtraInfo
        ? auth.userExtraInfo.id
        : constant.exampleUserId;
      const result = await common.fetchOwnSalesStations(id);
      // await common.insertStationExample();
      if (result.code !== 200) {
        alert(result.msg);
        return;
      }
      setownSalesStations(result.data);
    })();
  }, [bInvestor]);

  const handleRadioChange = (event) => {
    let buyerStatus = event.target.value;
    setBInvestor(event.target.value);

    setHelperText(" ");
    setError(false);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setOwnStation(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const bantoBody = (
    <>
      {/* <hr style={{ borderStyle: "dotted", marginBottom: "20px" }} /> */}
      <div className={classes.contact}>
        <div className={classes.contactPerson}>
          <div className={classes.contactTexts}>
            <span className={classes.contactPersonTitle}>
              ?????? ??????????????? ????????? ????????????
            </span>
            <span className={classes.contactPersonDescription}>
              ???????????? ??????ID / ??????????????? ???????????? ?????????
            </span>
          </div>
          <div style={{ width: "100%" }}>
            <FormControl
              variant="outlined"
              style={{ width: "calc(100% - 40px)", marginTop: "24px" }}
              className={classes.formControl}
            >
              <InputLabel
                className={classes.portionSelectInputLabel}
                htmlFor="outlined-age-native-simple"
              >
                ??????
              </InputLabel>
              <Select
                native
                value={ownStation}
                className={classes.portionSelect}
                onChange={handleChange}
                label="??????"
                inputProps={{
                  id: "outlined-age-native-simple"
                }}
              >
                <option value={"0"}>??????????????? ??????????????????</option>

                {!partnersStations ? (
                  <option value={"0"}>
                    ?????? ?????? ??????????????? ?????????????????????
                  </option>
                ) : (
                  partnersStations &&
                  partnersStations.map((value) => {
                    return (
                      <>
                        <option value={JSON.stringify(value)}>
                          {console.log(value, "??????")}
                          {value.data.buyer}?????? ???????????? : ????????? ?????? ?????????
                          {value.data.salesPortion}%
                        </option>
                      </>
                    );
                  })
                )}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );

  const ownSalesBody = (
    <>
      {/* <hr style={{ borderStyle: "dotted", marginBottom: "20px" }} /> */}
      <div className={classes.contact}>
        <div className={classes.contactPerson}>
          <div className={classes.contactTexts}>
            <span className={classes.contactPersonTitle}>
              ????????? ???????????? ????????????
            </span>
            <span className={classes.contactPersonDescription}>
              ???????????? ??????ID / ??????????????? ???????????? ?????????
            </span>
          </div>
          <div style={{ width: "100%" }}>
            <FormControl
              variant="outlined"
              style={{ width: "calc(100% - 40px)", marginTop: "24px" }}
              className={classes.formControl}
            >
              <InputLabel
                className={classes.portionSelectInputLabel}
                htmlFor="outlined-age-native-simple"
              >
                ??????
              </InputLabel>
              <Select
                native
                value={ownStation}
                className={classes.portionSelect}
                onChange={handleChange}
                label="??????"
                inputProps={{
                  id: "outlined-age-native-simple"
                }}
              >
                <option value={"0"}>??????????????? ??????????????????</option>

                {!ownSalesStations ? (
                  <option value={"0"}>????????? ???????????? ??????</option>
                ) : (
                  ownSalesStations &&
                  ownSalesStations.map((value) => {
                    return (
                      <>
                        <option value={JSON.stringify(value)}>
                          {value.data.stationId},
                          {
                            value.data.preSalesManagers.find(
                              (e) => e.id === auth.userExtraInfo.id
                            ).portion
                          }
                          %
                        </option>
                      </>
                    );
                  })
                )}
              </Select>
            </FormControl>
          </div>
        </div>
        <span className={classes.contactPersonDescription}>
          ???????????? ??????ID / ??????????????? ???????????? ?????????
        </span>
      </div>
    </>
  );
  const ownBody = (
    <>
      {/* <hr style={{ borderStyle: "dotted", marginBottom: "20px" }} /> */}
      <div className={classes.contact}>
        <div className={classes.contactPerson}>
          <div className={classes.contactTexts}>
            <span className={classes.contactPersonTitle}>??? ????????????</span>
            <span className={classes.contactPersonDescription}></span>
          </div>
          <div style={{ width: "100%" }}>
            <FormControl
              variant="outlined"
              style={{ width: "calc(100% - 40px)", marginTop: "24px" }}
              className={classes.formControl}
            >
              <InputLabel
                className={classes.portionSelectInputLabel}
                htmlFor="outlined-age-native-simple"
              >
                ??????
              </InputLabel>
              <Select
                native
                value={ownStation}
                className={classes.portionSelect}
                onChange={handleChange}
                label="??????"
                inputProps={{
                  id: "outlined-age-native-simple"
                }}
              >
                <option value={"0"}>??????????????? ??????????????????</option>

                {!myStations ? (
                  <option value={"0"}>????????? ???????????? ??????</option>
                ) : (
                  myStations.map((value) => {
                    return (
                      <>
                        <option value={JSON.stringify(value)}>
                          {value.data.stationId}, {value.data.buyerPortion} %
                        </option>
                      </>
                    );
                  })
                )}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
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
        <NavBar title="" backLink="/sales/regist/contact" />
        <HeaderInfo
          title={"????????? ??????????????? ???????????????"}
          description="?????? ????????? ?????????????????? ?????? ????????? ???????????? ??????????????? ?????? ?????? ????????????"
        />
      </header>
      <main>
        <div className={classes.radioButtonGroup}>
          <FormControl
            component="fieldset"
            error={error}
            className={classes.formControl}
          >
            <FormLabel component="legend" className={classes.consentInvestor}>
              ????????? ??????????????? ????????????????
            </FormLabel>
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={bInvestor}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="banto"
                control={
                  <Radio
                    classes={{ root: classes.radio, checked: classes.checked }}
                  />
                }
                label="?????? ???????????? ??????????????? ?????? ????????? ?????????????????????"
                checked={bInvestor === "banto"}
              />
              <FormControlLabel
                value="mine"
                control={
                  <Radio
                    classes={{ root: classes.radio, checked: classes.checked }}
                  />
                }
                label="???. ????????? ??????????????? ????????????"
              />
              <FormControlLabel
                value="ownSales"
                control={
                  <Radio
                    classes={{ root: classes.radio, checked: classes.checked }}
                  />
                }
                label="???. ?????? ???????????? ??????????????? ??????????????? ??????????????????"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            {/* <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Check Answer
            </Button> */}
          </FormControl>
        </div>
        {bInvestor === "banto"
          ? bantoBody
          : bInvestor === "ownSales"
          ? ownSalesBody
          : ownBody}

        <Button
          className={classes.nextButton}
          size="large"
          variant="outlined"
          type="submit"
          style={{ marginBottom: "40px" }}
          onClick={() => {
            console.log("???????????????", bInvestor);
            const choosedStation = JSON.parse(ownStation);
            if (!!!choosedStation) {
              alert("??????????????? ??????????????????");
              return;
              console.log("?????????", choosedStation);
            }
            const id = auth.userExtraInfo
              ? auth.userExtraInfo.id
              : constant.exampleUserId;
            if (bInvestor === "ownSales") {
              // TODO ????????? otherBuyer.stationId ???????????? ???????????? ????????????
              context.setSales_salesManager(id);
              context.setSales_stationDoc(choosedStation.id);

              const salesPortion = choosedStation.data.preSalesManagers.find(
                (e) => e.id === id
              ).portion;
              context.setSales_salesPortion(salesPortion);
              context.setSales_stationId(choosedStation.data.stationId);
              context.setSales_buyer(choosedStation.data.buyer);
              context.setSales_buyerPortion(choosedStation.data.buyerPortion);

              //TODO ????????? ?????? ?????? ??????
            } else if (bInvestor === "banto") {
              context.setSales_salesManager(id);
              context.setSales_stationDoc(choosedStation.id);

              context.setSales_salesPortion(choosedStation.data.salesPortion);
              context.setSales_stationId(choosedStation.data.stationId);
              context.setSales_buyer(choosedStation.data.buyer);
              context.setSales_buyerPortion(choosedStation.data.buyerPortion);
            } else if (bInvestor === "mine") {
              context.setSales_salesManager(id);
              context.setSales_stationDoc(choosedStation.id);

              context.setSales_salesPortion(choosedStation.data.buyerPortion);
              context.setSales_stationId(choosedStation.data.stationId);
              context.setSales_buyer(choosedStation.data.buyer);
              context.setSales_buyerPortion(choosedStation.data.buyerPortion);
            }
            props.history.push("/sales/regist/portion");
          }}
        >
          ??????
        </Button>
      </main>
      <footer></footer>
    </>
  );
}

export default RegistAddInvestor;
