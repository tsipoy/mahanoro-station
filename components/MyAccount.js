import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { firstname, lastname, phoneNumber } from "../actions/index";

import userInterface from "../images/user-interface.svg";

const Account = styled.section`
  color: #0f0e17;

  .account-header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 400px;
    margin: auto;
    padding-block-end: 50px;
    padding-block-start: 50px;
    align-items: center;
  }

  h2 {
    font-size: 36px;
    line-height: 47px;
  }

  p {
    font-size: 29px;
    line-height: 40px;
    color: #e53170;
    margin-block-start: -16px;
  }

  .formTitle,
  h4 {
    text-transform: uppercase;
    font-weight: normal;
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
    background-color: #000000;
    padding-inline-start: 22px;
    padding-block-start: 28px;
    padding-block-end: 28px;
    margin-block-start: 16px;
  }

  input::placeholder {
    font-size: 16px;
    color: #ff8906;
  }

  .button {
    text-align: end;
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

  img {
    max-width: 134px;
  }

  @media (min-width: 700px) {
    .information {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: baseline;
    }
  }
`;

function MyAccount() {
  console.log(firstname);
  return (
    <Account>
      <div className="account-header">
        <img src={userInterface} alt="User Iterface" />
        <div>
          <h2>My acount</h2>
          <p>Volana Sariaka</p>
        </div>
      </div>
      <div className="information">
        <form>
          <label className="formTitle">My personnal informations:</label>
          <label>
            Firstname
            <input placeholder="Volana" />
          </label>
          <label>
            Lastname
            <input placeholder="Sariaka" />
          </label>
          <label>
            Phone number
            <input placeholder=" 034 34 034 34" />
          </label>
          <div className="button">
            <button>Update</button>
          </div>
        </form>
        <div>
          <h4>My bookings: </h4>
        </div>
      </div>
    </Account>
  );
}

function mapStateToProps(state) {
  return {
    firstName: state.firstname,
    lastName: state.lastname,
    phoneNumber: state.phoneNumber,
  };
}

const mapDispatchToProps = {
  firstname,
  lastname,
  phoneNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
