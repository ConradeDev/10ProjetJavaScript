let randomBackground=document.querySelector(".randomBackground");
let randomColor1=document.querySelector(".randomColor1");
let randomColor2=document.querySelector(".randomColor2");
let randomColor3=document.querySelector(".randomColor3");
let option=document.querySelector("#directionLinearGradient");
let randomRefresh=document.querySelector(".randomRefresh");
let body=document.querySelector("body");
let generateBackgroundCopie=document.querySelector(".generateBackgroundCopie");
let generateBackground1=document.querySelector(".generateBackground1");
let generateBackground2=document.querySelector(".generateBackground2");
let generateColor1=document.querySelector(".generateColor1");
let generateColor2=document.querySelector(".generateColor2");




const generateColor=()=>{
    const caracteresHex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += caracteresHex[Math.floor(Math.random() * 16)];
    }
    return color;
}


randomRefresh.addEventListener('click',()=>{

    let color1=generateColor();
    let color2=generateColor();
    randomColor1.style.background=color1;
    randomColor2.style.background=color2;
    generateBackground1.style.color=`red`;
    generateBackground1.innerHTML=``;
    generateBackground1.innerHTML=`Background`;

    generateBackground2.style.color=`red`;
    generateBackground2.innerHTML=``;
    generateBackground2.innerHTML=`linear-gradient`;

    generateColor1.style.color=`${color1}`;
    generateColor1.innerHTML=``;
    generateColor1.innerHTML=`${color1}`;

    generateColor2.style.color=`${color2}`;
    generateColor2.innerHTML=``;
    generateColor2.innerHTML=`${color2}`;
    console.log(generateColor2.innerHTML);

    generateBackgroundCopie.innerHTML=`${generateBackground1.innerHTML}:${generateBackground2.innerHTML}(${option.value},<br>
    ${generateColor1.innerHTML},${generateColor2.innerHTML})`;
    randomBackground.style.background=`linear-gradient(${option.value}, ${color1},${color2})`;
    body.style.background=`linear-gradient(${option.value},${color1},${color2})`;
    console.log(option.value);

})