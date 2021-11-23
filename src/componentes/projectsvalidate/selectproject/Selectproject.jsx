import React from 'react'
import { Card, ListGroup} from 'react-bootstrap'
import './Selectproject.css'



const Selectproject = () => {
  return (
    <>
    <div >
  <Card style={{ width: '18rem' }} className='container-listcads col-md-6'>
   <ListGroup className='cards'>
    <ListGroup.Item bg="light">
    <Card.Body >
    <Card.Title>Chat Empresarial</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Pedro Santos</Card.Subtitle>
    </Card.Body>
    </ListGroup.Item>
    <ListGroup.Item action href="#link2" disabled>
      Link 2
    </ListGroup.Item>
    <ListGroup.Item>
      This one is a button
    </ListGroup.Item>
   </ListGroup>
</Card>
</div>
    </>
  )
}

export default Selectproject
