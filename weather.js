
// let url="https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=98fa9030310b11c63c6769d3c86340c3"

// fetch(url)
// .then(resolve=> resolve.json())
// .then(resolve=>
//     console.log(resolve)
// )
// .catch(reject=>console.log("failed"))
let main=document.getElementById("display")
document.querySelector("form").addEventListener("submit",weatherData)
async function weatherData(){
    event.preventDefault()
    let cityname=document.getElementById("input").value
    console.log(cityname)
    console.log("hi")
    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=98fa9030310b11c63c6769d3c86340c3`)
    let mainData=await response.json() 


    display (mainData)
    // let arr
    // let getdata=parse.json(localStorage.getItem("weather"))
    // if(getdata==null){
    //     arr=[]
    // }
    // else{
    //     arr=getdata
    // }
    // arr.pusnData.main)
    // localStorage.setItem("weather",json.stringyfy(arr))
  
}


function display(mainData){
main.innerHTML=""
let box=document.createElement("div")
box.setAttribute("id","box")
    console.log(mainData)
    console.log(mainData.sys.sunset)
    let heading=document.createElement("h3")
    heading.innerText="Weather Description Of Your City:"

    // let imagebox=document.createElement("div")
    // imagebox.setAttribute("id","image")
    // let image=document.createElement("img")
    // image.src=""
  
    // if(mainData.weather[0].main==="Clouds"){
    //     image.src= "https://webstockreview.net/images/cloudy-clipart-weather-chart-11.png"
    // }
    // else if(mainData.weather[0].main==="clear sky"){
    //     image.src="https://www.flaticon.com/premium-icon/icons/svg/3222/3222800.svg"

    // }
    // imagebox.append(image)
    let p1=document.createElement("p")
p1.innerText="Temperature:"+" "+mainData.main.temp 
    let p2=document.createElement("p")
    p2.innerText="Pressure:"+" "+mainData.main.pressure 
    let p3=document.createElement("p")
    p3.innerText="Humidity:"+" "+mainData.main.humidity 
    let p4=document.createElement("p")
    p4.innerText="Sunrise:"+" "+mainData.sys.sunrise 
    let p5=document.createElement("p")
    p5.innerText="Temperature:"+" "+mainData.sys.sunset 
    let p6=document.createElement("p")
    p6.innerText="Windspeed:"+" "+mainData.wind.speed 
    let p7=document.createElement("p")
    p7.innerText="Weather Description:"+" "+mainData.weather[0].main

   box.append(heading,p1,p2,p3,p4,p5,p6,p7)
   main.append(box)

}
