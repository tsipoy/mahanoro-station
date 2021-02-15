import React from 'react';
import styled from "styled-components";

import Header from './components/Header';

const Content = styled.div `
    padding-inline-end: 20px;
    padding-inline-start: 20px;
    padding-block-end: 20px;
    padding-block-start: 20px;
`;

export default function App() {
    return (
        <Content>
            <Header />
        </Content>
    )
}
