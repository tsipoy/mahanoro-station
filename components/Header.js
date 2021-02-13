import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import styled from "styled-components";
import Destination from './Destination';

const HeaderStyle = styled.div `
    font-size: 18px;
    line-height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #0F0E17;

    h1 {
        font-size: 24px;
        font-weight: 100;
        color: #ffffff;
    }

    a {
        text-decoration: none;
        color: #A7A9BE; 
    }
`;

function Header({ title }) {
    return (
        <div>
            <HeaderStyle>
                <Link to="/">
                    {title}
                </Link>
                <Link to="/acount">
                    My account
                </Link>
            </HeaderStyle>
            <div>
                <Switch>
                    <Route path="/acount">
                        My acount
                    </Route>
                    <Route exact path="/">
                        <Destination />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default connect((state) => ({title: state.title}))(Header)