/* Sample File */


let x=10;
const y=2;
var z=10;

if(x > y){
  console.log(x + " > " + y);
} else if(x==y){
  console.log(x + ' = ' + y);
} else{
  console.log(x + " < " + y);
}

function makeSlash(n){
  text='';
  for (let i = 0; i < n; i++){
    text += "-";

    console.log(text);
  }
}
