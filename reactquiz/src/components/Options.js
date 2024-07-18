 

export default function Options({question,dispatch,answer}) {
    const hasA=answer!==null;
    const options=question.options;
  return (
    <div className="options">
        {options.map((option,index)=>
            <button className={`btn btn-option ${index===answer?"answer": ""} ${hasA?index===question.correctOption?"correct":"wrong":""}`} key={option} disabled={hasA} onClick={()=>dispatch({
                type:"newAnswer",payload:index
            })}>{option}</button>
        )}

    </div>
    
  )
}
 