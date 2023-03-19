import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'reactstrap'

import ProductCard from '../product-card/ProductCard'
import {twelveMonth, threeAge, tenAge, fifteenAge, teen} from '../../assets/fake-data/product'
import './age-pack.css'
const AgePack = () => {

const  [filter, setFilter] = useState('1-3-AGE')
const [product, setProducts] = useState(threeAge)
useEffect(()=>{
    if(filter === '0-12-MONTH') {
        setProducts(twelveMonth)
    }
    if(filter === '1-3-AGE') {
        setProducts(threeAge)
    }
    if(filter === '4-10-AGE') {
        setProducts(tenAge)
    }
    if(filter === '10-15-AGE') {
        setProducts(fifteenAge)
    }
    if(filter === '16+-AGE') {
        setProducts(teen)
    }
},[filter])
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-4'><h3 className='age__title'>Age Kategory</h3>
                </Col>
                <Col lg='12' className='text-center mb-5'>
                    <button className={`filter-btn ${filter === '0-12-MONTH' ? 'active__btn' : ''} `} 
                    onClick={()=> setFilter('0-12-MONTH')}
                    >
                        0-12 Month
                    </button>
                    <button className={`filter-btn ${filter === '1-3-AGE' ? 'active__btn' : ''} `} 
                    onClick={()=> setFilter('1-3-AGE')}
                    >1-3 Age
                    </button>
                    <button className={`filter-btn ${filter === '4-10-AGE' ? 'active__btn' : ''} `} 
                    onClick={()=> setFilter('4-10-AGE')}>4-10 Age
                    </button>
                    <button className={`filter-btn ${filter === '10-15-AGE' ? 'active__btn' : ''} `} 
                    onClick={()=> setFilter('10-15-AGE')}>10-15 Age
                    </button>
                    <button className={`filter-btn ${filter === '16+-AGE' ? 'active__btn' : ''} `} 
                    onClick={()=> setFilter('16+-AGE')}>16+ Age
                    </button>
                </Col>

                {
                    product.map(item=>(
                        <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                            {" "}
                            
                         <ProductCard item={item}/>
                        </Col>
                        
                    ))}
            </Row>
        </Container>
    </section>
  );
};

export default AgePack;