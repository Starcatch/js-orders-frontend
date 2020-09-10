class Orders {
  // static allOrders = []

  constructor() {
    this.orders = []
    this.adapter = new OrdersAdapter()
    this. ItemAdapter = new ItemsAdapter()
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
    this.ordersContainer.addEventListener('click', this.handleNewItemClick)
    this.ordersContainer.addEventListener('submit', this.handleFormOnSubmit.bind(this))

  }
   
  // static allOrders() {
  //   return allOrders
  // }

  handleFormOnSubmit(e) {
    e.preventDefault()
    const item = {
      item_name: event.target.querySelector(`#order-item-item_name`).value,
      Item_price: event.target.querySelector(`#order-item_price`).value,
      order_id: event.target.getAttribute('data-order-id')
    }
    this.ItemAdapter.createItem(item)
    .then(item => {
      const order = this.orders.find(order => order.id === item.order.id)
      order.items.push(item)

      this.render()
    })
    .catch(err => console.log(err))
  }



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

  handleNewItemClick(e) {

    if (e.target.className === 'new-item-button'){
        const str = e.target.id
        const orderId = str.split('_')[2];
        Order.renderNewOrderItemForm(orderId);
    }

    //does the e.target have the new-review-button class name?? only respond if it does
    // take the book id value from the button
    // call the render Book.renderForm function and pass it the book id
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