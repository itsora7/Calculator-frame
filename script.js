// Grab all the buttons as in array
// loop through them and add click addeventlistener to each element
//when elements are clicked, get the buttons innner text and store them in some vatiable
//grab the display element
// //and create a function to display clicked they to the display element
// const buttonClick = (val) => {
// alert(val);
// };


// const btnArgs = Array.from( document.querySelectorAll(".btn"));
// const displayElm = document.querySelector(".display");
// let strTwoDisplay = "";

// btnArgs.map((elm) => {
// // console.log(elm.innerText)
// elm.addEventListener("click", () => {
//     const val = elm.innerText; //read the value
//     // alert (val);
//     strTwoDisplay +=val;
//     display(strTwoDisplay)
//     console.log(strTwoDisplay);
// });
// });
// // console.log(btnArgs);

// const display = (str) => {
//     displayElm.innerText = str; //write and over write the value
// }

const allButtons = Array.from( document.querySelectorAll(".btn"));
const displayElm = document.querySelector(".display")
console.log(allButtons);

let strToDisplay = "";
const audio = new Audio('aa.wav');
const operators = ['%','/','*','+','-'];
let lastOperator =""

allButtons.map((btn)=>{
    // console.log(btn);
    btn.addEventListener("click", () => {
        const val = btn.innerText;

        displayElm.style.background = "";
        displayElm.style.color = "blask";
        displayElm.classList.remove("Prank");

        if(val === 'AC'){
            strToDisplay = "";
            return display();
        }

        if (val === 'C'){
            strToDisplay = strToDisplay.slice(0, -1)
            return display(strToDisplay);
        }

        if(val === "="){

            const lastChar = strToDisplay[strToDisplay.length - 1];
            if (operators.includes(lastChar)){
                strToDisplay = strToDisplay.slice(0, -1)
            }
            return total();
        }

        if (operators.includes(val)){
            // console.log("clicked on the operators")

            lastOperator = val;
            if(!strToDisplay){

                return;
            }
            const lastChar = strToDisplay[strToDisplay.length - 1];
            console.log(lastChar)
            if (operators.includes(lastChar)){
                strToDisplay = strToDisplay.slice(0, -1)
            }
        }
        

        if(val ==="."){
            if(lastOperator){
                const operatorIndex = strToDisplay.lastIndexOf(lastOperator)
                const lastNumberSet = strToDisplay.slice(operatorIndex + 1);

                if (lastNumberSet.includes(".")){
                    return;
                }
            }

            if(!lastOperator && strToDisplay.includes("."))
        {
            return;
        }
    }
        strToDisplay += val;

        // console.log(strToDisplay);
        display(strToDisplay);
    })
})

const display = str => {
    displayElm.innerText = str || "0.00";
}
const total = () => {
    const extra = randomNumber();

    if(extra > 0){
        displayElm.style.background = "red";
        displayElm.style.color = "white";
        displayElm.classList.add("Prank");

        audio.play();
    }
    // console.log(extra)
    const ttl = eval(strToDisplay) + extra;
    strToDisplay = ttl.toString();
    display(strToDisplay);

}

const randomNumber = () =>{
    const num= Math.round(Math.random() *10);
    return num < 3 ? num :0;
}