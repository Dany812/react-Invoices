import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

export default class ModalWindow extends Component {
  render() {
    const { show, onHide, content } = this.props;
    return (
      <div>
        <Modal show={show} onHide={onHide}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div>{content.title}</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>{content.body}</div>
          </Modal.Body>
          <Modal.Footer>
            <div>{content.footer}</div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
ModalWindow.propTypes = {
  content: PropTypes.object,
  onHide: PropTypes.func,
  show: PropTypes.bool
};
