const order = {
  customer: {
    address: 'Birdcage Walk'
  }
};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}