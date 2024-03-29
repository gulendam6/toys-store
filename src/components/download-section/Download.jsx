import React from 'react'
import './download.css'

import appImg from  '../..//assets/images/cow3.png'

import { Container, Row, Col} from 'reactstrap'

const Download = () => {
  return (
    <section>
        <Container className="app__container">
            <Row>
                <Col lg='6' md='6'>
                    <div className="app__img">
                        <img src={appImg} alt="" />
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="app__content">
                        <h5>Download our app</h5>
                        <h2 className='mb-4'>Never Feel Sad! Download Our Mobile App Order Interesting Toy</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam fuga placeat dolore hic beatae vero non facilis numquam illum?</p>

                        <div className="app__btns d-flex align-items-center gap-5 mt-4">
                            <button className="btn__apple d-flex align-items-center gap-3">
                            <i class="ri-apple-line"></i>Apple Store<a href="#"></a>
                            </button>

                            <button className="btn__google d-flex align-items-center gap-3">
                            <i class="ri-google-play-line"></i>Google Play<a href="#"></a>
                            </button>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Download