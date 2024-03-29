import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationMain } from './main';
import { NavbarPage, PaginationGetStatic } from './NavPag';
import { LeftCard, RightCard } from './Cards';
import { ObservablePageStore } from './AppStore';
import {
         Row,
         Col
        } from 'react-bootstrap';

import {
         MDBCol,
         MDBRow,
         MDBContainer
       } from 'mdbreact';


function App() {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol sm={5} style={{ marginTop: "1rem", margin: "2.5rem"}}><LeftCard store={ ObservablePageStore } /></MDBCol>
                <MDBCol sm={5} style={{ marginTop: "1rem", margin: "2.5rem"}}><RightCard store={ ObservablePageStore } /></MDBCol>
            </MDBRow>

            <PaginationGetStatic className='d-flex justify-content-center' store={ ObservablePageStore }/>

        </MDBContainer>
    );
}

export default App;
