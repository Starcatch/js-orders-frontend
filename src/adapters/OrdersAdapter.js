class OrdersAdapter {
  constructor() {
    this.baseURL = 'http://127.0.0.1:3000/api/orders'
  }

  getOrders() {
    return fetch(this.baseURL).then(res => res.json())
  }

  createOrder(order) {
    
    //fetch returns a promise
    return fetch(this.baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ order })
    })
    //.then is called when the promise resolves 
    //the response from the database is passed as an arguement 
    .then(res => res.json())
    
}
}