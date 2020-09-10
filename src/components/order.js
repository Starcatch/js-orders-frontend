class Order {
  constructor(orderJSON) {
    this.id = orderJSON.id
    this.client_name = orderJSON.client_name
    this.phone = orderJSON.phone
    this.address = orderJSON.address
    //this.items = orderJSON.items
  }
 renderLi() {
   return ` <ul>
              <h3>${this.client_name}</h3>
              <li>${this.phone}</li>
              <li>${this.address}</li>
              
   </ul>
   `
 }

//  renderClient_name() {
//    `<h3>${this.client_name}</h3>`
//  }

//  renderNewItemButton(){
//    return `
//    <button class="new-item-button" id="new_item_${this.id}"> Add Item</button>
//    `
//  }

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