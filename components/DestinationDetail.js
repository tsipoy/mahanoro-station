import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const StationDiv = styled.div`
  .about-trip {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .trip-header h2 {
    font-size: 24px;
    line-height: 26px;
    padding-block-start: 32px;
  }

  .trip-header p {
    font-size: 24px;
    line-height: 26px;
    margin-block-start: -10px;
    color: #e53170;
  }

  .trip-departure {
    color: #ff8906;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    text-align: center;
    background-color: #e53170;
    padding-block-start: 20px;
    padding-block-end: 20px;
    padding-inline-start: 25px;
    padding-inline-end: 25px;
  }

  span {
      color: #E53170;
  }
`;

import { destination } from "../actions/index";

function DestinationDetail({ destinations, weekdays }) {
  const { destinationId } = useParams();

  const stationDetails =
    destinations !== [] &&
    destinations.find((station) => station.id == destinationId);

  let currrentDate = new Date(stationDetails?.departureTime);
  const month = currrentDate.getMonth() + 1;
  const day = currrentDate.getDate();
  const year = currrentDate.getFullYear();
  const time = currrentDate.getUTCHours();

  const weekDay = weekdays[currrentDate.getDay()];

  const date = day + " / " + month + " / " + year;

  return (
    <StationDiv>
      <div className="trip-header">
        <h2>Next trips to:</h2>
        <p>{stationDetails?.destination}</p>
      </div>
      <div className="about-trip">
        <div className="trip-departure">
          <p>{weekDay}</p>
          <p>{time}:00</p>
        </div>
        <div className="seats-left">
          <p>{date}</p>
          <p><span>{stationDetails?.breaks}</span> seats left</p>
        </div>
        <Link to={`/${stationDetails?.driverContact}`}>Book a seat</Link>
      </div>
    </StationDiv>
  );
}

function mapStateToProps(state) {
  return {
    destinations: state.destination,
    weekdays: state.daysOfTheWeek,
  };
}

const mapDispatchToProps = {
  destination,
};

export default connect(mapStateToProps, mapDispatchToProps)(DestinationDetail);
