// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let sum=JSON.parse(localStorage.getItem("amount"))||0
document.querySelector("#wallet").innerText=sum

function display()
{
    document.querySelector("#wallet").innerText=sum 
}
display()
async function search()
{
     let input=document.querySelector("#search").value 
     const resp=await fetch(`https://www.omdbapi.com/?apikey=9dd3ac03&type="movie"&s=${input}`)
     const data=await resp.json()
     movielist=(data.Search)
     return movielist
}

async function main()
{
    const response=await search()
    if(response==undefined){
        console.log("undefined")
        document.querySelector("#movies").innerText=null
        document.querySelector("#movies").innerText="No such movie"

    }
    else{
        console.log(response)
        append(response)
    }
}
function append(data)
{ document.querySelector("#movies").innerText=null
    data.map(function(el){
        div=document.createElement("div")
        image=document.createElement("img")
        image.src=el.Poster
        image.style.height="50%"
        image.style.width="100%"
        p=document.createElement("p")
        p.innerText=el.Title
        btn=document.createElement("button")
        btn.innerText="book now"
        btn.setAttribute("class","book_now")
        btn.addEventListener("click",function(){
            book(el)
        })
        div.append(image,p,btn)
        document.querySelector("#movies").append(div)
    })

}
function book(el){
    console.log(el)
    localStorage.setItem("movie",JSON.stringify(el))
    window.location.href="checkout.html"
}
let id;
async function debounce(func,delay)
{
    if(id)
    {
        clearInterval(id)
    }
    id=setTimeout(function(){
        func()
    },delay)
}
