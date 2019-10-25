import React, { Component } from 'react';

import './PageComp.css';

import { ObservablePageStore } from './AppStore'

import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
MDBCollapse, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu,
MDBDropdownItem, MDBBtn, MDBIcon, MDBCol, p, MDBCardText, MDBCardTitle, MDBCardImage,
MDBCardBody, MDBCard, MDBPagination, MDBPageItem, MDBPageNav, MDBRow, MDBInput, small
} from 'mdbreact';

import { Card, Row, Col } from 'react-bootstrap';

import { observer } from 'mobx-react';

import { action } from 'mobx';

import { CompactPicker } from 'react-color';


@observer
class LeftCard extends Component {


    render () {

        const store = this.props.store;

        const Test1 = store.pageList.map(pageList => pageList.id === 1)

        const Test2 = store.pageList.map(p => p.title);


        const title1 = store.pageList.map(pageList => pageList.title);

        const subTitle1 = store.pageList.map(pageList => pageList.subTitle);


        return (
            <div>
                <div className='card' style={{height: "50rem", width: "30rem"}}>

                    <p className='title1'>{store.localTitle}</p>

                    <ul>
                        <p>
                            {store.pageList.length}
                        </p>

                    </ul>

                    <p className='title1'>{store.localSubTitle}</p>

                </div>
            </div>
        );
    }
}



@observer
class RightCard extends Component {

    handleChangeTitle = (e) => {
        this.props.store.localTitle = e.target.value;
    };

    handleChangeSubTitle = (e) => {
        this.props.store.localSubTitle = e.target.value;
    };

    render () {
        const store = this.props.store;
        return (
            <div>
                {store.pageList}
                <div className='card' style={{height: "50rem", width: "30rem"}}>
                    <form  style={{marginLeft: "5rem", marginTop: "2rem"}}>
                        <MDBInput
                            label="Title"
                            name="title"
                            id="title"
                            size="lg"
                            required
                            onChange={this.handleChangeTitle}
                        />

                        <p className='inputLabel3'>Less than 100 characters</p>

                        <p className='inputLabel1'>Background Colour</p>

                        <CompactPicker />

                        <MDBInput
                            label="Subtitle"
                            name="subTitle"
                            id="subTitle"
                            size="lg"
                            required
                            value={store.localSubTitle}
                            onChange={this.handleChangeSubTitle}
                        />

                       <MDBInput
                            label="Page Number"
                            name="pageNumber"
                            id="pageNumber"
                            onChange={store.backPage}
                       />

                       <p className='inputLabel1'>Text Colour</p>

                       <CompactPicker />

                        <MDBBtn onClick={ this.backPage }> Back page </MDBBtn>

                        <MDBBtn onClick={ this.onNewPage }> Submit </MDBBtn>
                    </form>
                </div>
            </div>
        );
    }

    onNewPage = (e) => {
        e.preventDefault();

        this.props.store.addPage(this.props.store.localTitle, this.props.store.localSubTitle);
        return this.props.store.pageList.length;
    }
}



export {
    LeftCard,
    RightCard
}