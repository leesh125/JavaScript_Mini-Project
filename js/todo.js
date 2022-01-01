const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    console.log(toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id); // 삭제하기전 해당하는 li의 id(date.now) 얻기
    li.remove();
    // filter 함수 적용
    // 삭제한 li의 id가 filter 함수를 통해 반복문을 돌아서
    // todo 배열에 있는 obj들의 id롸 li.id(삭제버튼이 눌린 id)를 비교
    // (같지않으면 true => 값을 남김, 같으면 false -> 그값을 삭제(todos 배열을 재정의)
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  // parseInt의 이유는 li.id는 string이기때문
    // DOM의 id는 문자열이라고 나와 있었습니다. 즉 우리가 newTodo.id로 number를 넣어주었어도, DOM에선 string으로 형변환
    saveToDos(); // 다시 저장함
}

function paintToDo(newTodo){ // newTodo는 이제 객체이다
    const li = document.createElement("li");
    li.id = newTodo.id; // li의 id를 설정한 object의 id(date.now())로 설정한다.
    const span = document.createElement("span");
    span.innerText = newTodo.text;  // newtodo 객체의 text를 가져옴
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    
    const newTodo = todoInput.value;  // 입력한 문자열을 저장
    todoInput.value = ""; 
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);  // newtodoobj객체를 배열에 값으로
    paintToDo(newTodoObj);   // painttodo함수의 전달인수를 객체로 전달(이전에는 text였음)
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

// JSON.stringify()로 배열형태의 문자열인 toDos를 가지고온다 ( "["a","b"]" ")
const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null) {
    // 배열형태의 문자열을 parse() 를 통해 배열로 만들어준다
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

// filter 함수는 새로운 배열을 리턴(적용한 배열은 그대로 남아있음)
// filter -> 선택옵션