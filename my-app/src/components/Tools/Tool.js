import React, { useEffect, useState} from 'react';
import { Card } from 'react-bootstrap';
import firebase from '../../firebase';

export default function Tool() {
  const db = firebase.firestore();
  const [tool, setTool] = useState({});

  useEffect(() => {
    const toolID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

    const fetchData = async() => {
      db.collection('tools').doc(toolID).get().then((doc) => {
        setTool(doc.data());
      });
    }
    fetchData();

    console.log(tool);
  }, [])

  return(
    <div>
      <p>add back button</p>
      <Card>
        <Card.Body>
          <Card.Title>{tool.title}</Card.Title>
          <Card.Text>
            <p>{tool.description}</p>
            <p>{tool.tags}</p>
            <p>{tool.sources}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}