const input =document.getElementById("input")
function reverseString(str){
    return str.split("").reverse().join("")
}
function check(){
    const value=input.value;
  const reverse=reverseString(value);
  if(value === reverse){
    alert("Yes, it is a Palindrome")
  }else{
    alert("No,It is not a Palindrome")
  }
        input.value="";
}