import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SocialMediaList extends Component {
  static propTypes = {
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
  };
  render() {
    const { user, isAuthenticated } = this.props;
    return (
      <React.Fragment>
        {isAuthenticated ? (
          <ListGroup className="mt-2">
            {user.socialMedia.map((x) => {
              return (
                <ListGroupItemHeading
                  key={user.socialMedia.indexOf(x)}
                  timeout={500}
                >
                  <ListGroupItem className="text-left">
                    <div className="ml-3">
                      <Input type="checkbox" />
                      <span className="ml-3">{x}</span>
                    </div>
                  </ListGroupItem>
                </ListGroupItemHeading>
              );
            })}
          </ListGroup>
        ) : (
          <span>...Loading</span>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(SocialMediaList);
