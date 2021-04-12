import React from 'react';
import cart from './cart.svg'

const NavBar=(props)=>{
     return (
          <div style={styles.nav}>  
                <div style={styles.cartIconContainer}>
                    <img  style={styles.cartIcon} src={cart} alt='cart-icon '/>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            
             </div>
        );
      
    
}

const styles ={
cartIcon:{
    height: 32,
    marginRight: 20,
   
},

nav:{
    height: 70,
    background:  '#4267b2',
    display:'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'

},
    cartIconContainer: {
    positon: 'relative',
    },

    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '2px 8px',
        position: 'absolute',
        right: 2,
        top: 8

    }
}




export default NavBar;