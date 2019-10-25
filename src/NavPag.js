import React, { Component } from 'react';

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
    MDBCollapse, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu,
    MDBDropdownItem, MDBBtn, MDBIcon, MDBCol, p, MDBCardText, MDBCardTitle, MDBCardImage,
    MDBCardBody, MDBCard, MDBPagination, MDBPageItem, MDBPageNav, MDBRow
} from 'mdbreact';

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render () {
        return (
            <MDBNavbar light expand='md'>

                <MDBNavbarBrand>
                    <img src='https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/5b/d0/61/5bd0612a-71d2-e758-881f-e343026a2c72/AppIcon-0-1x_U007emarketing-0-0-85-220-0-5.png/217x0w.jpg'
                    height='30' alt=''/>
                </MDBNavbarBrand>

                <MDBNavbarToggler onClick={this.toggleCollapse} />

                <MDBCollapse id="navbarCollapse2" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to="#!" > Page 1 </MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>



                </MDBCollapse>

            </MDBNavbar>
        );
    }
}

class PaginationGetStatic extends Component {
    render() {
        return(
            <MDBRow>
                <MDBCol>
                    <MDBPagination className="mb-5">
                        <MDBPageItem disabled>
                            <MDBPageNav aria-label="Previous">
                                <span aria-hidden="true">Previous</span>
                            </MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem active>
                            <MDBPageNav>
                                1 <span className="sr-only">(current)</span>
                            </MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem>
                            <MDBPageNav>2</MDBPageNav>
                        </MDBPageItem>
                            <MDBPageItem>
                            <MDBPageNav>3</MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem>
                            <MDBPageNav>4</MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem>
                            <MDBPageNav aria-label="Previous">
                                <span aria-hidden="true">Next</span>
                            </MDBPageNav>
                        </MDBPageItem>
                    </MDBPagination>
                </MDBCol>
            </MDBRow>
        );
    }
}




export {
    NavbarPage,
    PaginationGetStatic
}

//Navigation end