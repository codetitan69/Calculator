// Elements

let Screen_Main = document.querySelector(".Screen .Main")
let Screen_Secondary = document.querySelector(".Screen .Secondary")
let Clear_btn = document.querySelector(".Clear")
let Delete_btn = document.querySelector(".Delete")
let EqualTo_btn = document.querySelector(".EqualTo")
let Decimal_btn = document.querySelector(".Decimal")

// Operators

let Multiply_btn = document.querySelector(".Multiply")
let Divide_btn = document.querySelector(".Divide")
let Subtract_btn = document.querySelector(".Subtract")
let Add_btn = document.querySelector(".Add")

// Numbers

let One = document.querySelector(".One")
let Two = document.querySelector(".Two")
let Three = document.querySelector(".Three")
let Four = document.querySelector(".Four")
let Five = document.querySelector(".Five")
let Six = document.querySelector(".Six")
let Seven = document.querySelector(".Seven")
let Eight = document.querySelector(".Eight")
let Nine = document.querySelector(".Nine")
let Zero = document.querySelector(".Zero")


let Display_btns = [
    One,Two,Three,Four,Five,Six,Seven,Eight,Nine,Zero,Decimal_btn,Multiply_btn,
    Divide_btn,
    Subtract_btn,
    Add_btn,
]

let Operator_btns = [
    Multiply_btn,
    Divide_btn,
    Subtract_btn,
    Add_btn,
]

function addToDisplay(event) {

    if (Screen_Secondary.textContent != '') {
        Screen_Secondary.textContent = ''
        Screen_Main.textContent = ''
        Decimal_btn.disabled = false
    }

    let Main_Screen_Content = Screen_Main.textContent != null? Screen_Main.textContent : ""

    Screen_Main.textContent = Main_Screen_Content + event.target.textContent
}

for (let i of Display_btns) {
    i.addEventListener('click',addToDisplay)
}

Decimal_btn.addEventListener('click',
    (event)=>{
        event.target.disabled = true
    }
)

for (let i of Operator_btns) {
    i.addEventListener('click',function (e){
        Decimal_btn.disabled = false
    })
}


function Equals() {
    let Main_Screen_Content = (Screen_Main.textContent != null? Screen_Main.textContent : "")
    
    let arr = Main_Screen_Content.split('')


    for (let i of Operator_btns) {
        if (arr.includes(i.textContent)) {


            let num1 = parseFloat(Main_Screen_Content.split(i.textContent)[0])

            let num2 = parseFloat(Main_Screen_Content.split(i.textContent)[1])

            switch (i.textContent) {
                case "+" :
                    Screen_Secondary.textContent = `${add(num1,num2).toFixed(2)}`
                    break;
                
                case "-" :
                    Screen_Secondary.textContent = `${subtract(num1,num2).toFixed(2)}`
                    break;
                
                case "%" :
                    Screen_Secondary.textContent = `${divide(num1,num2).toFixed(2)}`
                    break;
            
                case "*" :
                    Screen_Secondary.textContent = `${multiply(num1,num2).toFixed(2)}`
                    break;
            }
        }
    }
}

EqualTo_btn.addEventListener('click',Equals)

for (let i of Operator_btns) {
    i.addEventListener('click',function (e) {
        let Main_Screen_Content = (Screen_Main.textContent != null? Screen_Main.textContent : "")
    
        let arr = Main_Screen_Content.split('')
    
        arr.pop()

        for (let i of Operator_btns) {
            if (arr.includes(i.textContent)) {
                Equals()

                if (Screen_Secondary.textContent === 'Invalid Syntax') {
                    break
                }

                Screen_Main.textContent = `${Screen_Secondary.textContent}${e.target.textContent}`
                Screen_Secondary.textContent = ''
            }
        }
    })
}


Clear_btn.addEventListener('click',() => {
    Screen_Secondary.textContent = ''
    Screen_Main.textContent = ''
    Decimal_btn.disabled = false
})

Delete_btn.addEventListener('click',function (e) {
    if (Screen_Secondary.textContent === 'Invalid Syntax'){
        Screen_Secondary.textContent = ''
    }

    let Main_Screen_Content = Screen_Main.textContent.split('')
    Main_Screen_Content.pop()

    Screen_Main.textContent = Main_Screen_Content.join('')
})

function add(a , b) {
    return a +  b
}

function subtract(a , b) {
    return a - b
}

function multiply(a , b) {
    return a * b
}

function divide(a , b) {
    return a % b
}