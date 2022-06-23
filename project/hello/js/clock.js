const clock = document.querySelector("h2#clock")


function getClock(){
    const date = new Date()
    //new Date() = 현재 년월시분초
    //date.getHours() => 현재 시간
    const hours = String(date.getHours()).padStart(2,"0")
    //date.getHours로 받은 시간을 String()으로 변환 후 한자리일 경우 
    //padStart(2,"0")으로 앞에 "0"을 추가
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")

    clock.innerText=`${hours}:${minutes}:${seconds}`
    //HTML에 clock에 현재 시간 추가1
}

getClock()
//setInterval은 지정한 시간(1000) 후 시작되기 때문에 먼저 한번 실행시켜서 즉시 나오도록 함
setInterval(getClock, 1000)
//1초마다 getClock이 실행되도록 함