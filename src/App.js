import React from 'react'
import Cart from './Cart'

import apple from './apple.jpg'
import iphone from './iphone.jpg'
import watch from './watch.jpg'
import NavBar from './NavBar'


class  App extends React.Component {

  constructor(){
    super();
    this.state={
       products:[
           {
           price: 99,
           title: "watch",
           qty:1,
           img:watch,
           id:1
           },
           {
            price: 999,
            title: "mobilePhone",
            qty:10,
            img:iphone,
            id:2

            },
            {
                price: 888,
                title: "laptop",
                qty:4,
                img:apple,
                id:3

                }
       ]
    }
}

handleDecreaseQuantity=(product)=>{
  const {products}=this.state
  const index=products.indexOf(product);

     if(products[index].qty===0){
         return;
     }

     products[index].qty-=1;
     this.setState({
         products:products
     })
}

handleIncreaseQuantity=(product)=>{
  const {products} =this.state;
  const index=products.indexOf(product);

  products[index].qty+=1;

  this.setState({
      products:products
  })
}

handleDeleteProduct=(id)=>{
  const {products} =this.state

  const items=products.filter((item)=> item.id!==id)

  this.setState({
      products:items
  })

   console.log("del me")


}

 getCartCount=()=>{
       const {products}= this.state
       let count=0;

       products.forEach((product)=>{
         count+=product.qty
       })
   return count;
 }

 getCartTotal=()=>{
   const{products} =this.state
   let cartTotal=0;
 
   products.map((product)=>{
     cartTotal+=cartTotal+ product.qty*product.price
   })
 
   return cartTotal;
 }

  render(){
    const{products}=this.state;
  return (
    <div className="App">
     <NavBar  count={this.getCartCount()}/>
     <Cart
          products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}/>
        <div style={{fontSize:20,padding:10}}> TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}

}

export default App;
