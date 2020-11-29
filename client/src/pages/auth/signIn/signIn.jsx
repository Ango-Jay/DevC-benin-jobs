import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Col,
  Row,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { login } from "../../../actions/authActions";
import { clearError } from "../../../actions/errorActions";
import { Link, withRouter } from "react-router-dom";
import signIn from "../SignUp/signUp.jpg";
import AppNavBar from "../../../components/appNavbar";
import Footer from "../../../components/appFooter";

class SignIn extends Component {
  state = {
    email: " ",
    password: " ",
    msg: null,
  };
  static propTypes = {
    isAuthenticated: Proptypes.bool,
    error: Proptypes.object.isRequired,
    login: Proptypes.func.isRequired,
    clearError: Proptypes.func.isRequired,
    user: Proptypes.object,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    // if Authenticated load profile page
    const { history, isAuthenticated, user } = this.props;
    if (isAuthenticated === true) {
      history.push(`/profile/${user.id}`);
    }
    if (error !== prevProps.error) {
      //check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = (e) => {
    if (this.state.msg) {
      this.props.clearError();
      this.setState({ msg: null });
      this.setState({ [e.target.name]: e.target.value });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    //create user object
    const User = {
      email,
      password,
    };
    //attempt to register user
    this.props.login(User);
  };

  render() {
    return (
      <div>
        <AppNavBar />
        <Container>
          <Row>
            <Col>
              <img
                style={{ float: "left", width: "auto" }}
                src={signIn}
                alt="sign up"
              />
            </Col>{" "}
            <Col>
              <h1>Welcome back!</h1>
              <p>Log in and stay connected</p>
              {this.state.msg ? (
                <Alert color="danger">{this.state.msg}</Alert>
              ) : null}
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Row>
                    <Col>
                      <Label for="email">Email</Label>
                      <Input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="type email"
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label for="name">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>

                  <Button color="primary mt-3" size="lg" block>
                    Log in
                  </Button>
                </FormGroup>
              </Form>

              <div
                style={{
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                <hr
                  style={{
                    width: "50px",
                    display: "inline-block",
                  }}
                />
                OR
                <hr
                  style={{
                    width: "50px",
                    display: "inline-block",
                  }}
                />
              </div>

              <Row>
                <Col>
                  <Button className="mr-2" color="primary">
                    Log in with facebook
                  </Button>
                </Col>
                <Col>
                  <Button className="ml-2" color="danger">
                    Log in with Google
                  </Button>
                </Col>
              </Row>

              <p className="mt-3" style={{ textAlign: "center" }}>
                Don't Have an account? <Link to="./signUp">Sign up</Link>
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  user: state.auth.user,
});

export default withRouter(
  connect(mapStateToProps, { login, clearError })(SignIn)
);
