import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { HeaderInfo } from "../../components/HeaderInfo.js";
import NavBar from "../../components/NavBar.js";
import { TextField } from "../../components/TextField.js";
import MTextField from "@material-ui/core/TextField";
import { FormButton } from "../../components/FormButton.js";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { useGlobal } from "../../globalContext";
import Alert from "../../components/Alert";
import { useAuth } from "../../AuthContext";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";

var _ = require("lodash");

const useStyles = makeStyles((theme) => ({
  contact: { padding: "55px 0 0 25px" },
  contactPerson: { display: "flex", flexDirection: "column" },
  contactTexts: {
    display: "flex",
    flexDirection: "rows",
    alignItems: "baseline"
  },
  contactPersonTitle: { fontSize: "25px", fontWeight: "700" },
  contactPersonDescription: {
    fontSize: "14px",
    color: "#6f6f6f",
    paddingLeft: "10px"
  },
  contact: { padding: "55px 0 0 25px" },

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
  portionSelect: { marginTop: "10px", width: "calc(100% - 25px)" },
  portionSelectInputLabel: { marginTop: "10px", width: "calc(100% - 25px)" },
  portionSelectDescription: {
    marginTop: "10px",
    marginRight: "25px",
    textAlign: "right",
    fontSize: "14px",
    color: "#6f6f6f"
  },
  paper: {
    position: "absolute",
    width: "90%",
    height: "220px",
    backgroundColor: "white",
    // border: "2px solid #000",
    borderRadius: "6px",
    textDecoration: "none",
    userSelect: "none",
    outline: "none"
  },
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
    margin: "0 auto",
    backgroundColor: "white"
  },
  modalTitle: {
    padding: "20px 0px 10px 20px",
    fontSize: "25px",
    fontWeight: "700"
  },
  modalDescription: {
    padding: "15px 0px 10px 20px",
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "23px"
  },
  modalButtons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px"
  },
  modalNextTimeButton: {},
  modalBuyButton: {}
}));
function RegistPortion(props) {
  const context = useGlobal();
  const auth = useAuth();
  const classes = useStyles(props);

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [portion, setPortion] = React.useState(0);

  const handleOpen = () => {
    if (portion === 0) {
      context.setSales_storeBonusPortion(0);
      context.setSales_storePortion(0);
    } else if (0 < portion && portion <= 10) {
      context.setSales_storeBonusPortion(portion);
      context.setSales_storePortion(0);
    } else if (portion > 10) {
      context.setSales_storeBonusPortion(10);
      context.setSales_storePortion(portion - 10);
    }
    context.setSales_salesPortion(calcSalesPortion(portion));
    setOpen(true);
  };
  React.useEffect(() => {
    (async () => {})();
  }, []);

  const calcSalesPortion = (storePortion) => {
    const copySalesInfo = context.salesInfo.salesPortion;

    if (storePortion === 0) {
      // context.setSales_storeBonusPortion(0);
      return copySalesInfo;
    } else if (0 < storePortion && storePortion <= 10) {
      // context.setSales_storeBonusPortion(storePortion);
      return copySalesInfo;
    } else if (storePortion > 10) {
      // context.setSales_storeBonusPortion(10);
      console.log(storePortion);
      return copySalesInfo + bonus - storePortion;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" className={classes.modalTitle}>
        수익률을 올리세요
      </h2>
      <p id="simple-modal-description" className={classes.modalDescription}>
        반토스테이션 구매 후 가맹점에 설치하면 수익이 70%까지 올라갑니다
      </p>
      <div className={classes.modalButtons}>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.modalBuyButton}
          onClick={() => {
            props.history.push("/sales/regist/final");
          }}
        >
          네 이해했습니다
        </Button>
      </div>
    </div>
  );

  function getModalStyle() {
    const top = 50;
    const left = 50;
    console.log(top);
    console.log(left);
    return {
      top: `NULL%`,
      left: `NULL%`,
      transform: `translate(-NULL%, -NULL%)`
    };
  }
  const handleChange = (event) => {
    let storePortion = Number(event.target.value);
    console.log(storePortion);
    setPortion(storePortion);
    //TODO 세일즈 포션 계산 하고 세일즈 포션 컨텍스트
  };
  function mySubmitHandler() {
    handleOpen();
    return;
  }
  const copySalesPortion = context.salesInfo.salesPortion;
  const bonus = 10;
  let percentage = _.range(0, copySalesPortion + bonus + 1);

  return (
    <>
      {!auth.userExtraInfo && (
        <>
          <Alert
            type="info"
            title="체험하기"
            description="현재 체험히기를 이용중입니다"
            actionDescription="로그인"
            link="/login/login"
            onClick={() => {
              props.history.push("/login/login");
            }}
          ></Alert>
        </>
      )}
      <header>
        <NavBar title="" backLink="/sales/regist/add-investor" />
        <HeaderInfo
          title={"등록" + "\u00A0" + "\u00A0" + "\u00A0" + "3/3"}
          description="가맹점에게 수익을 나눌시, 가맹점 계약 체결시 본사에서 검수 후 반토 스테이션을 보내드립니다"
        />
      </header>
      <main>
        <section>
          <div className={classes.contact}>
            <div className={classes.contactPerson}>
              <div className={classes.contactTexts}>
                <span className={classes.contactPersonTitle}>수익분배</span>
                <span className={classes.contactPersonDescription}>
                  가맹점에 분배될 수익(최대 25%)
                </span>
              </div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  className={classes.portionSelectInputLabel}
                  htmlFor="outlined-age-native-simple"
                >
                  분배율
                </InputLabel>
                <Select
                  native
                  value={portion}
                  className={classes.portionSelect}
                  onChange={handleChange}
                  label="비율"
                  inputProps={{
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option aria-label="None" value="" />
                  {percentage.map((value) => {
                    return <option value={value}>{value} %</option>;
                  })}
                </Select>
              </FormControl>
              <span className={classes.portionSelectDescription}>
                영업님이 얻는 수익은 {calcSalesPortion(portion)}%입니다
              </span>
            </div>
            <div className={classes.contact}>
              <div className={classes.contactPerson}>
                <div className={classes.contactTexts}>
                  <span className={classes.contactPersonTitle}>
                    가맹점주님 연락처
                  </span>
                  <span className={classes.contactPersonDescription}>
                    예) 0104567890
                  </span>
                </div>
                <TextField
                  className={classes.contactPersonTextField}
                  id="outlined-basic"
                  inputProps={{ inputMode: "numeric", maxLength: 11 }}
                  label="*필수"
                  variant="outlined"
                  value={context.salesInfo.storeOwner}
                  // autoFocus
                  onChange={(e) => {
                    context.setSales_storeOwner(e.target.value);
                  }}
                />
              </div>
            </div>

            <button
              className={classes.nextButton}
              type="button"
              onClick={handleOpen}
            >
              다음
            </button>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default RegistPortion;
