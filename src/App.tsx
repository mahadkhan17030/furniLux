// import React from 'react';
import './App.css';
import NavBar from "./component/nav"
import Footer from "./component/footer"
import rightArrow from '../src/images/pngegg.png'
import lamp1 from '../src/images/lamp-1.jpeg'
import chair1 from '../src/images/chair-1.jpeg'
import sofa1 from '../src/images/sofa-1.jpeg'
import trolley from '../src/images/trolley.png'
import bed1 from '../src/images/bed1.jpeg'
import shel1 from '../src/images/shelf1.jpeg'
import sofa2 from '../src/images/sofa2.jpeg'
import shelf2 from '../src/images/shelf2.jpeg'
import sofa3 from '../src/images/sofa2.jpeg'
import chair2 from '../src/images/chair2.jpeg'
import table1 from '../src/images/table1.jpeg'
import lamp2 from '../src/images/lamp2.jpeg'
import bed3 from '../src/images/bed3.jpeg'
import divan1 from '../src/images/divan1.jpeg'
import sofa4 from '../src/images/sofa3.jpeg'
import design1 from '../src/images/Design 1.jpg'
import design2 from '../src/images/Design 2.png'
import blogImg1 from '../src/images/blogImg1.jpeg'
import blogImg2 from '../src/images/blogImg2.jpeg'
import blogImg3 from '../src/images/blogImg3.jpeg'

function App() {
  const products = [
    {
      id: 1,
      name: 'Wooden Shelf',
      price: 89.99,
      image: shelf2
    },
    {
      id: 2,
      name: 'Elegant Sofa',
      price: 79.99,
      image: sofa3
    },
    {
      id: 3,
      name: 'Classy Chair',
      price: 99.15,
      image: chair2
    },
    {
      id: 4,
      name: 'Luxurious Bed',
      price: 74.99,
      image: bed1
    },
    {
      id: 5,
      name: 'Classy Table',
      price: 84.52,
      image: table1
    },
    {
      id: 6,
      name: 'Stylish Lamp',
      price: 71.25,
      image: lamp2
    },
    {
      id: 7,
      name: 'Stylish Bed',
      price: 95.99,
      image: bed3
    },
    {
      id: 8,
      name: 'Cuzzy Divan',
      price: 88.15,
      image: divan1
    },
    {
      id: 9,
      name: 'Comfortable Sofa',
      price: 77.55,
      image: sofa4
    }
  ];

  return (
    <div className="App">

      <NavBar />

      <div className="main-banner">
        <h1>FurniLux - Your Brand for Styling Living </h1>
        <p>Discover a fusion of modern design and functionality, crafted to elevate every
          corner of your living space. FurniLux, redifining stylish living for you.
        </p>
        <button className="shop-button">
          <span>Shop Now</span>
          <img src={rightArrow} alt="Right Arrow" className="arrow-icon" />
        </button>
      </div>

      <div className="categories">
        <div className="categories-box">
          <img src={sofa1} />
          <p>Sofa</p>
        </div>
        <div className="categories-box">
          <img src={bed1} alt="" />
          <p>Bed</p>
        </div>
        <div className="categories-box">
          <img src={chair1} alt="" />
          <p>Chair</p>
        </div>
        <div className="categories-box">
          <img src={shel1} alt="" />
          <p>Shelf</p>
        </div>
        <div className="categories-box">
          <img src={lamp1} alt="" />
          <p>Lamp</p>
        </div>
        <div className="categories-box">
          <img src={sofa2} alt="" />
          <p>Decor</p>
        </div>
      </div>

      <div className="show-products">
        <h1>Elevate Your Living Room</h1>
        <div className="main-show-div">

          <div className="show-div">
            <img className='first-img' src={sofa1} />
            <div className="show-bottom">

              <div className="trolley">

                <div className="colors">
                  <div className="color1"></div>
                  <div className="color2"></div>
                  <div className="color3"></div>
                  <div className="color4"></div>
                </div>
                <img src={trolley} alt="" />
              </div>
              <p>Comfortable Sofa</p>
              <span>$ 80.99</span>
            </div>

          </div>


          <div className="show-div">
            <img className='first-img' src={lamp1} />
            <div className="show-bottom">

              <div className="trolley">

                <div className="colors">
                  <div className="color1"></div>
                  <div className="color2"></div>
                  <div className="color3"></div>
                  <div className="color4"></div>
                </div>
                <img src={trolley} alt="" />
              </div>
              <p>Elegant Lamp</p>
              <span>$ 80.99</span>
            </div>

          </div>


          <div className="show-div">
            <img className='first-img' src={chair1} />
            <div className="show-bottom">


              <div className="trolley">

                <div className="colors">
                  <div className="color1"></div>
                  <div className="color2"></div>
                  <div className="color3"></div>
                  <div className="color4"></div>
                </div>
                <img src={trolley} alt="" />
              </div>
              <p>Classy Padded Chair</p>
              <span>$ 80.99</span>
            </div>

          </div>
        </div>

      </div>

      <img src={design1} style={{ width: "100%" }} />

      <div className="all-products">
        <h1>All Products</h1>
        <div className="products-div">
          {products.map((item) => {
            console.log(item)
            return (
              <div className="products">
                <img className='first-img' src={item.image} />
                <div className="show-bottom">
                  <div className="trolley">
                    <div className="colors">
                      <div className="color1"></div>
                      <div className="color2"></div>
                      <div className="color3"></div>
                      <div className="color4"></div>
                    </div>
                    <img src={trolley} alt="" />
                  </div>
                  <p>{item.name}</p>
                  <span>$ {item.price}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <img src={design2} style={{ width: "100%" }} alt="" />

      <div className="blogs-div" >
        <h1 className='blog-h1'>Blogs & Insights</h1>
        <p className='blog-p'>Explore our Blog for Designinspiration and Tips </p>
        <div className='blog-container' style={{ display: "flex" }} >
          <div className="blog-images" >
            <img src={blogImg1} alt="blogImg1" />
            <div className="blog-txt">
              <h1>The Art of Cozy: Elevate Your Home with Fall Decor</h1>
              <p>As the crisp autumn breeze sweeps in, Its time to transform your living space into a cozy heaven. Ib our blog post explore
                the art of fall decor with furnilux. From warm color plaletts to snug textile. Dicover simple..
              </p>
              <span>Read More</span>
            </div>
          </div>
          <div className="blog-images" >
            <img src={blogImg2} alt="blogImg1" />
            <div className="blog-txt">
              <h1>The Art of Cozy: Elevate Your Home with Fall Decor</h1>
              <p>As the crisp autumn breeze sweeps in, Its time to transform your living space into a cozy heaven. Ib our blog post explore
                the art of fall decor with furnilux. From warm color plaletts to snug textile. Dicover simple..
              </p>
              <span>Read More</span>
            </div>
          </div>
          <div className="blog-images" >
            <img src={blogImg3} alt="blogImg1" />
            <div className="blog-txt">
              <h1>The Art of Cozy: Elevate Your Home with Fall Decor</h1>
              <p>As the crisp autumn breeze sweeps in, Its time to transform your living space into a cozy heaven. Ib our blog post explore
                the art of fall decor with furnilux. From warm color plaletts to snug textile. Dicover simple..
              </p>
              <span>Read More</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
