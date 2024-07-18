import { useEffect, useReducer } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Loader from "./components/Loader"
import Error from "./components/Error"
import StartScreen from "./components/StartScreen"
import Question from "./components/Question"
const initialState={
  questions:[],
  status:"loading",
  index:0,
  answer:null,
  points:0
}
function reducer(state,action)
{
  switch(action.type){
    case 'dataReceived':
      return{
        ...state,
        questions:action.payload,
        status:"ready"
      }
    case 'dataFailed':
      return{
        ...state,status:"error"
      }
    case "start":
      return{
        ...state,status:"active"
      }
      case "newAnswer":
        const question=state.questions.at(state.index)
        return{
          ...state,answer:action.payload,
          points:action.payload===question.correctOption?state.points+1:state.points
        }
      default:
        throw new Error("Action unknown")
  }
}



export default function App() {

  const [{questions,status,index,answer},dispatch]=useReducer(reducer,initialState);
  const numQuestions=questions.length;
  useEffect(function(){
    fetch("http://localhost:8000/questions").then((res)=>
    res.json()).then((data)=>dispatch({type:"dataReceived",payload:data})).catch((err)=>dispatch({type:"dataFailed"}))
  },[])

  return (
   <div className="app">
    <Header/>
    <Main>
      {status==="loading" && <Loader/>}
      {status==="error" && <Error/>}
      {status==="ready" && <StartScreen num={numQuestions} dispatch={dispatch}/>}
      {status==="active" && <Question question={questions[index]} dispatch={dispatch} answer={answer}/>}
      
    </Main>
   </div>
  )
}
