import React, { useEffect, useState} from 'react';
import { Badge, Card, CardDeck, Col, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import firebase from '../../firebase';
import './Tools.css';
import '../Cards.css';

export default function Tools() {
  const db = firebase.firestore();
  const [tools, setTools] = useState([]);
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setTools([]);
    if (query != '') {
      let splitQuery = query.toLowerCase().split(' ');
      for (var i = 0; i < splitQuery.length; i++) {
        splitQuery[i] = splitQuery[i].charAt(0).toUpperCase() + splitQuery[i].substring(1);     
      }
      let parsedQuery = splitQuery.join(' '); 

      const fetchData = async() => {
        db.collection('tools').where('tags', 'array-contains', parsedQuery).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setTools(prevTools => [...prevTools, doc])
          });
        });
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
    console.log('useeffect1called')
  }, [query])

  useEffect(() => {
    let rows = [];
    let cols = [];
    tools.forEach((tool, i) => {
      let data = tool.data();
      let urlPath = "/tool/" + tool.id; //change this
      let tags = [];
      data.tags.forEach((tag, i) => {
        tags.push(
          <Badge pill>
            {tag}
          </Badge>
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
      if (i % 3 == 2 || i == tools.length - 1) {
        rows.push(<CardDeck>{cols}</CardDeck>);
        cols = [];
      }
    })
    if (rows.length > 0) {
      setCards(rows)
    } else { setCards(['no results... or keep typing'])}
    console.log('useeffect2called')
  }, [tools])

  return (
    <div id="Tools">
      <h1>UX Design Tool Kits</h1>
      <Form>
        <FormControl type="text" placeholder="Search Keywords, Tags, or Social Media..." className="mr-sm-2" onChange={e => setQuery(e.target.value)}/>
      </Form>
      {cards}
    </div>
  )
}