import React from 'react'
import { Container, Col, Carousel} from 'react-bootstrap';
import latdas1 from '../assets/latdas-1.jpg'
import latdas2 from '../assets/latdas-2.jpg'
import latdas3 from '../assets/latdas-3.jpg'
import '../section.css'

const LATDAS = () => {
  return (
    <div className='root'>
        <Container id='LATDAS' className='d-flex flex-column ground'>
            <h1 className='latdas-title'>LATDAS</h1>
            <p className='latdas-description'>
                LATDAS adalah kegiatan untuk menyeleksi anggota baru G-Tech. Latdas diadakan sekali setiap tahun.
                LATDAS berisi kegiatan - kegiatan yang mengasah ilmu pengetahuan anggotanya mengenai teknologi dan
                menambah kebersamaan. Diharapkan dengan adanya LATDAS dapat meningkatkan kebersamaan dan pengetahuan
                dari anggotanya.
            </p>

            <h2 className='latdas-subtitle'>Foto - Foto LATDAS</h2>
            <Col md="15" className='carousel-cont'>
                <Carousel w-20vh h-20vh className='carousel-slide'>
                    <Carousel.Item className='carousel-item'>
                        <img
                        className="d-block w-50 h-40 image"
                        src={latdas1}
                        alt="First slide"
                        />
                        <Carousel.Caption className='carousel-caption'>
                        <h3>Awal Latdas</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <img
                        className="d-block w-50 h-40 image"
                        src={latdas2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Pertengahan Latdas</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <img
                        className="d-block w-50 h-40 image"
                        src={latdas3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Akhir Latdas</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Container>
    </div>
  )
}

export default LATDAS