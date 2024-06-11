import React from 'react'

const ProductCard = ({title}) => {
  return (
    <div>
        <div style={{ width:'10rem',backgroundColor:'#000d1a',borderRadius:'8px',color:'white',height:'12rem'}} >
        <div style={{display:'flex'}}>
            <img src=''/>
            <p style={{color:'skyblue',textAlign:'center'}}>{title}</p>
        </div>
        <div style={{height:'8rem',textAlign:'center'}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
    </div>
  )
}

export default ProductCard