class OrdersAdapter {
  constructor() {
      this.baseUrl = 'http://localhost:3000/api/orders'
  }

 getOrders() {
       return fetch(this.baseUrl).then(res => res.json())
  }

  createOrders(order) {
  
      //fetch returns a promise
      return fetch(this.baseUrl, {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
          },
          body: JSON.stringify({ order })
      })
      
      .then(res => res.json())
      
  }
}
