let inputPanel=document.querySelector('#inputPanel');
let checkerPanel=document.querySelector('.checkerPanel');
let message=document.querySelector('.message');
// let decisionPanel=document.querySelector('.decisionPanel');
// let afficherPanel=document.querySelector('.afficherPanel');



const palindrome=(word)=>{
    let wordTextContent=``;
    
        if (word!=="") {
            wordTextContent=`${word.split("").reverse().join("")}`;
        if (wordTextContent===word) {
            let messageVerify=`Yes votre ${word} est un palindrom de ${wordTextContent}`;
            return messageVerify;
        } else {
            let messageVerify=`No votre ${word} n'est pas un palindrom de ${wordTextContent}`;
            return messageVerify;
        }
        } else {
            
        }
}
checkerPanel.addEventListener('click',()=>{
    // console.log(inputPanel.value)
    // console.log(message.textContent)
    message.textContent=``;
    message.textContent=palindrome(inputPanel.value);
    
});
