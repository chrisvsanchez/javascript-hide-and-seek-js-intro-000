function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild(){
  var deepest = document.getElementById('grand-node').querySelectorAll('div')
  return deepest[deepest.length-1];
}