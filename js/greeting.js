const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const bucketList = document.querySelector("#bucketList");
const bucketListDiv = document.querySelector(".bucketList-div");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { // submit 이벤트가 발생할 때 필요한 정보들을 담은 object
    // event.preventDefault(); // 기본 동작을 실행하지 못하게 막기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
    bucketList.classList.remove(HIDDEN_CLASSNAME);
    bucketListDiv.classList.remove(HIDDEN_CLASSNAME);
    todoInput.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);     
} else {
    paintGreetings(savedUsername);
}