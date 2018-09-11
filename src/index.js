import React from 'react';

import ReactDOM from 'react-dom';

class Order extends React.Component {
    render() {
       const { cone, size, scoops, orderInfo} = this.props;
      return (
        <h1>{orderInfo.customerName} ordered at {orderInfo.orderedAt}</h1>
        <p>Cone: {cone}</p>
        <p>Size: {size}</p>
        <p>Scoops: {scoops}</p>
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
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
  }).isRequired
};
