import React, { useEffect, useState} from 'react';
import { Badge, Button, Card, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import firebase from '../../firebase';
import './Research.css';


export default function Research() {
  const db = firebase.firestore();
  const [articles, setArticles] = useState([]);
  const [cards, setCards] = useState([]);
  const [showInsights, setShowInsights] = useState(false);

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
    let cards = []
    articles.forEach((article, i) => {
      let tags = []
      article.tags.forEach((tag, i) => {
        tags.push(
          <Badge pill>
            {tag}
          </Badge>
        )
      })

      cards.push(
        <Card>
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
              <p>{article.abstract}</p>
              { showInsights ? null : <p>{article.insights}</p> }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {tags}
            <small><a href={article.link}><FontAwesomeIcon icon={faGraduationCap}/>Full Article</a></small>
            <small><Button onClick={() => setShowInsights(true)}><FontAwesomeIcon icon={faEye}/><FontAwesomeIcon icon={faEyeSlash}/>Key Insights</Button></small>
          </Card.Footer>
        </Card>
      )
    })
    setCards(cards)
    console.log('useeffect2called')
  }, [articles])
  
  return (
    <div id="Research">
      <h1>Annotated Research</h1>
      <Form>
        <FormControl type="text" placeholder="Search Keywords, Tags, or Articles..." className="mr-sm-2" />
      </Form>
      {cards}
    </div>
  )
}