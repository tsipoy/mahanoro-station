import React from 'react'
import { connect} from 'react-redux';

import { destination } from "../actions/index"


function Destination({ destination }) {
    console.log(destination)

    return (
        <div>
            <h2>Where are you going?</h2>
            <p>{destination.destination}</p>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        station: state.destination,
    }
}

const mapDispatchToProps = {
    destination,
}

export default connect(mapStateToProps, mapDispatchToProps)(Destination);
