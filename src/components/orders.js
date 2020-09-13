class Orders {
//   static allOrders = []

  constructor() {
      this.orders = []
      this.orderAdapter = new OrdersAdapter()
      this.itemAdapter = new ItemsAdapter()
      this.initBindingsAndEventListeners()
      this.fetchAndLoadOrders()
  }

  

  initBindingsAndEventListeners() {
      this.ordersContainer = document.getElementById('orders-container')
    //   this.orderContainer.addEventListener('click', deleteOrders())
  
      this.newOrderPhone = document.getElementById('new-order-phone')
      this.newOrderAddress = document.getElementById('new-order-address')
      this.orderForm = document.getElementById('new-order-form')
      this.orderForm.addEventListener('submit', this.createOrder.bind(this))
      this.ordersContainer.addEventListener('click', this.handleNewItemClick)
      this.ordersContainer.addEventListener('submit', this.handleFormOnSubmit.bind(this))
      
   
    
      this.nameButtonSort = document.getElementById('name-button')
      this.nameButtonSort.addEventListener('click', this.sortOrders.bind(this))
  }

  compare(a, b) {
      
      const client_nameA = a.client_name.toUpperCase();
      const client_nameB = b.client_name.toUpperCase();

      let comparison = 0;
      if (client_nameA > client_nameB) {
          comparison = 1;
      } else if (client_nameA < client_nameB) {
          comparison = -1;
      }
      return comparison;
  }
         
//   static allOrders() {
//       return allOrders
//   }


  sortOrders() {
      const sortedOrders = this.orders.sort(this.compare);
      this.renderSortedOrders(sortedOrders)
  }

  renderSortedOrders(sortedOrders) {
      this.ordersContainer.innerHTML=""
      this.ordersContainer.innerHTML = sortedOrders.map(order =>order.renderOrder()).join('')
  }
  
  //form submit event handler
  handleFormOnSubmit(e){
      e.preventDefault()
      const item = {
          item_name: event.target.querySelector('#order-item-item_name').value,
          item_price: event.target.querySelector('#order-item_price').value,
          order_id: event.target.getAttribute('data-order-id')
      }

      this.itemAdapter.createItem(item)
          .then(item => {

              const order = this.orders.find(order => order.id === item.order.id)
              order.items.push(item)
     
          
          this.render()
          })
          .catch(err => console.log(err))
  }
  createOrder(e) {
    console.log(this)
    e.preventDefault()
    
   const order = {
     client_name: this.newOrderClient_name.value,
     phone: this.newOrderPhone.value,
     address: this.newOrderAddress.value
     
   }

   this.orderAdapter.createOrder(order)
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

//   deleteOrder){
//       e.preventDefault()
//       console.log('delete')
//   }
  
  

  handleNewItemClick(e) {

      if (e.target.className === 'new-item-button'){
          const str = e.target.id
          const orderId = str.split('_')[2];
          Order.renderNewOrderItemForm(orderId);
      }
      
  }



  fetchAndLoadOrders() {
      this.orderAdapter
          .getOrders()
          .then(orders => {
              orders.forEach(order => this.orders.push(new Order(order)))
              console.log(this.orders)
      })
      .then(() => {
          this.render()
      }) 
  }

  render() {        
      this.ordersContainer.innerHTML = this.orders.map(order =>order.renderOrder()).join('')
  }
}
