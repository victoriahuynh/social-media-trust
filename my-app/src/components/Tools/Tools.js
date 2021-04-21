import React, { useEffect, useState} from 'react';
import { Badge, Card, CardDeck, Col, Form, FormControl } from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import firebase from '../../firebase';
import './Tools.css';

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
    let rows = [];
    let cols = [];
    tools.forEach((tool, i) => {
      let urlPath = "/info/" + i //change this
      let tags = []
      tool.tags.forEach((tag, i) => {
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
              <Card.Title>{tool.title}</Card.Title>
              <Card.Text>
                {tool.description_short}
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
    setCards(rows)
    console.log('useeffect2called')
  }, [tools])

  return (
    <div id="Tools">
      <h1>UX Design Tool Kits</h1>
      <Form>
        <FormControl type="text" placeholder="Search Keywords, Tags, or Articles..." className="mr-sm-2" />
      </Form>
      {cards}
    </div>
  )
}