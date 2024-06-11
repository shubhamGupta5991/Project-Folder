import React, { useEffect, useState } from 'react'
import './styles.css'
import Cards from './Components/Cards'
import axios from 'axios'


const App = () => {
  const [data,setData] = useState('');

  const slicedData = data.slice(data.indexOf('@')+1,);

  

  // console.log(slicedData)
  
    const dataposting = async()=>{
      try {
        if(slicedData!== 'ez.works'){
          const val = await axios.post('http://34.225.132.160:8002/api',{
                'email':data
              }).then((response)=>{
                console.log(response)
              })
            
             }
        
      } catch (error) {
        console.log(error)
      }
     
   
  
  
    }
  
  
 useEffect(()=>{
    dataposting()

},[])
  

  return (
    <div className='parent' style={{display:'flex',width:'90%',margin:'0 auto',justifyContent:'center',marginTop:'4rem',flexWrap:'wrap'}}>
      <div style={{boxSizing:'border-box',width:'50%'}}>
        <div style={{display:'flex'}}>
          <img src='' alt='logo' width='50px' height='50px'/>
          <p style={{fontSize:'2rem',color:'skyblue'}}>Works</p>
        </div>
        <h3>A Suite of Business Support Services</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a condimentum velit. Donec vitae semper felis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a condimentum velit. Donec vitae semper felis</p>
        <div>
          <form>
            <input type='email' placeholder='Enter Email' style={{padding:'19px 16rem 19px 0',borderRadius:'5px',border:'2px solid gray'}} value={data} onChange={(e)=>setData(e.target.value)}/>
            <button style={{color : 'white',backgroundColor:'#fca030',borderRadius:'5px',padding:'18px',border:'none',marginLeft:'1rem',fontSize:'18px' }} onClick={dataposting}>Contact Me</button>
          </form>

        </div>
      </div>

      <Cards/>

      </div>
   
  )
}

export default App