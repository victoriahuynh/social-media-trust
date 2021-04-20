import './Research.css';
import React, { useEffect, useState} from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import firebase from '../../firebase';

export default function Research() {
  const db = firebase.firestore();
  const [articles, setArticles] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      db.collection('research').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setArticles(prevArticles => [...prevArticles, doc.data()])
        });
      });
    }
    fetchData();
    console.log('useeffect1called')
  }, [])

  useEffect(() => {
    setCards([]) //this is so jank
    articles.forEach((article, i) => {
      setCards(prevCards => [...prevCards,
        <CardDeck className="carddeck">
          <Card>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>
                {article.abstract}
                <br/>
                {article.insights}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{article.link}</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      ])
    })
    console.log(cards)
    console.log('useeffect2called')
  }, [articles])

  return (
    <div id="Research">
      <h1>Annotated Research</h1>
      {cards}
    </div>
  )
}