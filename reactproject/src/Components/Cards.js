import React from 'react'
import ProductCard from './ProductCard'


const data = ['Presentation Design','Audio-Visual Production','Translation Services','Graphic Design','Research & Analytics','Data Processing'];

const Cards = () => {
  return (
    <div style={{border:'none',width:'50%'}}>
       
        <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
        {
        data.map((e,i)=>(
          <ProductCard title={e} key={i} />
        ))
        }
      
       </div>
    </div>
  )
}

export default Cards