class Order {
  constructor(orderJSON) {
    
      this.id = orderJSON.id
      this.client_name = orderJSON.client_name
      this.phone = orderJSON.phone
      this.address= orderJSON.address
      this.items = orderJSON.items
      
      
  }

 

  

  renderOrderItems(){
      return `
          <ul>
          ${this.items.map(item => {
              return `
                  <p>- ${item.item_name}</p>
                  <ul>  -${item.item_price}</ul>
              `
          }).join('')}
          </ul>
          `
  }

  renderLi() {
    
      return `<ul>
                  <li>${this.phone}</li>
                  <li>${this.address}</li>
              </ul>
              <div class="jumbotron jumbotron-fluid">
              <div class="container">
                  <span id="thisone_${this.id}">0</span>
                  <button onclick="this.previousElementSibling.innerHTML=1+parseInt(this.previousElementSibling.innerHTML)" type="button" class="btn btn-lg btn-info" id="justdoit_${this.id}">one more</btn>
              </div>
            </div>
            `

  }

   
  

//   <div>
//   <button id="add-like">Like</button>
//   <input type="number" value="0"
//   </div>
//     let btnLike = document.querySelector('#add-like');
//   let input = document.querySelector('input');
//   btnLike.addEventListener('click', () => {
//       input.value = parseInt(input.value) +1

//   });


 




 
  


  renderClient_name(){
      return `<h3>${this.client_name}</h3>`
  }
  


   



  renderNewItemButton(){
      return `
          <button class="new-item-button" id="new_item_${this.id}">Add Item</button>
      `
  }
   

  static renderNewOrderItemForm(orderId) {
      const formContainer = document.getElementById(`order-${orderId}`)
      const form = document.createElement("form")
      form.setAttribute('data-order-id', orderId)

      form.innerHTML = `
          Item: <input type="text" name="order-item-item_name" id="order-item-item_name"/><br>
          Item Price:<input type="text" name="order-item_price" id="order-item_price"/><br>            
          <button type="submit-item" id="submit-item -button">Submit Item</button>
      `

      
      formContainer.appendChild(form)
  }

  renderOrder(){
      
      return `
          <div class="order-render" id="order-${this.id}">
              ${this.renderClient_name()}
              ${this.renderLi()}
              ${this.renderOrderItems()}
              ${this.renderNewItemButton()} 
         </div> 
         `
     
  }



  


 



}