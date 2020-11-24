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
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { register } from "../../../actions/authActions";
import { clearError } from "../../../actions/errorActions";
import signUp from "./signUp.jpg";
import AppNavBar from "../../../components/appNavbar";
import Footer from "../../../components/appFooter";

class SignUp extends Component {
  state = {
    name: " ",
    email: " ",
    password: " ",
    msg: null,
  };
  static propTypes = {
    isAuthenticated: Proptypes.bool,
    error: Proptypes.object.isRequired,
    register: Proptypes.func.isRequired,
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
      if (error.id === "REGISTER_FAIL") {
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

    const { name, email, password } = this.state;

    //create user object
    const newUser = {
      name,
      email,
      password,
    };
    //attempt to register user
    this.props.register(newUser);
  };

  /* goProfile = () => {
    const { history, isAuthenticated } = this.props;
    if (isAuthenticated === true) {
      history.push("/profile");
    }
  }; */

  render() {
    // clear errors
    // this.props.clearError();
    return (
      <div>
        <AppNavBar />
        <Container>
          <Row>
            <Col>
              <img
                style={{
                  float: "left",
                  width: "100%",
                  height: "auto",
                  minHeight: "50%",
                  minWidth: "350px",
                }}
                src={signUp}
                alt="sign up"
              />
            </Col>{" "}
            <Col>
              <h1>Connect great talents with top organizations</h1>
              <p>
                Create a profile to stay connected with the 1000+ graduates and
                potential employers.
              </p>
              {this.state.msg ? (
                <Alert color="danger">{this.state.msg}</Alert>
              ) : null}
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="name">Full Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="eg John Doe"
                    onChange={this.onChange}
                  />
                  <Row>
                    <Col>
                      <Label for="email">Email</Label>
                      <Input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="eg johndoe@gmail.com"
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Label for="password">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="at least 6 characters"
                        onChange={this.onChange}
                      />
                    </Col>
                    {/* <Col>
                      <Label for="name">Confirm Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="at least 6 characters"
                        onChange={this.onChange}
                      />
                    </Col> */}
                  </Row>
                  <div className="mt-3">
                    <Input
                      type="checkbox"
                      aria-label="Checkbox for terms and condition"
                    />
                    <span>
                      I agree to the{" "}
                      <a href="/terms">terms policy conditions</a>
                    </span>
                  </div>{" "}
                  {/* <Link to="/profile"> */}{" "}
                  <Button color="primary" size="lg" block>
                    SignUp
                  </Button>
                  {/* </Link> */}
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
                    Sign up with facebook
                  </Button>
                </Col>
                <Col>
                  <Button className="ml-2" color="danger">
                    Sign up with Google
                  </Button>
                </Col>
              </Row>

              <p style={{ textAlign: "center" }}>
                Have an account already? <a href="/signIn">Log in</a>
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
  connect(mapStateToProps, { register, clearError })(SignUp)
);
