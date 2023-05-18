import React from 'react'
import { Container, Col, Carousel} from 'react-bootstrap';
import ephotech1 from '../assets/ephotech_1.jpg'
import ephotech2 from '../assets/ephotech_2.jpg'
import ephotech3 from '../assets/ephotech_3.jpg'
import '../section.css'


const EPHOTECH = () => {
  return (
    <div id='EPHOTECH' className='root'>
         <Container id='EPHOTECH' className='d-flex flex-column ground'>
            <h1 className='latdas-title'>EPHOTECH</h1>
            <p className='latdas-description'>
                EPHOTECH adalah lomba yang diadakan oleh G-Tech. EPHOTECH diadakan sekali setiap tahun.
                EPHOTECH berisi lomba - lomba yang mengasah ilmu pengetahuan anggotanya mengenai teknologi dan
                menambah semangat saing. Diharapkan dengan adanya EPHOTECH dapat meningkatkan daya saing dan pengetahuan
                dari pesertanya.
            </p>

            <h2 className='latdas-subtitle'>Foto - Foto EPHOTECH</h2>
            <Col md="15" className='carousel-cont'>
                <Carousel w-20vh h-20vh className='carousel-slide'>
                    <Carousel.Item className='carousel-item'>
                        <img
                        className="d-block w-50 h-40 image"
                        src={ephotech1}
                        alt="First slide"
                        />
                        <Carousel.Caption className='carousel-caption'>
                        <h3>Awal EPHOTECH</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <img
                        className="d-block w-50 h-40 image"
                        src={ephotech2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Pertengahan EPHOTECH</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <img
                        className="d-block w-50 h-40 image"
                        src={ephotech3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Akhir EPHOTECH</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Container>
    </div>
  )
}

export default EPHOTECH