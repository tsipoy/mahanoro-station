import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { destination } from "../actions/index";

import styled from "styled-components";

const DestinationDiv = styled.div`
  ul {
    padding-inline-start: 0;
  }

  li {
    list-style: none;
    padding-block-end: 16px;
    padding-block-start: 16px;
    margin-block-end: 45px;
  }

  a {
    font-size: 28px;
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;
    padding-block-end: 29px;
    padding-block-start: 28px;
    padding-inline-end: 40px;
    padding-inline-start: 45px;
    text-align: center;
    background-color: #0f0e17;
  }
`;




function Destination({ destinations }) {

  const stations = destinations.map((station) => {
    return (
      <ul key={station.id}>
        <li> 
            <Link to={`/${station.id}`}>{station.destination}</Link>
        </li>
      </ul>
    );
  });

  return (
    <DestinationDiv>
      <h2>Where are you going?</h2>
      <div>{stations}</div>
    </DestinationDiv>
  );
}

function mapStateToProps(state) {
  return {
    destinations: state.destination,
  };
}

const mapDispatchToProps = {
  destination,
};

export default connect(mapStateToProps, mapDispatchToProps)(Destination);
