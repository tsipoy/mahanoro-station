import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

import seat from "../images/emojione_seat.svg";

import { destination } from "../actions/index";
import styled from "styled-components";

const TripWrapper = styled.div`
  ul {
    padding-inline-start: 0px;
  }

  li {
    list-style: none;
  }

  .front-seat {
    display: flex;
    flex-direction: row;
  }

  .normal-seat {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 700px) {
    .about-trip-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
     }
  }
`;

function Trip({ destinations }) {
  const { tripId } = useParams();
  const tripDetails =
    destinations !== [] && destinations.find((trip) => trip.id == tripId);

  return (
    <TripWrapper>
      <div>
        <h2>Book a seat to:</h2>
        <p>{tripDetails?.destination}</p>
      </div>
      <div className="about-trip-wrapper">
        <div>
          <h3>Pick a seat</h3>
          <nav>
            <ul className="front-seat">
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
            </ul>
            <ul className="normal-seat">
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
              <li>
                <img src={seat} alt="Seat" />
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Trip Informations</h3>
          <div>
            <label>Departure Time: </label>
            <span>{format(new Date(tripDetails.departureTime), "hh")}</span>:
            <span>{format(new Date(tripDetails.departureTime), "mm")}</span>,
            <span>{format(new Date(tripDetails.departureTime), "dd")}</span>/
            <span>{format(new Date(tripDetails.departureTime), "MM")}</span>/
            <span>{format(new Date(tripDetails.departureTime), "yyyy")}</span>
          </div>
          <div>
            <label>Driver</label>
            <p>{tripDetails.driverName}</p>
            <label>Driver's contact</label>
            <p>{tripDetails.driverContact}</p>
            <label>Estimated duration</label>
            <p>{tripDetails.estimatedDuration}</p>
            <label>Breaks</label>
            <p>{tripDetails.breaks}</p>
          </div>
          <div>
            <p>
              <span>{tripDetails.price}</span> Ar/seat
            </p>
          </div>
          <div>
            <button>Book 0 seats</button>
            <p>Total: </p>
          </div>
        </div>
      </div>
    </TripWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
