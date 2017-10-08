import React, { PropTypes, Component } from 'react';
import {
  removeState,
  requestProducts,
  removeProducts,
  createProducts,
  editProducts,
  productsById,
  nameChange,
  priceChange
} from '../actions/ProductsAction';
import { showModals, callModalsRemove, callModalsCreate, callModalsEdit } from '../actions/ModalAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button, Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ModalWindow from '../components/ModalWindow';

class Products extends Component {
  constructor(props) {
    super(props);
    this.nameChange = this.nameChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.newProduct = this.newProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
    this.props.requestProducts();
    document.title = 'Products';
  }
  nameChange(event) {
    this.props.nameChange(event.target.value);
  }

  priceChange(event) {
    this.props.priceChange(event.target.value);
  }

  newProduct(name, price) {
    const data = { name, price };
    this.props.createProducts(data);
    this.props.removeState();
  }

  editProduct(id, name, price) {
    const data = { name, price };
    this.props.editProducts(id, data);
    this.props.removeState();
  }
  render() {
    const { id, name, price, products, showModal, callModalRemove, callModalCreate, callModalEdit } = this.props.state;
    const {
      removeState,
      removeProducts,
      showModals,
      callModalsRemove,
      callModalsCreate,
      callModalsEdit,
      productsById
    } = this.props;
    let template;
    const modalDelete = {
      title: 'Delete product',
      body: (
        <div>
          <p>Do you really want to delete?</p>
          Product name: {name}
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
              removeProducts(id);
              removeState();
            }}
          >
            Yes
          </Button>
        </div>
      )
    };

    const modalCreate = {
      title: 'Create product',
      body: (
        <Form>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" value={name} onChange={this.nameChange} />
          </FormGroup>
          <FormGroup controlId="formInlinePrice">
            <ControlLabel>Price</ControlLabel>
            <FormControl type="text" value={price} onChange={this.priceChange} />
          </FormGroup>
        </Form>
      ),
      footer: (
        <div>
          <Button
            bsStyle="primary"
            type="submit"
            onClick={() => {
              this.newProduct(name, price);
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
      title: 'Edit product',
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
          <FormGroup controlId="eformInlinePrice">
            <Col componentClass={ControlLabel} sm={2}>
              price
            </Col>
            <Col sm={10}>
              <FormControl type="text" value={price} onChange={this.priceChange} />
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
                this.editProduct(id, name, price);
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
    if (products.length > 0) {
      template = products.map((products, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{products.name}</td>
          <td>{products.price}</td>
          <td className="options">
            <Button
              className="edit"
              bsStyle="primary"
              onClick={() => {
                showModals();
                callModalsEdit(true);
                productsById(products);
              }}
            >
              Edit
            </Button>
            <Button
              className="delete"
              onClick={() => {
                showModals();
                callModalsRemove(true);
                productsById(products);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      ));
    }

    const table = (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
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
            <h3>Products list</h3>
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
  state: state.products
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeState,
      requestProducts,
      removeProducts,
      createProducts,
      editProducts,
      productsById,
      nameChange,
      priceChange,
      showModals,
      callModalsRemove,
      callModalsCreate,
      callModalsEdit
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Products);

Products.propTypes = {
  callModalsCreate: PropTypes.func,
  callModalsEdit: PropTypes.func,
  callModalsRemove: PropTypes.func,
  createProducts: PropTypes.func,
  editProducts: PropTypes.func,
  nameChange: PropTypes.func,
  priceChange: PropTypes.func,
  productsById: PropTypes.func,
  removeProducts: PropTypes.func,
  removeState: PropTypes.func,
  requestProducts: PropTypes.func,
  showModals: PropTypes.func,
  state: PropTypes.object
};
