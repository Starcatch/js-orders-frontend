class Order {
  constructor(orderJSON) {
    this.id = orderJSON.id
    this.client_name = orderJSON.client_name
    this.phone = orderJSON.phone
    this.address = orderJSON.address
    //this.items = orderJSON.items
  }
}

//   renderOrder() {
//     return `
//     <div class= order-render" id="order-${this.id}">
//     ${this.renderClient_name()}
//     ${this.renderPhone()}
//     ${this.renderAddress()}
//     `
//      ${this.renderNewItemButton()}
//   }
//