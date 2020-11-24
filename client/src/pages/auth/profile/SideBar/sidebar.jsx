import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Label,
  CustomInput,
  Button,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SideBarData } from "./sideBarData";
import { logout } from "../../../../actions/authActions";
import "./sideBar.css";
import appNav from "../../../../components/icons/brandname.svg";

class SideBar extends Component {
  state = {
    isOpen: false,
    sidebar: false,
  };
  static propTypes = {
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired,
  };
  onClick = () => {
    this.props.logout();
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  toggleSidebar = () => {
    this.setState({ sidebar: !this.state.sidebar });
  };
  render() {
    const { user } = this.props;
    return (
      <div>
        <Navbar className="nav_bar mb-5" light expand="sm">
          <i className="fa fa-bars menu_bars" onClick={this.toggleSidebar} />
          <NavbarToggler onClick={this.toggleCollapse} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto align_right increase_index" navbar>
              <NavItem>
                <NavLink>
                  <CustomInput
                    type="switch"
                    id="switch_id"
                    name="switch_name"
                    label="Available for free"
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <i className="fa fa-bell" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <i className="fa fa-user" />
                  <span> {user ? <Label>{user.name}</Label> : null}</span>
                </NavLink>
              </NavItem>
              {this.props.isAuthenticated ? (
                <NavItem className="ml-3 mb-3">
                  <Button
                    outline
                    color="primary"
                    size="sm"
                    onClick={this.onClick}
                  >
                    <Link to="/" className="nav-link">
                      Log out
                    </Link>
                  </Button>
                </NavItem>
              ) : null}
            </Nav>
          </Collapse>
        </Navbar>
        <nav className={this.state.sidebar ? "nav_menu active" : "nav_menu"}>
          <ul className="nav_menu_items" onClick={this.toggleSidebar}>
            <li className="navbar_toggle  ">
              <i className="fa fa-close menu_bars  i_style" />
            </li>
            <li className="ml-3 color">
              <NavbarBrand href="/" className="ml-3 color">
                <h4 className="inline_nav">Talent P</h4>
                <span>
                  <img src={appNav} alt="home" />
                </span>
                <h4 className="inline_nav">L</h4>
              </NavbarBrand>
            </li>
            <hr style={{ borderTop: "1px solid white", marginRight: "15px" }} />
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cname}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, { logout })(SideBar));
