import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SideBar from "./SideBar/sidebar";
import AppFooter from "../../../components/appFooter";
import SkillSetList from "./skillSet/skillList";
import SkillSetModal from "./skillSet/skillSetModal";
import SocialMediaList from "./socialMedia/socialMediaList";
import SocialMediaModal from "./socialMedia/socialMediaModal";
import { ReactComponent as UserIcon } from "../../../components/icons/man.svg";
import "./profile.css";

class Profile extends Component {
  style = {
    backgroundColor: "#f8f9fa",
    position: "relative",
    textAlign: "center",
  };

  static propTypes = {
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
  };

  /*  componentDidMount() {
    const { history, isAuthenticated } = this.props;

    if (isAuthenticated === false) {
      history.push("/");
    }
  } */
  /*  load_profile = () => {
    const { history, isAuthenticated } = this.props;

    if (isAuthenticated === false) {
      history.push("/");
    }
  }; */
  render() {
    const { history, isAuthenticated } = this.props;
    return (
      <React.Fragment>
        {isAuthenticated ? (
          <div>
            <SideBar />
            <div className="reduce_index">
              <Container>
                <Row className="m-3 ">
                  <Col style={this.style}>
                    <UserIcon className="m-4" />
                    {this.props.user ? (
                      <h3 className="mt-3"> {this.props.user.name}</h3>
                    ) : null}
                    <h5>Fullstack Developer</h5>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <hr />
                    <i className="fa fa-map-pin" />
                    <span> Lagos, Nigeria</span>
                    <br />
                    <i className="fa fa-envelope" />
                    {this.props.user ? (
                      <span> {this.props.user.email}</span>
                    ) : null}
                    <br />
                    <i className="fa fa-phone" />
                    <span> 081765788</span>
                    <br />
                    <Button color="primary mb-4">Edit Profile</Button>
                  </Col>
                  <Col>
                    {/* <Container> */}
                    <Row className="m-3">
                      <Col style={this.style} className="m-3">
                        <h3>CV</h3>
                        <h5>File Uploaded</h5>
                      </Col>
                      <Col style={this.style} className="m-3">
                        <h3>Portfolio</h3>
                        <h5>Upload</h5>
                      </Col>
                    </Row>
                    {/* </Container>
                  <Container> */}
                    <Row style={this.style} className="m-3">
                      <Col>
                        <SkillSetModal />
                        <SkillSetList />
                      </Col>
                    </Row>
                    {/* </Container>
                  <Container> */}
                    <Row style={this.style} className="m-3">
                      <Col>
                        <SocialMediaModal />
                        <SocialMediaList />
                      </Col>
                    </Row>
                    {/* </Container> */}
                  </Col>
                </Row>
              </Container>
            </div>
            <AppFooter />
          </div>
        ) : (
          setTimeout(history.push("/"), 5000)
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, null)(Profile));
