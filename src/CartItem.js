import React from 'react';
import min from './min.svg'
import max from './max.svg'
import del from './del.svg'

class CartItem extends React.Component{

    constructor(){
        super();
        this.state={
            price: 99,
            qty:1,
            title: "phone",
            img:""
        }
     //   this.increaseQuantity=this.increaseQuantity.bind(this);
    }

    increaseQuantity =() =>{
            //this.state.qty+=1

            // this.setState({
            //     qty: this.state.qty+1
            // });

            //if prevstate is required to use
            this.setState((prevState)=>{
                 return {
                     qty: prevState.qty+1
                 }
            })

            console.log(this.state);
    }

    decreaseQuantity =() =>{

        const {qty}= this.state;

        if(qty===0){
            return
        }
      
        this.setState((prevState)=>{
             return {
                 qty: prevState.qty-1
             }
        })
    }

    testing(){
        const promise=new Promise((resolve,reject)=>{
               setTimeout(()=>{
                   resolve('done');
               },5000);
        })

        promise.then(()=>{
            this.setState({qty:100});
        });

        console.log('state', this.state)
    }

  

      render(){
        const {price, title,qty}= this.state;
        return (

            

            <div className='cart-item'>  
            <div className='left-block'>
                <img style={x.image} alt=''/>
                </div>
             <div className='rigth-block'>
                 <div style={{fontSize:25}}> {title}</div>
                 <div style={{color:'#777'}}>price: {price}</div>
                 <div style={{color:'#777'}}> qty: {qty} </div>
                 <div className='cart-item-actions'> {/*buttons*/}

                 <img alt='increase' className='action-icons' src={max}
                  onClick={this.increaseQuantity}
                  />
                 <img alt='decrease' className='action-icons' src={min}
                 onClick={this.decreaseQuantity}/>
                 <img alt='delete' className='action-icons' src={del}/>


                 </div>

                 



             </div>
             </div>
        );
      }
    
}

const x ={
    image :{
        height: 110,
        width: 110,
        borderRadius:4,
        background:'#ccc'

    }
}

export default CartItem;