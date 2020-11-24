import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { addSkill } from "../../../../actions/userActions";
import "./skillSet.css";

class SkillSet extends Component {
  state = {
    modal: false,
    name: "",
  };

  static propTypes = {
    addSkill: Proptypes.func.isRequired,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newSkill = {
      skillSet: this.state.name,
    };
    this.props.addSkill(newSkill);
    //Close modal
    this.toggle();
  };
  render() {
    return (
      <React.Fragment>
        <div className="mt-3">
          <h5 className="display_inline">Skillset</h5>
          <span>
            <i className="fa fa-plus float-right " onClick={this.toggle} />
          </span>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to SkillSet</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="skill">Skill</Label>
                <Input
                  type="text"
                  name="name"
                  id="skill"
                  placeholder="Add skill"
                  onChange={this.onChange}
                />
                <Button color="dark" className="btn btn-sm mt-2" block>
                  Add
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>{" "}
      </React.Fragment>
    );
  }
}

export default connect(null, { addSkill })(SkillSet);
