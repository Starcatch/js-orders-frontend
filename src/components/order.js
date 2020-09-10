class Order {

  constructor(orderJSON) {
    this.id = orderJSON.id
    this.client_name = orderJSON.client_name
    this.phone = orderJSON.phone
    this.address = orderJSON.address
    this.items = orderJSON.items
  }


  renderOrdersItems() { 
   
    return `
            <ul>${this.items.map(item => {
                return `
                    <p>- ${item.item_name}</p>
                    <ul>        - ${item.item_price}</ul>
                `
            }).join('')}</ul>

            `
  } 


 renderLi() {
   return ` <ul>
              <h3>${this.client_name}</h3>
              <li>${this.phone}</li>
              <li>${this.address}</li>
              
   </ul>
   `
 }



 renderClient_name() {
   `<h3>${this.client_name}</h3>`
 }

 renderNewItemButton(){
   return `
   <button class="new-item-button" id="new_item_${this.id}"> Add Item</button>
   `
 }


static renderNewOrderForm(orderId){
  const formContainer = document.getElementById(`order-${orderId}`)
  const form = document.createElement("form")
  form.setAttribute('data-order-id', orderId)

  form.innerHTML = `
  Item: <input type="text" name="order-item-item_price" id="order-item-item_price"/><br>
  <input type="submit" value="Submit Item"/>
  `
  formContainer.appendChild(form)
} 
renderOrder(){
        
  return `
      <div class="order-render" id="order-${this.id}">
          ${this.renderClient_name()}
          ${this.renderLi()}
          ${this.renderOrdersItems()}
          ${this.renderNewItemButton()}
      </div>
  `
}

}