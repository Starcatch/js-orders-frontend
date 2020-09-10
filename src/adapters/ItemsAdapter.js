class ItemsAdapter {
  constructor() {
    this.baseURL = 'http://localhost:3000/api/items'
  }
  getItem() {
    return fetch(this.baseURL)
    .then(res => res.json())
  }
 createItem(item) {
   return fetch(this.baseURL, {
     method: 'POST',
     headers: {
      'content-type': 'application/json',
     },
     body: JSON.stringify({item})
   })
   .then(res => res.json())
 }

}