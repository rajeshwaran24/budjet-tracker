// Element

const balanceEl=document.getElementById('balance');
const incomeEl=document.getElementById('income');
const expanseEl=document.getElementById('expense');
const formEl=document.getElementById('form');
const listEl=document.getElementById('list');
const transactionEl=document.getElementById('Transaction');
const amountEl=document.getElementById('amount');
const buttonEl=document.getElementById('btn');


// global variables

let transactions=[];
let income = 0;
let balance = 0;
let expanse = 0;


function init(){
    listEl.innerHTML=null;
    income=0;
    expanse=0;
    balance=0;
    // incomeEl.innerText=null;
    // expanseEl.innerText=null;
    // balanceEl.innerText=null;

}
init();

//step-2
function updateUi({id,name,amount}){
    const liEl=document.createElement('li');
    liEl.innerHTML=`${name} ${amount}
    <button class="delete-btn btn" onclick=deleteTransaction(${id})>X</button>`;

    listEl.appendChild(liEl)
}

//step-4

function updateValue(){
  income =transactions.map((val)=>val.amount).filter((val)=>val>0).reduce((prev,val)=>prev+val,0);
  expanse =transactions.map((val)=>val.amount).filter((val)=>val<0).reduce((prev,val)=>prev+val,0);
  balance =transactions.map((val)=>val.amount).reduce((prev,val)=>prev+val,0);
    console.log(income);
    console.log(expanse);
    console.log(balance);


    incomeEl.innerText=`${income}`
    expanseEl.innerText=`${expanse}`
    balanceEl.innerText=`${balance}`


}
//step-3
function deleteTransaction(id){
    transactions=transactions.filter((transaction=>{
        return transaction.id!==id;
    }))

    listEl.innerHTML=null;


    //re add the list item
    transactions.forEach((transaction)=>{
        updateUi(transaction)
    })
}




formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    //validation user input step-1

    if (transactionEl.value.trim() === "" || amountEl.value.trim() === "" || Number(amountEl.value === "0")) 
      {
        alert("Please Enter a Valid Transaction Details");
      }
      //step-2
      else{
        const transaction={
            id: Date.now(),
            name: transactionEl.value,
            amount: Number(amountEl.value),
        };
        transactions.push(transaction);

        updateUi(transaction);
      }
        updateValue()

      transactionEl.value = null;
      amountEl.value = null;
        
})  

