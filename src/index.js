import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  render() {
    return (

      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Order by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderAt}.</li>
        </ul>
      </div>
    )
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular'
};

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  // Must be passed in, must be an array of strings
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Defines an object with specific keys and value types
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderAt: PropTypes.number.isRequired // Using UNIX timestamps here
  }).isRequired
};
