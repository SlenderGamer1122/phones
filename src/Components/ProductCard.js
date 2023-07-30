import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Image from './Image';
import Name from './Name';
import DescriptIon from './DescriptIon';
import Price from './Price';



const ProductCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Image />
      <Card.Body>
        <Card.Title><Name /></Card.Title>
        <Card.Text>
          <DescriptIon />
        </Card.Text>
        <Button variant="primary"><Price /></Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;