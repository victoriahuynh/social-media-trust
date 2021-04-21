import React, { useEffect, useState} from 'react';
import { Badge, Button, Card, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import firebase from '../../firebase';
import './Research.css';
import '../Cards.css';

export default function Research() {
  const db = firebase.firestore();
  const [articles, setArticles] = useState([]);
  const [cards, setCards] = useState([]);
  const [showInsights, setShowInsights] = useState([false]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setArticles([]);
    setShowInsights([]);
    if (query != '') {
      let splitQuery = query.toLowerCase().split(' ');
      for (var i = 0; i < splitQuery.length; i++) {
        splitQuery[i] = splitQuery[i].charAt(0).toUpperCase() + splitQuery[i].substring(1);     
      }
      let parsedQuery = splitQuery.join(' '); 

      const fetchData = async() => {
        db.collection('research').where('tags', 'array-contains', parsedQuery).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setArticles(prevArticles => [...prevArticles, doc])
          });
        });
      }
      fetchData();
    } else {
      const fetchData = async() => {
        db.collection('research').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setArticles(prevArticles => [...prevArticles, doc])
          });
        });
      }
      fetchData();
    }
    console.log('useeffect1called')
  }, [query])

  useEffect(() => {
    let cards = []
    articles.forEach((article, i) => {
      let data = article.data();
      let tags = []
      data.tags.forEach((tag, i) => {
        tags.push(
          <Badge pill>
            {tag}
          </Badge>
        )
      })
      cards.push(
        <Card id={"article_"+article.id}>
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
              <p>{data.abstract}</p>
              { showInsights[i] ? <p>Key Insights: <br/> {data.insights}</p> : null }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {tags}
            <small>
              <a href={data.link}><FontAwesomeIcon icon={faGraduationCap}/>Full Article</a>
              <Button variant="link" onClick={() => { 
                let newArr =  [...showInsights];
                newArr[i] = !newArr[i];
                setShowInsights(newArr);
              }}>
                {showInsights[i] ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
                Key Insights
              </Button>
            </small>
          </Card.Footer>
        </Card>
      )
    })
    if (cards.length > 0) {
      setCards(cards)
    } else { setCards(['no results... or keep typing'])}
    // console.log('useeffect2called')
  }, [articles, showInsights])

  return (
    <div id="Research">
      <h1>Annotated Research</h1>
      <Form>
        <FormControl type="text" placeholder="Search Keywords, Tags, or Articles..." className="mr-sm-2" onChange={e => setQuery(e.target.value)}/>
      </Form>
      {cards}
    </div>
  )
}