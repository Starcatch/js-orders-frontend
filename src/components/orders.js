class Orders {
  constructor() {
    this.orders = []
    this.adapter = new OrdersAdapter()
    this.fetchAndLoadOrders()
  }

  fetchAndLoadOrders() {
    this.adapter.getOrders().then(orders => {
      console.log(orders)
    })


  }

}