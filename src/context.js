import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider all info for ALL app
//Consumer when we want use the provider info

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };
  handleDetail = () => {
    console.log("Hello from detail");
  };
  addToCart = () => {
    console.log("hello from add to cart");
  };
  render() {
    //Note that value CAN be an object
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
