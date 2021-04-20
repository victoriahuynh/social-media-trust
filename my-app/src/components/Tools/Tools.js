import './Tools.css';
import React, { useEffect, useState} from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import firebase from '../../firebase';

export default function Tools() {
  const db = firebase.firestore();
  const [tools, setTools] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      db.collection('tools').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setTools(prevTools => [...prevTools, doc.data()])
        });
      });
    }
    fetchData();
    console.log('useeffect1called')
  }, [])

  useEffect(() => {
    tools.forEach((tool, i) => {
      setCards([]) //this is so jank
      let description = tool.description.replaceAll("\\n", "\n"); //fix line breaks

      setCards(prevCards => [...prevCards,
        <CardDeck className="carddeck">
          <Card>
            <Card.Img variant="top" src={tool.image} alt="placeholder"/>
            <Card.Body>
              <Card.Title>{tool.title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{tool.sources}</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      ])
    })
    console.log('useeffect2called')
  }, [tools])

  return (
    <div id="Tools">
      <h1>UX Design Tool Kits</h1>
      {cards}
    </div>
  )
}