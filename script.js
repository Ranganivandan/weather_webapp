
var subscript=document.getElementById("subscript");
var humidity=document.getElementById("percentagehumi");
var speed=document.getElementById("speedofair");
var celcius=document.getElementById("celius");
var cityname=document.getElementById("cityname");
var changeimg=document.getElementById("changeimg");


const apikey="fe790ec0b5bf076b6234108b4a324707";


document.getElementById("search").addEventListener("click",()=>{
    var city=document.getElementById("city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
    .then(response =>response.json() )
.then(res=>{
 
    if(city==""){
   
        subscript.innerHTML="enter valid city name"
    }
else{
    
try{
   
    console.log("vandan")
    var parsee=parseInt(res.main.temp)
console.log(parsee-273)
celcius.innerHTML=parsee-273;
subscript.innerHTML=res.weather[0].description;
console.log(res.weather[0].description)
speed.innerHTML=res.wind.speed;
cityname.innerHTML=city;
humidity.innerHTML=(res.main.humidity)+"%";


switch (res.weather[0].description) {
    case 'few clouds':
        changeimg.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Gnome-weather-few-clouds.svg/2048px-Gnome-weather-few-clouds.svg.png"
        break;
case 'scattered clouds':
    changeimg.src="https://media.istockphoto.com/id/645173476/photo/cirrocumulus-clouds-cloudscape.webp?b=1&s=170667a&w=0&k=20&c=g_bYn51s1llK9hhj6gy-QX3c3PyH9Cml2EHG8t5DsHE="
    
    case 'broken clouds':
    changeimg.src="https://s.w-x.co/ugc/styles/980x551/storage-file-default-scheme/2016/03/28/a357ad22-79cd-48fe-9008-c0aba4cb8769.jpg?crop=16:9&width=480&format=pjpg&auto=webp&quality=60"
    break;
    
    default: changeimg.src="https://static.vecteezy.com/system/resources/previews/012/066/505/original/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png";
      
}



}
catch{
    cityname.innerHTML=city
    subscript.innerHTML=res.message;
}



}

}

)    
    .catch(err=>{console.log(err)
    
    });

})
