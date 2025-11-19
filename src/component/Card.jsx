import React, { useContext } from 'react';
import GlobalContext from '../GlobalContext';
import image1 from '../images/h-phone2.jpg'
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Card = ({ productData }) => {
  const { setCart } = useContext(GlobalContext);

  const navigate = useNavigate()
  const handleData = (item) => {
    navigate("/details", { state: { item } })
  }

  const handlecart = (item)=>{
    setCart(prev =>{
      const existCart=prev.find(p=> p.model === item.model);

      if(existCart){
        alert("This product already added your Cart...!");
        return prev;
      }
      else{
        alert("Cart Added Successfully!");
        return[...prev, item]
      }
    })
  }

  return (
    <section className=" card grid-card d-flex flex-column w-100 position-relative text-white  border-bottom-white">

      <img src={image1} className='bgimage position-absolute top-0 start-0 w-100 vh-100 object-fit-cover  position-fixed' />



      {productData?.map((item) => (
        <figure key={item.id} className="text-center d-flex flex-row  text-white  ">
          <div className="image-container w-50 z-3 perspective-container ">
            <img
              src={item.images[0].img}
              alt={item.name}
              className="w-100 img-fluid rotate3d-bg"
            />
          </div>
          <figcaption className=" w-50 d-flex flex-column align-items-center justify-content-center gap-3 text-white z-3 ">
            <table onClick={() => handleData(item)} className='d-flex gap-2'>
              <tbody className=' d-flex  flex-column gap-3'>
                <tr className=' d-flex flex-row gap-2'>
                  <th>Name:</th>
                  <td>{item.name}</td>

                </tr>
                <tr className=' d-flex flex-row gap-2'>
                  <th>Model:</th>
                  <td>{item.model}</td>

                </tr>

                <tr className=' d-flex flex-row gap-2'>
                  <th>Instock:</th>
                  <td style={{ color: item.inStock ? "green" : "red" }}>

                    {item.stockQty}
                  </td>

                </tr>
                <tr className=' d-flex flex-row gap-2'>
                  <th>Price:</th>
                  <td>{item.price}</td>

                </tr>
                <tr className=' d-flex flex-row gap-2'>
                  <th>Rating:</th>
                  <td className='text-warning'>{item.rating}</td>

                </tr>
                <tr className=' d-flex flex-row'>
                  <th>Color:</th>
                  <td>{item.color[0]}</td>

                </tr>

              </tbody>
            </table>
            <table>
              <tbody className='d-flex '>
                <tr className='d-flex '>
                  <td><button className=' p-2 bg-warning border-0 outline-none  rounded-3 btn btn-custom' onClick={()=>handlecart(item)}>Add to Cart</button></td>
                </tr>
              </tbody>
            </table>

          </figcaption>
        </figure>

      ))}

    </section>
  );
};

export default Card;
