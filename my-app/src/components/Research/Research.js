import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import firebase from '../../firebase';
import { Typeahead } from 'react-bootstrap-typeahead'; 
import './Research.css';
import '../Cards.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

export default function Research() {
  const db = firebase.firestore();
  const [articles, setArticles] = useState([]);
  const [cards, setCards] = useState([]);
  const [showInsights, setShowInsights] = useState([false]);
  const [queries, setQueries] = useState([]);
  const [uniqueTags, setUniqueTags] = useState([]);

  // generate tags on page load
  useEffect(()=> {
    const fetchData = async() => {
      db.collection('research').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUniqueTags(prevTags => [...new Set([...prevTags,...doc.data().tags].sort())]);
        });
      });
    }
    fetchData();
  }, [db])

  // grab articles
  useEffect(() => {
    setArticles([]);
    setShowInsights([]);
    if (queries[0] === "") { setQueries([]) }

    console.log(queries)
    if (queries.length !== 0) {
      const fetchData = async() => {
        queries.forEach((query) => {
          db.collection('research').where('tags', 'array-contains', query).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              setArticles(prevArticles => [...prevArticles, doc])
            });
          });
        })
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
  }, [queries, db])

  // display articles
  useEffect(() => {
    let cards = []
    articles.forEach((article, i) => {
      let data = article.data();
      let tags = []
      data.tags.forEach((tag, i) => {
        tags.push(
          <Button className="badge badge-pill" value={tag} onClick={e => setQueries([e.target.value])}>
            {tag}
          </Button>
        )
      })
      cards.push(
        <Card key={article.id}>
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
      setCards(['fetching results'])
    }
  }, [articles, showInsights])

  return (
    <div id="Research">
      <h1>Annotated Research</h1>
      <Typeahead
        id="basic-typeahead-multiple"
        multiple
        placeholder="Search Tags..."
        onChange={(selected) => { setQueries(selected);}}
        options={uniqueTags}
        selected={queries}
      />
      {cards}
    </div>
  )
}