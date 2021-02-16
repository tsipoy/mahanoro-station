import React from "react";
import { connect } from 'react-redux'
import styled from "styled-components";
import { firstname, lastname, phoneNumber } from "../actions/index"

const Account = styled.section`
  color: #0f0e17;

  .accountHeader {
    text-align: center;
  }

  h2 {
    font-size: 24px;
    line-height: 28px;
  }

  p {
    font-size: 24px;
    line-height: 28px;
    color: #e53170;
    margin-block-start: -16px;
  }

  .formTitle {
    text-transform: uppercase;
    font-weight: bold;
    color: #0f0e17;
    padding-block-end: 32px;
    padding-block-start: 16px;
  }

  label {
    display: flex;
    flex-direction: column;
    padding-block-end: 45px;
  }

  input {
    font-size: 16px;
    background-color: #000000;
    color: #ff8906;
    padding-inline-start: 22px;
    padding-block-start: 28px;
    padding-block-end: 28px;
    margin-block-start: 16px;
  }

  button {
    background-color: #e53170;
    padding-inline-start: 32px;
    padding-inline-end: 31px;
    padding-block-start: 23px;
    padding-block-end: 24px;
    font-size: 16px;
    color: #ffffff;
    border: none;
  }
`;

function MyAccount({ firstName, lastName, phoneNumber }) {
  console.log(firstname);
  return (
    <Account>
      <div className="accountHeader">
        <h2>My acount</h2>
        <p>Volana Sariaka</p>
      </div>
      <form>
        <label className="formTitle">My personnal informations:</label>
        <label>
          Firstname
          <input value={firstName} />
        </label>
        <label>
          Lastname
          <input value={lastName} />
        </label>
        <label>
          Phone number
          <input value={phoneNumber} />
        </label>
        <button>Update</button>
      </form>
    </Account>
  );
}

function mapStateToProps(state) {
  return {
    firstName: state.firstname,
    lastName: state.lastname,
    phoneNumber: state.phoneNumber,
  }
}

const mapDispatchToProps = {
  firstname, 
  lastname, 
  phoneNumber,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)
