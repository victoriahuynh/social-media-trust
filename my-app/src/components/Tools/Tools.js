import React, { useEffect, useState} from 'react';
import { Button, Card, CardDeck, Col, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import firebase from '../../firebase';
import { Typeahead } from 'react-bootstrap-typeahead'; 
import './Tools.css';
import '../Cards.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

export default function Tools() {
  const db = firebase.firestore();
  const [tools, setTools] = useState([]);
  const [cards, setCards] = useState([]);
  const [queries, setQueries] = useState([]);
  const [uniqueTags, setUniqueTags] = useState([]);

  // generate tags on page load
  useEffect(()=> {
    const fetchData = async() => {
      db.collection('tools').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUniqueTags(prevTags => [...new Set([...prevTags,...doc.data().tags].sort())]);
        });
      });
    }
    fetchData();
  }, [db])

  // grab tools
  useEffect(() => {
    setTools([]);
    if (queries[0] === "") { setQueries([]) }

    if (queries.length !== 0) {
      const fetchData = async() => {
        queries.forEach((query) => {
          db.collection('tools').where('tags', 'array-contains', query).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              setTools(prevTools => [...prevTools, doc])
            });
          });
        })
      }
      fetchData();
    } else {
      const fetchData = async() => {
        db.collection('tools').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setTools(prevTools => [...prevTools, doc])
          });
        });
      }
      fetchData();
    }
  }, [queries, db])

  // display tools
  useEffect(() => {
    let rows = [];
    let cols = [];
    tools.forEach((tool, i) => {
      let data = tool.data();
      let urlPath = "/tool/" + tool.id;
      let tags = [];
      data.tags.forEach((tag, i) => {
        tags.push(
          <Button className="badge badge-pill" value={tag} onClick={e => setQueries([e.target.value])}>
          {tag}
          </Button>
        )
      })
      cols.push(
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
                {data.description_short}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {tags}
              <small><Link to={urlPath}><FontAwesomeIcon icon={faGraduationCap}/>Learn More</Link></small>
            </Card.Footer>
          </Card>
        </Col>
      );
      if (i % 3 === 2 || i === tools.length - 1) {
        rows.push(<CardDeck>{cols}</CardDeck>);
        cols = [];
      }
    })
    if (rows.length > 0) {
      setCards(rows)
    } else {
      setCards(['no results... or type the entire tag'])
    }
  }, [tools])

  return (
    <div id="Tools">
      <h1>UX Design Tool Kits</h1>
      <Typeahead
        id="basic-typeahead-multiple"
        multiple
        placeholder="Search Tags..."
        onChange={(selected) => { setQueries(selected);}}
        options={uniqueTags}
      />
      <p>Currently showing: {queries} <Button onClick={e => setQueries([])}>clear query</Button></p>
      {cards}
    </div>
  )
}