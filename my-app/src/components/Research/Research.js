import React, { useEffect, useState} from 'react';
import { Button, Card, Form, FormControl } from 'react-bootstrap';
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
    if (query !== '') {
      let splitQuery = query.toLowerCase().split(' ');
      for (var i = 0; i < splitQuery.length; i++) {
        if (splitQuery[i] === 'in') {
          continue //LMFAO
        }
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
    // console.log('useeffect1called')
  }, [query, db])

  useEffect(() => {
    let cards = []
    articles.forEach((article, i) => {
      let data = article.data();
      let tags = []
      data.tags.forEach((tag, i) => {
        tags.push(
          <Button className="badge badge-pill" value={tag} onClick={e => setQuery(e.target.value)}>
            {tag}
          </Button>
        )
      })
      cards.push(
        <Card id={"article_"+article.id}>
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
              <p>{data.abstract}</p>
              <br/>
              <p>Authors: {data.authors}</p>
              { showInsights[i]
                ?
                <p>
                  <br/> Key Insights:
                  <ul>
                    {data.insights.map((insight, i) => {
                      return (<li>{insight}</li>)
                    })}
                  </ul>
                </p>
                :
                null }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {tags}
            <small>
              <a href={data.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGraduationCap}/>Full Article</a>
              <Button variant="link" className="insight-button" onClick={() => { 
                let newShowInsights =  [...showInsights];
                newShowInsights[i] = !newShowInsights[i];
                setShowInsights(newShowInsights);
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
    } else {
      setCards(['no results... or type the entire tag'])
    }
    // console.log('useeffect2called')
  }, [articles, showInsights, db])

  return (
    <div id="Research">
      <h1>Annotated Research</h1>
      <p>Currently showing: {query} <Button onClick={e => setQuery('')}>clear query</Button></p>
      <Form>
        <FormControl 
          type="text" 
          placeholder="Search Tags..." 
          className="mr-sm-2" 
          onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          onChange={e => setQuery(e.target.value)}/>
      </Form>
      {cards}
    </div>
  )
}