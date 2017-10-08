import React, { PropTypes, Component } from 'react';
import {
  removeState,
  requestCustomers,
  removeCustomers,
  createCustomers,
  editCustomers,
  customersById,
  nameChange,
  addressChange,
  phoneChange
} from '../actions/CustomersAction';
import { showModals, callModalsRemove, callModalsCreate, callModalsEdit } from '../actions/ModalAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ModalWindow from '../components/ModalWindow';
class Customers extends Component {
  constructor(props) {
    super(props);
    this.nameChange = this.nameChange.bind(this);
    this.addressChange = this.addressChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.newCustomer = this.newCustomer.bind(this);
    this.editCustomer = this.editCustomer.bind(this);
  }

  componentDidMount() {
    this.props.requestCustomers();
    document.title = 'Customers';
  }

  nameChange(event) {
    this.props.nameChange(event.target.value);
  }

  addressChange(event) {
    this.props.addressChange(event.target.value);
  }

  phoneChange(event) {
    this.props.phoneChange(event.target.value);
  }

  newCustomer(name, address, phone) {
    const data = { name, address, phone };
    this.props.createCustomers(data);
    this.props.removeState();
  }

  editCustomer(id, name, address, phone) {
    const data = { name, address, phone };
    this.props.editCustomers(id, data);
    this.props.removeState();
  }

  render() {
    const {
      id,
      name,
      address,
      phone,
      customers,
      showModal,
      callModalRemove,
      callModalCreate,
      callModalEdit
    } = this.props.state;
    const {
      removeState,
      removeCustomers,
      showModals,
      callModalsRemove,
      callModalsCreate,
      callModalsEdit,
      customersById
    } = this.props;

    let template;

    const modalDelete = {
      title: 'Delete customer',
      body: (
        <div>
          <p>Do you really want to delete?</p>
          Customer name: {name}
        </div>
      ),
      footer: (
        <div>
          <Button
            onClick={() => {
              removeState();
            }}
          >
            No
          </Button>
          <Button
            bsStyle="primary"
            onClick={() => {
              removeCustomers(id);
              removeState();
            }}
          >
            Yes
          </Button>
        </div>
      )
    };

    const modalCreate = {
      title: 'Create customer',
      body: (
        <Form>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" value={name} onChange={this.nameChange} />
          </FormGroup>
          <FormGroup controlId="formInlineAddress">
            <ControlLabel>Address</ControlLabel>
            <FormControl type="text" value={address} onChange={this.addressChange} />
          </FormGroup>
          <FormGroup controlId="formInlinePhone">
            <ControlLabel>Phone</ControlLabel>
            <FormControl type="text" value={phone} onChange={this.phoneChange} />
          </FormGroup>
        </Form>
      ),
      footer: (
        <div>
          <Button
            bsStyle="primary"
            type="submit"
            onClick={() => {
              this.newCustomer(name, address, phone);
            }}
          >
            Create
          </Button>
          <Button
            onClick={() => {
              removeState();
            }}
          >
            Close
          </Button>
        </div>
      )
    };

    const modalEdit = {
      title: 'Edit customer',
      body: (
        <Form horizontal>
          <FormGroup controlId="eformInlineName">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl type="text" value={name} onChange={this.nameChange} />
            </Col>
          </FormGroup>
          <FormGroup controlId="eformInlineAddress">
            <Col componentClass={ControlLabel} sm={2}>
              Address
            </Col>
            <Col sm={10}>
              <FormControl type="text" value={address} onChange={this.addressChange} />
            </Col>
          </FormGroup>
          <FormGroup controlId="eformInlinePhone">
            <Col componentClass={ControlLabel} sm={2}>
              Phone
            </Col>
            <Col sm={10}>
              <FormControl type="text" value={phone} onChange={this.phoneChange} />
            </Col>
          </FormGroup>
        </Form>
      ),
      footer: (
        <div>
          <Col sm={2}>
            <Button
              bsStyle="primary"
              type="submit"
              onClick={() => {
                this.editCustomer(id, name, address, phone);
              }}
            >
              Save сhanges
            </Button>
          </Col>
          <Button
            onClick={() => {
              removeState();
            }}
          >
            Close
          </Button>
        </div>
      )
    };

    if (customers.length > 0) {
      template = customers.map((customers, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{customers.name}</td>
          <td>{customers.address}</td>
          <td>{customers.phone}</td>
          <td className="options">
            <Button
              className="edit"
              bsStyle="primary"
              onClick={() => {
                showModals();
                callModalsEdit(true);
                customersById(customers);
              }}
            >
              Edit
            </Button>
            <Button
              className="delete"
              onClick={() => {
                showModals();
                callModalsRemove(true);
                customersById(customers);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      ));
    }

    const table = (
      <Table responsive hover={true}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th />
          </tr>
        </thead>
        <tbody>{template}</tbody>
      </Table>
    );

    return (
      <div>
        <Row>
          <Col md={2}>
            <h3>Customer list</h3>
          </Col>
          <Col md={3}>
            <Button
              className="create"
              onClick={() => {
                showModals();
                callModalsCreate(true);
              }}
            >
              Create
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>{table}</Col>
        </Row>

        {callModalRemove ? (
          <ModalWindow
            show={showModal}
            onHide={() => {
              removeState();
            }}
            content={modalDelete}
          />
        ) : null}
        {callModalCreate ? (
          <ModalWindow
            show={showModal}
            onHide={() => {
              removeState();
            }}
            content={modalCreate}
          />
        ) : null}
        {callModalEdit ? (
          <ModalWindow
            show={showModal}
            onHide={() => {
              removeState();
            }}
            content={modalEdit}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state.customers
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeState,
      requestCustomers,
      removeCustomers,
      createCustomers,
      editCustomers,
      showModals,
      callModalsRemove,
      callModalsCreate,
      callModalsEdit,
      customersById,
      nameChange,
      addressChange,
      phoneChange
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Customers);

Customers.propTypes = {
  addressChange: PropTypes.func,
  callModalsCreate: PropTypes.func,
  callModalsEdit: PropTypes.func,
  callModalsRemove: PropTypes.func,
  createCustomers: PropTypes.func,
  customersById: PropTypes.func,
  editCustomers: PropTypes.func,
  nameChange: PropTypes.func,
  phoneChange: PropTypes.func,
  removeCustomers: PropTypes.func,
  removeState: PropTypes.func,
  requestCustomers: PropTypes.func,
  showModals: PropTypes.func,
  state: PropTypes.object
};
