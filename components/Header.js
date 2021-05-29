import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import styled from "styled-components";
import Destination from "../pages/home";
import MyAccount from "../pages/myAccount";
import DestinationDetail from "../pages/destinationDetail";
import Trip from "../pages/trip";

import busIcon from "../images/bus-icon.svg";
console.log(busIcon);

const HeaderStyle = styled.div`
  font-size: 18px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  background-color: #0f0e17;
  padding-block-start: 28px;
  padding-block-end: 29px;
  margin-inline-end: -20px;
  margin-inline-start: -20px;

  h1 {
    font-size: 28px;
    font-weight: 100;
    color: #ffffff;
  }

  a:nth-of-type(1) {
    color: #fffffe;
    font-size: 19px;
    line-height: 43px;
  }

  a {
    text-decoration: none;
    color: #a7a9be;
  }

  img {
    padding-inline-end: 5px;
    max-width: 84px;
    padding-inline-end: 16px;
  }

  @media (min-width: 700px) {
    margin-inline-end: -159px;
    margin-inline-start: -266px;

    a {
      font-size: 28px;
    }

    img {
      padding-inline-end: 32px;
    }
  }
`;

export default function Header() {
  return (
    <div>
      <HeaderStyle>
        <Link to="/">
          <img src={busIcon} alt="Bus Icon" />
          Mahanoro Station
        </Link>
        <Link to="/account">My account</Link>
      </HeaderStyle>
      <div>
        <Switch>
          <Route exact path="/">
            <Destination />
          </Route>
          <Route path="/account">
            <MyAccount />
          </Route>
          <Route path="/destinationDetail/:destinationId">
            <DestinationDetail />
          </Route>
          <Route path="/trip/:tripId">
            <Trip  />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
