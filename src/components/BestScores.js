import React, { useState} from 'react';
import Table from 'react-bootstrap/Table'
import HomeButton from "./HomeButton";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form"
import './BestScores.css'
function BestScores() {
  let bestscores = [
    {
      name: 'Agata',
      score: 20,
    },
    {
name: "Tx",
score: 30
    }

  ]
  const [name, setName] = useState('')
  const [score, setScore]= useState('')
  const [copybestscores, setCopyBestScores] = useState(bestscores)
  let player = { name: name, score: score }
  let datascores = copybestscores.map(function (player, index) {

    return <tr>
    <th>{index+1}</th>
      <th>{player.name}</th>
      <th>{player.score}</th>
    </tr>

  })
  function newplayer (name, score) {
    copybestscores.push(player);
    setCopyBestScores(copybestscores);
    setName("");
    setScore("")
  }
  return (
    <div>
    <HomeButton />
    <Table>
    <thead></thead>
    <tr> 
    <th>#</th>
    <th>Name</th>
    <th>Time</th>
    </tr>
    <tbody>
    </tbody>
          {datascores}
          </Table>
          <Form>
          <input className= "input" onChange={event => setName(event.target.value)} placeholder="name" value={name} />
          <input className= "input" onChange={event => setScore(event.target.value)} placeholder="score" value={score} />
          <Button className='Button' onClick={(newplayer)}>Add your score</Button>
          </Form>
 
          </div>
  );
}

export default BestScores;
