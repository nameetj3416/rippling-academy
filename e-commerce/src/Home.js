import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-carousel-minimal'
import Product from './Product.js'
import './Home.css';


const Home= () =>{
    const [products,setProducts]=useState([]);
    const data = [
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
        },
        {
          image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
        },
        {
          image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
        },
        {
          image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
        },
        {
          image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
        },
        {
          image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
        },
        {
          image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
        },
        {
          image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
        }
      ];
    
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    useEffect(()=>{
        const getProducts=async (offset,limit)=>{
            let response= await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`).then(response => response.json());
            setProducts(response);
        }
        getProducts(0,10);
    },[]);
    return (
        <div className='home'>
            <Carousel
                className='home__carousel'
                data={data}
                time={5000}
                width="100%"
                height="500px"
                automatic={true}
                slideBackgroundColor="darkgrey"
                // slideImageFit="cover"
            />
            <div className='home__row'>
                {
                    products.map((product,index)=>(
                        <Product 
                            id={index} 
                            key={index} 
                            title={product.title} 
                            image={product.images[0]} 
                            price={product.price} 
                            rating={product.rating}
                            description={product.description}
                        />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Home