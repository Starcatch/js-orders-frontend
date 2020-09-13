class ItemsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/items'
    }
  
    getItems() {
        return fetch(this.baseUrl).then(res => res.json())
    }
  
    createItem(item) {
    
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ item })
        })
        .then(res => res.json())
        
    }
  }
  