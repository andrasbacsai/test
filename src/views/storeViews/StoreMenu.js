import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { HeaderInfo } from "../../components/HeaderInfo.js";
import NavBar from "../../components/NavBar.js";
import { MenuList } from "../../components/MenuList.js";
import { useGlobal } from "../../globalContext";
import Alert from "../../components/Alert";
import { useAuth } from "../../AuthContext";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import * as constant from "../../Const";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
const useStyles = makeStyles((theme) => ({}));

function SalesMenu(props) {
  const classes = useStyles(props);
  const auth = useAuth();

  const roleMenu = [
    {
      titleBold: "스테이션 신청",
      titleRegular: "하기",
      link: "/store/apply/address"
    },
    {
      titleBold: "수익",
      titleRegular: "확인",
      link: "/table/earning?role=storeOwner"
    },

    {
      titleBold: "스테이션",
      titleRegular: " 정보",
      link: "/table/station?role=storeOwner"
    },
    {
      titleBold: "신청서",
      titleRegular: "상태",
      link: "/table/application?role=storeOwner"
    }
  ];
  return (
    <>
      <header>
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
        <NavBar title="" backLink="battery-service-roll" />
        <HeaderInfo
          title="가맹점"
          description="매장에 반토 스테이션을 설치하면 고객 만족도가 올라갑니다"
        />
      </header>
      <main>
        <MenuList menuList={roleMenu} />
      </main>
      <footer></footer>
    </>
  );
}

export default SalesMenu;
