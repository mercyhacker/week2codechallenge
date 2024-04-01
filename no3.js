

//first letter is lowercase
//rest is upper case
// tHE qUICK bROWN fOX

let string = "The Quick Brown fox"
// The Quick Brown fox
// tHE qUICK bROWN fOX
function swapCase(string){
    word = string.split(' ');
      return  word.map( i =>  {
      return  i[0].toLowerCase() + (i.slice(1)).toUpperCase()//first letter is lowercase
      }).join(" ");//rest is upperCase
  }console.log (swapCase(string))