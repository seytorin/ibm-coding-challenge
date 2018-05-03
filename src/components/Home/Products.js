import React, { Component } from 'react';

const API = 'C:\Users\Kimdenning\Documents\ibm-coding-challenge\src\components\Files\product.json';
const DEFAULT_QUERY = 'redux';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  
}




export default Products;