import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { format } from "date-fns";

const Header = styled.div`
  h2 {
    font-size: 24px;
    line-height: 26px;
    padding-block-start: 32px;
  }

  p {
    font-size: 24px;
    line-height: 26px;
    margin-block-start: -10px;
    color: #e53170;
  }
`;

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
    color: #e53170;
  }
`;

import { destination } from "../actions/index";

function DestinationDetail({ destinations, weekdays }) {
  const { destinationId } = useParams();
  console.log(destinationId);

  const stationDetails =
    destinations !== [] &&
    destinations.filter((station) => station.destination == destinationId);
  console.log(stationDetails);

  const group = {};

  stationDetails.forEach(({ destination, ...rest }) => {
    group[destination] = group[destination] || { destination, series: [] };
    group[destination].series.push(rest);
  });

  console.log(Object.values(group));

  const details = stationDetails.map((detail) => {
    let currrentDate = new Date(detail.departureTime);
    const month = currrentDate.getMonth() + 1;
    const day = currrentDate.getDate();
    const year = currrentDate.getFullYear();
    const time = currrentDate.getUTCHours();

    const weekDay = weekdays[currrentDate.getDay()];

    const date = day + " / " + month + " / " + year;
    return (
      <StationDiv key={detail.id}>
        <div className="about-trip">
          <div className="trip-departure">
            <p>{weekDay}</p>
            {/* <p>{time}:00</p> */}
            <span>{format(new Date(detail.departureTime), "hh")}</span>:
            <span>{format(new Date(detail.departureTime), "mm")}</span>
          </div>
          <div className="seats-left">
            <p>{date}</p>
            {/* <span>{format(new Date(detail.departureTime), 'dd')}</span>/
            <span>{format(new Date(detail.departureTime), 'MM')}</span>/
            <span>{format(new Date(detail.departureTime), 'yyyy')}</span>/ */}
            <p>
              <span>{detail.breaks}</span> seats left
            </p>
          </div>
          <Link to={`/trip/${detail.id}`}>Book a seat</Link>
        </div>
      </StationDiv>
    );
  });

  return (
    <>
      <Header>
        <h2>Next trips to:</h2>
        <p>{destinationId}</p>
      </Header>
      {details}
    </>
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
