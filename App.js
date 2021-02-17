import React from 'react';
import styled from "styled-components";

import Header from './components/Header';

const Content = styled.div `
    padding-inline-end: 20px;
    padding-inline-start: 20px;
    padding-block-end: 20px;
    padding-block-start: 20px;

    @media(min-width: 700px) {
        margin: auto;
        max-width: calc(1440px - 532px);
    }
`;

export default function App() {
    return (
        <Content>
            <Header />
        </Content>
    )
}
