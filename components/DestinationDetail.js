import React from 'react'
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

import { destination } from "../actions/index"


function DestinationDetail( { destinations }) {

  const { destinationId } = useParams();

  console.log(destinationId);
  
  const stationDetails = destinations !== [] && destinations.find((station) => station.id == destinationId);

  console.log(stationDetails);

  let date = new Date(stationDetails?.departureTime);

    return (
        <div>
            <div>
                <h2>Next trips to:</h2>
                <p>{stationDetails?.destination}</p>
            </div>
            <div>
                <p>{stationDetails?.departureTime}</p>
            </div>
            <div>
                {/* <p>{stationDetails?.seats.}</p> */}
                <p>{stationDetails?.destination}</p>
            </div>
            <div>
                <p>Book a seat</p>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        destinations: state.destination
    }
}

const mapDispatchToProps = {
    destination,   
}

export default connect(mapStateToProps, mapDispatchToProps)(DestinationDetail);
