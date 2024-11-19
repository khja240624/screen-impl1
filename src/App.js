/* 조건

1. 소스코드는 App.js파일에 모두 작성하여 메인페이지에서 바로 나타난다.
2. css는 default.css파일로 App.js파일과 같은 경로에 파일이 존재한다.
3. 기본적으로 2개의 할 일이 처음 화면에 나타난다.
4. 할 일을 입력한 후 등록하면 새로등록한 할 일이 마지막에 추가되며, 입력한 input은 모두 초기화 된다.

*/

import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([
    { title : "React 개념정리", isComplete : false },
    { title : "도서관에 책 반납하기", isComplete : true }
  ]);

  const [inputTodo, setInputTodo] = useState("");

  const changeTodo = (e) => {
    setInputTodo(e.target.value);
  }

  const addTodo = () => {
    setTodoList([...todoList, { title: inputTodo , isComplete : false }]);
  }

  return (
    <div class="container">
      <table border={1}>
        <thead>
          <tr>
            <th>할 일 내용</th>
            <th>완료 여부</th>
          </tr>
        </thead>

        <tbody>
          {todoList.map(el => {
              <tr>
                <td>{el.title}</td>
                <td>{el.isComplete ? "완료" : "미완료"}</td>
              </tr>
          })}
        </tbody>
      </table>

      <div className='inputDiv'>
        <input type='text' value={inputValue} onChange={changeTodo}></input>
        <button onClick={addTodo}>할 일 등록</button>
      </div>
    </div>
  );
}

export default App;
