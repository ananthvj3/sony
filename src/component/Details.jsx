import React from 'react'
import GlobalContext from '../GlobalContext'
import { useLocation } from 'react-router-dom'
import image1 from  '../images/h-phone2.jpg'
import SimpleSlider from './Slide'
import { useContext } from 'react'
import Color from './Color'



const Details = () => {
   const {setCart}=useContext(GlobalContext)

    const location=useLocation()
    const productData=location.state || [];
  return (
    <>
    
    <section className="product-details d-flex flex-column ">
    

        <figure className=' z-3'>
             <SimpleSlider img={productData?.item?.images}/>
             <Color color={productData?.item?.imageColor}/>
             
             <figcaption className=' details-content d-flex  align-item-center justify-content-center'>
              <table className='table  d-flex  align-items-center justify-content-center gap-3 '>
                <tbody>
                  <tr className='gap-2'>
                    <th>Name:</th>
                    <td>{productData?.item?.name}</td>
                  </tr>
                   <tr>
                    <th>Model:</th>
                    <td>{productData?.item?.model}</td>
                  </tr>
                   <tr>
                    <th>Description:</th>
                    <td>{productData?.item?.description}</td>
                  </tr>
                   <tr>
                    <th>InStock:</th>
                    <td style={{color:productData.item.inStock ? "green" : "red"}}>{productData?.item?.stockQty}</td>
                  </tr>
                   <tr>
                    <th>Price:</th>
                    <td>{productData?.item?.price}</td>
                  </tr>
                   <tr>
                    <th>Color:</th>
                    <td>{productData?.item?.color[0]}</td>
                  </tr>
                   <tr>
                    <th>Rating:</th>
                    <td className=' text-warning'>{productData?.item?.rating}</td>
                  </tr>
                  <tr className='d-flex '>
                          <td><button className=' p-2 bg-warning border-0 outline-none  rounded-3 btn btn-custom'>Add to Cart</button></td>
                        </tr>
                </tbody>
              </table>
                
                      
                
             </figcaption>
             
        </figure>
    </section>
    </>
  )
}

export default Details