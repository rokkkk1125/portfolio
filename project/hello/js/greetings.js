const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

//const link = document.querySelector("a")

function onLoginSubmit(event){
    event.preventDefault()//브라우저 기본동작(새로고침) 못하게 정지
    loginForm.classList.add(HIDDEN_CLASSNAME)//로그인폼에 hidden 추가
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY,username)//username을 localStorage에 저장
    paintGreetings(username)
}

function paintGreetings(username){
    greeting.innerText = `Hello! ${username}`//greeting(저장된 username)에 text추가
    greeting.classList.remove(HIDDEN_CLASSNAME)//greeting에 hidden 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

console.log(savedUsername)

if(savedUsername === null){//저장된 username이 없다면
    loginForm.classList.remove(HIDDEN_CLASSNAME)//hidden제거
    loginForm.addEventListener("submit",onLoginSubmit)//submit이 even되면 해당 함수 실행

}else{
    paintGreetings(savedUsername)//저장된 username이 없다면 해당 함수 실행
}

//form 태그 안 input type="submit"은 실행 시 기본적으로 페이지를 새로고침한다.