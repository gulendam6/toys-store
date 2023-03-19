import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './choose-us.css';
import aytnImg from '../../assets/images/aytn.png';


const ChooseUs = () => {
  return (
 <section>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <img src={aytnImg} alt="" className='aytn w-50'/>
            </Col>

            <Col lg='6' md='6'>
                <div className="choose__content" data-aos="fade-down-right">
                    <h4>Who we are ?</h4>
                    <h2>Take a look at the benefits we offer you</h2>
                    <p>Salam. Mənim adım Aytendir və mən oyuncaqları çox sevirəm.Buna görə də
                        oyuncaq mağazası açmaq qərarına gəldim.
                        </p>
                </div>

                <div className="features mt-4">
                    <div className="feature1 d-flex align-items-center gap-5">
                        <div className="single__feature">
                            <span>
                                <i class="ri-truck-line"></i></span>
                            <h6>Free Home Delivery</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div className="single__feature">
                            <span className='feature__icon-two'>
                             <i class="ri-money-dollar-circle-line"></i></span>
                            <h6>Return & Refund</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="feature1 mt-3 d-flex align-items-center gap-5">
                        <div className="single__feature">
                            <span className='feature__icon-3'>
                             <i class="ri-secure-payment-line"></i></span>
                            <h6>Secure Payment</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div className="single__feature">
                            <span className='feature__icon-4'>
                             <i class="ri-24-hours-line"></i></span>
                            <h6>24/7 Hours Support</h6>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>

  



 );
};

export default ChooseUs;