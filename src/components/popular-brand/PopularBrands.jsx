import React from 'react';
import { Container,Row,Col} from "reactstrap";
import { popularBrandToy } from '../../assets/fake-data/product';
import ProductCard from "../product-card/ProductCard";
import './popular-brand.css'

const PopularBrands = () => {
    return (
  <section className='pt-0'>
       <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <h2 className='popular__brand-title'>Best Selling Toys</h2>
            </Col>

            {popularBrandToy.map((item)=> (
                <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                  <ProductCard item={item}/>
                </Col>
              ))}
        </Row>
       </Container>
  </section>

    ); 
};

export default PopularBrands;