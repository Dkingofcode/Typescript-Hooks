// useState
// useRef
//  useReducer

interface Todo {
   id: number;
   text: string; 
}


import { useState, useRef, useReducer } from "react";

interface AddItemProps{
    handleClick: (text: Todo['text']) => void;
}

function AddItem({ handleClick}: AddItemProps){
    const inputRef = useRef<HTMLInputElement>(null);
    return <div className="add-Todo">
          <input ref={inputRef} placeholder="what do you love to do?" />
          <button onClick={() => {
           if(inputRef.current && inputRef.current.value){
            handleClick(inputRef.current.value)
            inputRef.current.value=""
           }
          }}>
           Add todo
          </button>
    </div>
}

const initialState = {count: 0}

enum ACTION_TYPE{
   increment = 'increment',
   decrement = 'decrement' 
}

function reducer(state: typeof initialState, action: {type: ACTION_TYPE}){
    switch(action.type){
       case ACTION_TYPE.increment:
         return {count: state.count + 1} 
        case ACTION_TYPE.decrement:
            return { count: state.count - 1} 
        default:
            throw new Error("what have you done?");   
        }
}


function App() {
  const [item, setItem] = useState<Todo[]>([]);

  const [state, dispatch] = useReducer(reducer, initialState)

    function handleClick(text: Todo['text']){
        setItem([...item, {text, id: setItem.length + 1}])
    }



  function remove(id: Todo['id']){
    console.log(id);
    return setItem([...item.filter((item) => item.id !== id)])
  }

  return (
    <div className="App">
        <h1>You have {item.length} todos</h1>
     <ul>
        {item.map((item) => {
            return (
               <li>
                   <span>{item.text}</span>
                   <button onClick={() => remove(item.id)}>x</button>
               </li> 
            );
        })}
     </ul>
     <AddItem handleClick={handleClick} />
     Count {state.count}
     <button onClick={() => dispatch({ type: ACTION_TYPE.decrement })}>
        -
     </button>
     <button onClick={() => dispatch({ type: ACTION_TYPE.increment })}>
        +
      </button> 
    </div>
  )
}


export default App;


























