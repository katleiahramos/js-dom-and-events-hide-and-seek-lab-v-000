function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.querySelector('#grand-node');
  let child = node.children[0];

  while (child){
    node = child
    child = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
 const list = document.querySelectorAll('.ranked-list')

 for(let i=0; i < list.length; i++){
   let c = list[i].children


   for (let j=0; j < c.length; j++){
     c[j].innerHTML = parseInt(c[j].innerHTML) + n
   }
 }

}
