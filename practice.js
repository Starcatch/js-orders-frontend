


//  const itemButton =  document.getElementById('item-button');
// let baseURL = 'http://localhost:3000/api/items'

//  itemButton.addEventListener('click',(e) => {
//   return fetch(this.baseURL).then(res => res.json())
//   console.log(e)
// })


filter = (word) => {   
  const list = document.querySelectorAll('#list li');   
 list.forEach((listItem) => {   
        const title = listItem.querySelector('h3')
                if (!title.innerText.includes(word))          listItem.style.display = 'none';   
               else          
                  listItem.style.display = '';  
                  })}

//  FETCH


document.querySelector('form').addEventListener('submit', event => {   event.preventDefault();
      const pattern = event.target.querySelector('input').value;
         search(pattern)
         .then(r => r.json())
         .then(renderItems)})
         renderItems = (items) => {    
           const listContainer = document.querySelector('#list')    listContainer.innerHTML = items.map(item => 
            `<li>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            </li>`).join('')}