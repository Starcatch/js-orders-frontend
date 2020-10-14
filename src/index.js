const app = new App()


 function addOneLike(e) {
  //  console.log(e.target.id)
   let likeId = e.target.id.replace("justdoit","thisone")
  //  console.log(likeId)
  //  console.log(document.getElementById(likeId).innerHTML)
   
  
let addLike = parseInt(document.getElementById(likeId).innerHTML);
// console.log(addLike)
addLike++;
document.getElementById(likeId).innerHTML = addLike;
}

