class Orders {
  constructor() {
    this.orders = []
    this.adapter = new OrdersAdapter()
    this.initBindingEventListeners()
    this.fetchAndLoadOrders()
  }

  initBindingEventListeners() {
    this.document.getElementById('orders-container')
  }

  fetchAndLoadOrders() {
    this.adapter
    .getOrders()
    .then(orders => {
      orders.forEach(order => this.orders.push(new Order(order)))
      console.log(orders)
    })
    .then(() => {
      this.render()
    })
  }
      

    render() {
   
     this.ordersContainer.innerHTML = this.orders.map(order => `<li>${order.client_name}</li>`).join('')

    // this.ordersContainer.innerHTML = this.orders.map(order => order.renderOrder()).join('')
      }


 

}