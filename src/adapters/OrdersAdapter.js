class OrdersAdapter {
  constructor() {
    this.baseURL = 'http://127.0.0.1:3000/api/orders'
  }

  getOrders() {
    return fetch(this.baseURL).then(res => res.json())
  }
}