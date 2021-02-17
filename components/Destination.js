import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { destination } from "../actions/index";
import bus from "../images/bus.svg";
import busStation from "../images/station.svg";

const DestinationDiv = styled.div`
  .destination-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-block-end: 100px;
    padding-block-start: 100px;
  }

  h2 {
    font-size: 28px;
  }

  ul {
    padding-inline-start: 0;
  }

  li {
    list-style: none;
    padding-block-end: 16px;
    padding-block-start: 16px;
    /* margin-block-end: 45px; */
  }

  a {
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;
    padding-block-end: 29px;
    padding-block-start: 28px;
    padding-inline-end: 40px;
    padding-inline-start: 45px;
    text-align: center;
    background-color: #0f0e17;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
  }

  img {
    padding-inline-end: 5px;
    max-width: 84px;
    padding-inline-end: 16px;
  }

  @media (min-width: 700px) {
    .station_lists {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    li {
      margin-inline-start: 107px;
    }
  }
`;

function Destination({ destinations }) {
  const group = {};

  destinations.forEach(({ destination, ...rest }) => {
    group[destination] = group[destination] || { destination, series: [] };
    group[destination].series.push(rest);
  });

  const stations = Object.values(group).map((station) => {
    return (
      <li key={station.length}>
        <Link to={`/${station.id}`}>
          <img src={busStation} alt="Bus" />
          {station.destination}
        </Link>
      </li>
    );
  });

  return (
    <DestinationDiv>
      <div className="destination-header">
        <img src={bus} alt="Bus" />
        <h2>Where are you going?</h2>
      </div>
      <ul className="station_lists">{stations}</ul>
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
