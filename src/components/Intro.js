import { Row, Container, Col, Button, Card} from 'react-bootstrap';
import React from 'react'
import imgLatdas from '../assets/imgLatdas.jpg'
import ephotech from '../assets/ephotech.jpg'
import gTechParty from '../assets/g-tech-party.jpg'


const Intro = () => {
  return (
    <div className='border intro'>
          <Container className='text-white d-flex justify-content-center align-items-center border'>
            <Row>
              <Col>
                <h1>Portal Berita G-Tech</h1>
              </Col>
            </Row>
          </Container>
          <Container className='d-flex mt-5 menu-cont'>
              <Card style={{ width: '18rem', backgroundColor: '#282c34', height: "60vh"}}>
                  <Card.Img className="card-image" src={imgLatdas} style={{height: "40vh"}}/>
                  <Card.Body>
                    <Card.Title style={{color: 'white'}}>LATDAS</Card.Title>
                    <Button variant="success"><a href='#LATDAS' className='intro-link'>Lihat Berita</a></Button>
                  </Card.Body>
              </Card>

              <Card style={{ width: '18rem', backgroundColor: '#282c34', height: "60vh"}}>
                  <Card.Img className="card-image" variant="top" src={ephotech} style={{height: "40vh"}} />
                  <Card.Body>
                    <Card.Title style={{color: 'white'}}>EPHOTECH</Card.Title>
                    <Button variant="success"><a href='#EPHOTECH' className='intro-link'>Lihat Berita</a></Button>
                  </Card.Body>
              </Card>

              <Card style={{ width: '18rem', backgroundColor: '#282c34', height: "60vh"}}>
                <Card.Img className="card-image" variant="top" src={gTechParty} style={{height: "40vh"}}/>
                <Card.Body>
                    <Card.Title style={{color: 'white'}}>G-Tech Party</Card.Title>
                    <Button variant="success"><a href='#PARTY' className='intro-link'>Lihat Berita</a></Button>
                </Card.Body>
              </Card>
          </Container>
    </div>
  )
}

export default Intro