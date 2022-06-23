const API_KEY="b222711d25c3418ca4da8d7732f18ad1"

function onGeoOk(position){
    const lat = position.coords.latitude 
    const lng = position.coords.longitude
    console.log("당신은", lat, lng, "에 살고있어요")
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data)=> {
        const city = document.querySelector("#weater span:first-child")
        const weather = document.querySelector("#weater span:last-child")
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        city.innerText = data.name
    })

}

function onGeoError(){
    alert("날씨를 못찾았어요")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

