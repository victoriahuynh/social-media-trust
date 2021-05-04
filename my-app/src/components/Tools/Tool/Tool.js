import React, { useEffect, useState} from 'react';
import { Badge, Card } from 'react-bootstrap';
import firebase from '../../../firebase';
import './Tool.css';
import '../../Cards.css';

export default function Tool() {
  const db = firebase.firestore();

  const [tool, setTool] = useState({
    title: '',
    description: '',
    image: '',
    sources: [],
    tags: []
  });

  useEffect(() => {
    let toolID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

    const fetchData = async() => {
      db.collection('tools').doc(toolID).get().then((doc) => {
        setTool(doc.data());
      });
    }
    fetchData();
  }, [db])

  return (
    <div id="Tool">
      <Card>
        <Card.Body>
          <Card.Title>{tool.title}</Card.Title>
          <Card.Text>
            <img src={tool.image} alt="placeholder" />
            {tool.description.split("\\n").map((paragraph, i) => {
              return (<p>{paragraph}</p>)
            })}
            <small>
              Sources:
              <br/>
              {tool.sources.map((source, i) => {
                return (<li>{source}</li>)
              })}
            </small>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {tool.tags.map((tag, i) => {
            return (<Badge pill>{tag}</Badge>)
          })}
        </Card.Footer>
      </Card>
    </div>
  )
}