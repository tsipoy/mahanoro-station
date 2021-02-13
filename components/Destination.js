import React from 'react'
import { connect } from 'react-redux';

function Destination({ destination }) {
    console.log(destination)
    return (
        <div>
            <p>Moramaga</p>
        </div>
    )
}

export default connect((state) => ({station: state.destination}), null)(Destination);