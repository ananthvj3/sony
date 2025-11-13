import React from 'react'

const Color = ({color}) => {
  return (
    <div className='w-25 h-25'>
    {color?.map((item)=>{
        <div className=' w-50 h-50'>
              
                <img src={item.color} className='w-100 h-100  object-fit-cover'/>
          
             </div>
    })}
     </div>
  )
 
}

export default Color