
export default function Progress({points,maxquestions,index,numofQuestions,answer}) {
  return (
    <header className="progress">
        <progress max={numofQuestions} value={index+Number(answer!=null)}></progress>
        <p>
            Question <strong>{index +1}</strong>/<strong>{numofQuestions}</strong>
        </p>
        <p>
            <strong>{points}</strong>/{maxquestions}
        </p>

    </header>
  )
}
