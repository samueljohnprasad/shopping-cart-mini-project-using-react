import React from 'react'
import Cart from './Cart'

import apple from './apple.jpg'
import iphone from './iphone.jpg'
import watch from './watch.jpg'
import NavBar from './NavBar'
import firebase from 'firebase'
import 'firebase/firestore'


class  App extends React.Component {

  constructor(){
    super();
    this.state={
       products:[

        //we ll fetch the firebase
          //  {
          //  price: 99,
          //  title: "watch",
          //  qty:1,
          //  img:watch,
          //  id:1
          //  },
          //  {
          //   price: 999,
          //   title: "mobilePhone",
          //   qty:10,
          //   img:iphone,
          //   id:2

          //   },
          //   {
          //       price: 888,
          //       title: "laptop",
          //       qty:4,
          //       img:apple,
          //       id:3

          //       }
       ],
       loading:true
    }

    this.db=firebase.firestore();
}

handleDecreaseQuantity=(product)=>{
  const {products}=this.state
  const index=products.indexOf(product);

     if(products[index].qty===0){
         return;
     }

    //  products[index].qty-=1;
    //  this.setState({
    //      products:products
    //  })

    const docRef=this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty:products[index].qty-1
    }).then(()=>{
     console.log("update successful")
    })
    .catch((error)=>{
         console.log("Error",error)
    })

   

     
}

handleIncreaseQuantity=(product)=>{
  const {products} =this.state;
  const index=products.indexOf(product);

  // products[index].qty+=1;

  // this.setState({
  //     products:products
  // })

  const docRef=this.db.collection('products').doc(products[index].id);
     docRef.update({
       qty:products[index].qty+1
     }).then(()=>{
      console.log("update successful")
     })
     .catch((error)=>{
          console.log("Error",error)
     })
}

handleDeleteProduct=(id)=>{
  const {products} =this.state

  // const items=products.filter((item)=> item.id!==id)

  // this.setState({
  //     products:items
  // })

  //  console.log("del me")

     const docRef=this.db.collection('products').doc(id);

     docRef
     .delete()
     .then(()=>{
       console.log("deleted product")
     })

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
     return cartTotal+=cartTotal+ product.qty*product.price
   })
 
   return cartTotal;
 }


 
 componentDidMount(){
  // firebase.firestore().collection('products').get().then((snapshot)=>{
  //   console.log('querysnapshot',snapshot)

  //   snapshot.docs.map((doc)=>{
  //     console.log(doc.data())
  //   })

  //   const products=snapshot.docs.map((doc)=>{
  //     const data=doc.data();
  //       data['id']=doc.id  // same as data.id=doc.id;
  //     console.log("datatype",typeof data)
  //     return data;
  //   })

  //   this.setState({
  //     products:products,
  //     loading:false,
  //   })
        
  // })


this.db.collection('products').onSnapshot((snapshot)=>{
    console.log('querysnapshot',snapshot)

    snapshot.docs.map((doc)=>{
      console.log(doc.data())
    })

    const products=snapshot.docs.map((doc)=>{
      const data=doc.data();
        data['id']=doc.id  // same as data.id=doc.id;
      console.log("datatype",typeof data)
      return data;
    })

    this.setState({
      products:products,
      loading:false,
    })
        
  })
}

addProduct=()=>{

  this.db.collection('products')
  .add({
    img:"",
    price:45,
    qty:5,
    title:'washing machine'
  })
  .then((docRef)=>{
      console.log("product is add",docRef)
     
  })
  .catch((error)=>{
    console.log('Error',error)

  })

}

  render(){
    const{products,loading}=this.state;
  return (
    <div className="App">
     <NavBar  count={this.getCartCount()}/>
     <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>add a product</button>
     <Cart
          products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}/>
        {loading && <h1>Loading products...</h1>}
        <div style={{fontSize:20,padding:10}}> TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}

}

export default App;
