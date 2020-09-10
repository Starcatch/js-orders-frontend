class Orders {
  // static allOrders = []

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
   
  // static allOrders() {
  //   return allOrders
  // }

  createOrder(e) {
    e.preventDefault()
    console.log(this)
   const order = {
     client_name: this.newOrderClient_name.value,
     phone: this.newOrderPhone.value,
     address: this.newOrderAddress.value
     

   }

   this.adapter.createOrder(order)
   .then(order => {
     const object = new Order(order)
     this.orders.push(object)
    //  allOrders.push(object)
    this.newOrderClient_name.value = ''
    this.newOrderPhone.value = ''
    this.newOrderAddress.value = ''
    
     this.render()
   })
   .catch(err => console.log(err))

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