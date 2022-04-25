// Store the wallet amount to your local storage with key "amount"
let sum=JSON.parse(localStorage.getItem("amount"))||0
document.querySelector("#wallet").innerText=sum
function display()
{
    document.querySelector("#wallet").innerText=sum 
}
display()
function addmoney()
{   let sum=JSON.parse(localStorage.getItem("amount"))||0
    amount=document.querySelector("#amount").value
    sum=sum+Number(amount)
   // document.querySelector("#wallet").innerText=sum
    // console.log(arr)
    // let sum=0
    // for(let i=0;i<arr.length;i++){
    //     sum=sum+arr[i]
    // }
    console.log(sum)
   
    localStorage.setItem("amount",JSON.stringify(sum))
     document.querySelector("#wallet").innerText=sum
}