import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import appNav from "./icons/brandname.svg";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { logout } from "../actions/authActions";

class AppNavBar extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    isAuthenticated: Proptypes.bool,
    logout: Proptypes.func.isRequired,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  onClick = () => {
    this.props.logout();
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">
              {/* Talent P<span style={{ color: "blue" }}>OO</span>l */}
              <h4 className="inline_nav">Talent P</h4>
              <span>
                <img src={appNav} alt="home" />
              </span>
              <h4 className="inline_nav">L</h4>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="nav-link">
                    About us
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="nav-link">
                    Directories
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="nav-link">
                    FAQ
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="nav-link">
                    Contact us
                  </Link>
                </NavItem>
                {this.props.isAuthenticated ? null : (
                  <NavItem className="ml-3 mb-3">
                    <Button outline color="primary" size="sm">
                      <Link to="/" className="nav-link">
                        Sign Up
                      </Link>
                    </Button>
                  </NavItem>
                )}
                {this.props.isAuthenticated ? (
                  <NavItem className="ml-3 mb-3">
                    <Button
                      outline
                      color="primary"
                      size="sm"
                      onClick={this.onClick}
                    >
                      <Link to="#" className="nav-link">
                        Log out
                      </Link>
                    </Button>
                  </NavItem>
                ) : null}

                {/* <NavItem className="ml-3 mb-3">
                  <Button outline color="primary" size="sm">
                    <Link to="/" className="nav-link">
                      Sign Up
                    </Link>
                  </Button>
                </NavItem>
                 */}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const MapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(MapStateToProps, { logout })(AppNavBar);
