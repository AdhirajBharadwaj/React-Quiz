

export default function StartScreen({num,dispatch}) {
  return (
    <div className="start">
        <h2>Welcome to The React Quiz!</h2>
        <h3>{num} questions to test your React mastery</h3>
        <button className="btn" onClick={()=>dispatch({type:"start"})}>Lets start</button>
    </div>
  )
}
