import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import home from "../../components/home.svg";
import image from "../../components/image.svg";
import HomeNav from "../../components/homeNav";
import Footer from "../../components/appFooter";
import "./home.css";
import { Link } from "react-router-dom";
import { ReactComponent as UiIcon } from "../../components/icons/uiIcon.svg";
import { ReactComponent as OpsIcon } from "../../components/icons/opsIcon.svg";
import { ReactComponent as BeIcon } from "../../components/icons/beIcon.svg";
import { ReactComponent as PmIcon } from "../../components/icons/pmIcon.svg";
import { ReactComponent as MdIcon } from "../../components/icons/mdIcon.svg";
import { ReactComponent as FeIcon } from "../../components/icons/feIcon.svg";

const Home = () => {
  return (
    <div>
      <Container
        style={{
          backgroundImage: `url(${home})`,
        }}
        className="back_img pb-5 bd-2"
        fluid={true}
      >
        <HomeNav className="m-4" />
        <Row>
          <Col className="pl-5">
            {" "}
            <h1 className="gray_txt">Get gigs and jobs</h1>
            <h1 className="gray_txt"> Hire Talent.</h1>
            <Link to="/signUp">
              <Button
                className="mb-5  mt-2"
                style={{ backgroundColor: "#084482" }}
              >
                Get started
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row className="no_marg">
          <Col className=" ml-2 mr-2" style={{ backgroundColor: "#ccc" }}>
            <div className="m-5">
              <h4 className="mt-5 mb-5 " style={{ textAlign: "center" }}>
                Search for Jobs and gigs.
              </h4>
              <div className="m-5 pl-5 pr-5 pb-3 pt-3">
                <InputGroup size="sm" className="mb-5 mt-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="bar">
                      {" "}
                      <i className="fa fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="in"
                    type="search"
                    placeholder="Search for jobs with keywords"
                  />
                </InputGroup>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className=" mt-5 mb-5" style={{ textAlign: "center" }}>
        <h1 className="color_text ">Hire the best Talents</h1>
        <p>
          Giving you the best the global tech community has to offer, web desgn,
          andriod developement, you name it.
        </p>
      </div>
      <Container>
        <Row>
          <Col
            className="m-2 center_text"
            style={{
              backgroundColor: "#ccc",
              height: "100%",
              width: "auto",
            }}
          >
            <div className="m-5">
              <UiIcon />
              <h3 className="color_text ">UI / UX Designers</h3>
              <h6>
                Suscipit libero pretium nullam potenti. Interdum, blandit
                phasellus consectetuer dolor ornare dapibus enim{" "}
              </h6>
            </div>
          </Col>
          <Col
            className="m-2 center_text"
            style={{
              backgroundColor: "#ccc",
              height: "100%",
              width: "auto",
            }}
          >
            <div className="m-5">
              <OpsIcon />
              <h3 className="color_text">Operations</h3>
              <h6>
                Suscipit libero pretium nullam potenti. Interdum, blandit
                phasellus consectetuer dolor ornare dapibus enim{" "}
              </h6>
            </div>
          </Col>
          <Col
            className="m-2 center_text"
            style={{
              backgroundColor: "#ccc",
              height: "100%",
              width: "auto",
            }}
          >
            <div className="m-5">
              <MdIcon />
              <h3 className="color_text">Mobile Developers</h3>
              <h6>
                Suscipit libero pretium nullam potenti. Interdum, blandit
                phasellus consectetuer dolor ornare dapibus enim{" "}
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col
            className="m-2 center_text"
            style={{
              backgroundColor: "#ccc",
              height: "100%",
              width: "auto",
            }}
          >
            <div className="m-5">
              <FeIcon />
              <h3 className="color_text">Frontend Developers</h3>
              <h6>
                Suscipit libero pretium nullam potenti. Interdum, blandit
                phasellus consectetuer dolor ornare dapibus enim{" "}
              </h6>
            </div>
          </Col>
          <Col
            className="m-2 center_text"
            style={{
              backgroundColor: "#ccc",
              height: "100%",
              width: "auto",
            }}
          >
            <div className="m-5">
              <BeIcon />
              <h3 className="color_text">Backend Developers</h3>
              <h6>
                Suscipit libero pretium nullam potenti. Interdum, blandit
                phasellus consectetuer dolor ornare dapibus enim{" "}
              </h6>
            </div>
          </Col>
          <Col
            className="m-2 center_text"
            style={{
              backgroundColor: "#ccc",
              height: "100%",
              width: "auto",
            }}
          >
            <div className="m-5">
              <div className="m-2">
                <PmIcon />
                <h3 className="color_text ">Product Managers</h3>
              </div>
              <h6>
                Suscipit libero pretium nullam potenti. Interdum, blandit
                phasellus consectetuer dolor ornare dapibus enim{" "}
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row>
          <Col className=" noPad">
            <img src={image} alt="pic of a man" className="handle" />
          </Col>
          <Col
            style={{
              backgroundColor: "#e7eaec",
            }}
            className=" noPad"
          >
            <div className="m-5 ">
              <h1 className="mt-5 color_text ">Connect with skilled minds</h1>
              <p>
                We streamline recruitment process for companies. Talent Pool
                allows companies to find the perfect match for their job roles.
                Intern Library
              </p>

              <ul className="removebullet">
                <li>
                  <i className="fa fa-search color_text" />
                  <span className="ml-2">Find top talent easily</span>
                </li>

                <p>
                  Sign up as an employer and search for interns based track and
                  skillset.{" "}
                </p>
                <li>Recruit the best intern</li>
                <p>
                  Choose from the available interns and recruit the best
                  candidate into your company
                </p>
                <li>Speak with industry experts</li>
                <p>
                  Not sure what you’re looking for? Request for a
                  recommendation.
                </p>
              </ul>
              <Link to="/signUp">
                <Button
                  className="mb-5 ml-3 mt-2"
                  style={{ backgroundColor: "#084482" }}
                >
                  Get started
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
