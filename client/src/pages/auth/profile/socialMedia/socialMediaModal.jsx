import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
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
import { addSocial } from "../../../../actions/userActions";

class SocialMediaModal extends Component {
  state = {
    modal: false,
    name: "",
  };

  static propTypes = {
    addSocial: Proptypes.func.isRequired,
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
    const newSocial = {
      socialMedia: this.state.name,
    };
    this.props.addSocial(newSocial);
    //Close modal
    this.toggle();
  };
  render() {
    return (
      <React.Fragment>
        <div className="mt-3">
          <h4 className="display_inline">Social Accounts</h4>
          <span>
            <i className="fa fa-plus float-right " onClick={this.toggle} />
          </span>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to Social Accounts</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="sm">Social Media</Label>
                <Input
                  type="text"
                  name="name"
                  id="sm"
                  placeholder="Add social account"
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

export default connect(null, { addSocial })(SocialMediaModal);
