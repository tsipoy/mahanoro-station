import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import styled from "styled-components";
import Destination from "../pages/home";
import MyAccount from "../pages/myAccount";
import DestinationDetail from "../pages/destinationDetail";
import Trip from "../pages/trip";

const HeaderStyle = styled.div`
  font-size: 18px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #0f0e17;
  padding-block-start: 28px;
  padding-block-end: 29px;
  margin-inline-end: -20px;
  margin-inline-start: -20px;

  h1 {
    font-size: 24px;
    font-weight: 100;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    color: #a7a9be;
  }
`;

export default function Header() {
  return (
    <div>
      <HeaderStyle>
        <Link to="/">Mahanoro Station</Link>
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
          <Route exact path="/:destinationId">
            <DestinationDetail />
          </Route>
          <Route>
            <Trip exact path="/:destinationId/:tripId" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

