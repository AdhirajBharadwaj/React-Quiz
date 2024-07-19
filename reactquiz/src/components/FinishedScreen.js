
export default function FinishedScreen({points,totalPoints}) {
    const perc=(points/totalPoints)*100;
  return (
    <p className="result"> 
        You scored {points} out of {totalPoints}
    </p>
  )
}
