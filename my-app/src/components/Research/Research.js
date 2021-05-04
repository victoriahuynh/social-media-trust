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
  // const [query, setQuery] = useState('');
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    setArticles([]);
    setShowInsights([]);
    if (queries[0] === "") { setQueries([]) }

    // if (query !== '') {
    //   let splitQuery = query.toLowerCase().split(' ');
    //   for (var i = 0; i < splitQuery.length; i++) {
    //     if (splitQuery[i] == 'in') {
    //       continue //LMFAO
    //     }
    //     splitQuery[i] = splitQuery[i].charAt(0).toUpperCase() + splitQuery[i].substring(1);     
    //   }
    //   let parsedQuery = splitQuery.join(' '); 

    //   const fetchData = async() => {
    //     db.collection('research').where('tags', 'array-contains', parsedQuery).get().then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //         setArticles(prevArticles => [...prevArticles, doc])
    //       });
    //     });
    //   }
    
    if (queries.length !== 0) {
      console.log(queries.length)
      console.log(queries[0])
      let parsedQueries = [];
      queries.forEach((query) => {
        let splitQuery = query.toLowerCase().split(' ');
        for (var i = 0; i < splitQuery.length; i++) {
          splitQuery[i] = splitQuery[i].charAt(0).toUpperCase() + splitQuery[i].substring(1);     
        }
        parsedQueries.push(splitQuery.join(' '));
      })
      const fetchData = async() => {
        parsedQueries.forEach((parsedQuery) => {
          db.collection('research').where('tags', 'array-contains', parsedQuery).get().then((querySnapshot) => {
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
    // console.log('useeffect1called')
  }, [queries, db])

  useEffect(() => {
    let cards = []
    let filteredArticles = new Set(articles); //this is not filtering
    // console.log(filteredArticles)
    filteredArticles.forEach((article, i) => {
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
        <Card id={"article_"+article.id}>
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
              <p>{data.abstract}</p>
              { showInsights[i]
                ?
                <p>
                  <br/> Key Insights: <br/>
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

  let handleCheckbox = (e) => {
    // console.log(e.target.value)
    if (e.target.checked) {
      setQueries(prevQueries => [...prevQueries, e.target.value])
    } else {
      var newQueries = [...queries];
      var index = newQueries.indexOf(e.target.value)
      if (index !== -1) {
        newQueries.splice(index, 1);
        setQueries(newQueries)
      }
    }
    // console.log(queries)
  }

  return (
    <div id="Research">
      <h1>Annotated Research</h1>
      <p>Currently showing: {queries} <Button onClick={e => setQueries([])}>clear query</Button></p>
      <input type="checkbox" id="Trust" value="Trust" onChange={handleCheckbox}/><label for="Trust">Trust</label>
      <input type="checkbox" id="Political" value="Political" onChange={handleCheckbox}/><label for="Political">Political</label>
      <Form>
        <FormControl 
          type="text" 
          placeholder="Search Keywords, Tags, or Articles..." 
          className="mr-sm-2" 
          onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          onChange={e => setQueries([e.target.value])}/>
      </Form>
      {cards}
    </div>
  )
}