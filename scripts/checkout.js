// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
function display(){
    let sum=JSON.parse(localStorage.getItem("amount"))||0
    document.querySelector("#wallet").innerText=sum
}
display()
moviedetails=JSON.parse(localStorage.getItem("movie"))
console.log(moviedetails)

    document.querySelector("#movie").innerText=null
    
        div=document.createElement("div")
        title=document.createElement("h2")
        image=document.createElement("img")
        image.src=moviedetails.Poster
        title.innerText=moviedetails.Title
        div.append(title,image)
        document.querySelector("#movie").append(div)
   function booking()
   {
       avlamt=JSON.parse(localStorage.getItem("amount"))||0
       console.log(avlamt)
       moneyneeded=document.querySelector("#number_of_seats").value*100
       if(moneyneeded>avlamt){
           alert("Insufficient Balance!")
       }
       else{
           console.log("booked")
           moneyleft=avlamt-moneyneeded
           localStorage.setItem("amount",JSON.stringify(moneyleft))
           alert("Booking successful!")
           display()
       }
   }
