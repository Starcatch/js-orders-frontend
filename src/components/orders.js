class Orders {
  constructor() {
    this.orders = []
    this.adapter = new OrdersAdapter()
    this.initBindingEventListeners()
    this.fetchAndLoadOrders()
  }

  initBindingEventListeners() {
    this.ordersContainer = document.getElementById('orders-container')
    this.newOrderClient_name = document.getElementById('new-order-client_name')
    this.newOrderPhone = document.getElementById('new-order-phone')
    this.newOrderAddress = document.getElementById('new-order-address')
    this.orderForm = document.getElementById('new-order-form')
    this.orderForm.addEventListener('submit',this.createOrder.bind(this))

  }

  createOrder(e){
    e.preventDefault()
    console.log('order is being created')
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
   
     this.ordersContainer.innerHTML = this.orders.map(order => order.renderLi()).join('')

      }

}