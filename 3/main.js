const quotes=[
    "The only way to do great work is to love what you do. - Steve Jobs",

"Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",

"Believe you can and you're halfway there. - Theodore Roosevelt",

"Do what you can, with what you have, where you are. - Theodore Roosevelt",

"Act as if what you do makes a difference. It does. - William James"
];
const usedIndexes = new Set();
 const quoteElement=document.getElementById("quote");
function generateQuote(){
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    while(true){
        const randomIndex=Math.floor(Math.random()*quotes.length);
        if(usedIndexes.has(randomIndex)) continue;
const quote =quotes[randomIndex];
        quoteElement.innerHTML=quote;
        usedIndexes.add(randomIndex);
        break;
    }
}
