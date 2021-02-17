import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { destination } from "../actions/index";

function Trip({ destinations }) {
  const { tripId } = useParams();
  const tripDetails =
    destinations !== [] && destinations.find((trip) => trip.destination == tripId);

    return (
        <div>
            <div>
                <h2>Book a seat to:</h2>
                <p>{tripDetails?.destination}</p>
            </div>
        </div>
    );
}


function mapStateToProps() {
  return {
    destinations: state.destination,
  };
}

const mapDispatchToProps = {
  destination,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
