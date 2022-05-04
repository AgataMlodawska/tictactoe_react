import React, {useState} from "react";
import {calculateWinner} from "../helper"
import Board from "./Board";
import StopWatch from './StopWatch.js';
import HomeButton from "./HomeButton";


const Game = ()=>{
    const [history, setHistory]=useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber]=useState(0)
    const [xIsNext, setXisNext]=useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const x0 =xIsNext ? "X" : "0"
    const jumpTo = (step) =>{
        setStepNumber(step)
        setXisNext(step % 2===0)
    }
    const handleClick =(i)=>{
        const historyPoint =history.slice(0,stepNumber + 1)
        const current =historyPoint[stepNumber];
        const squares=[...current]
        if (winner || squares[i]) return
        squares[i]=x0;
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length)
        setXisNext(!xIsNext)
    }
    
    const renderMoves =() => history.map((_step, move)=>{
    const destination=move?`Go to move #${move}`: "Go to start"
    return(
        <li key={move}>
        <button onClick ={()=>jumpTo(move)}>{destination}</button>
        </li>
    )})
    
    return(
        <>
      <HomeButton />
        <StopWatch />
        <Board squares={history[stepNumber]} onClick={handleClick}/>
        <div className="info-wrapper">
        <div>
        <h3>{winner ? "Winner: "+ winner: "Next Player: " + x0 }</h3>
        <h3>History</h3>
        {renderMoves()}
        </div>
        </div>
        </>

    )
    
}
export default Game