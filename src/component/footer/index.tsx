import "./index.css"
import phone from '../../images/phone-line-icon.png'
import email from '../../images/email.png'
import location from '../../images/location.png'
import rightArrow from '../../images/pngegg.png'





function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-div">

          <div className='first-line abc'>

            <h6 > furniLux</h6>
            <span className='furnilux-caption'>Designing Dreams, Crafting Comfort</span>

            <div style={{ marginTop: "12px" }} className="first-links">
              <span><img src={phone} /></span>
              <p>+ 031 1265 9893</p>
            </div>

            <div className="first-links">
              <span><img src={email} style={{ height: "18px" }} /></span>
              <p>furnilux@business.com</p>
            </div>

            <div className="first-links">
              <span><img src={location} /></span>
              <p>123 Homestd Lane, Suite 456 Civil, United Interiors</p>
            </div>

          </div>

          <div className='abc'>
            <h6 style={{ marginBottom: "19px" }}>About Us</h6>

            <div className="second-links">
              <img src={rightArrow} />
              <p>About us</p>
            </div>


            <div className="second-links">
              <img src={rightArrow} />
              <p>Blog</p>
            </div>

            <div className="second-links">
              <img src={rightArrow} />
              <p>Contact us</p>
            </div>

            <div className="second-links">
              <img src={rightArrow} />
              <p>Popular question</p>
            </div>

          </div>

          <div className='abc'>

            <h6 style={{ marginBottom: "19px" }}>What's Popular</h6>

            <div className="second-links">
              <img src={rightArrow} />
              <p>King Size Beds</p>
            </div>

            <div className="second-links">
              <img src={rightArrow} />
              <p>Sofas</p>
            </div>

            <div className="second-links">
              <img src={rightArrow} />
              <p>Chairs</p>
            </div>

            <div className="second-links">
              <img src={rightArrow} />
              <p>Decorative Lamps</p>
            </div>

          </div>

          <div className='last-line abc'>

            <h6>Get 15% off first order!</h6>
            <p>Subsribe our news letter and get discount for your first order!
              also recieves updates and more</p>

            <div className="subscribe-btn">
              <img src={email} />
              <input placeholder='Email Address' type="text" />
              <button>Subscribe</button>
            </div>

          </div>
        </div>

        <p className='copywrite'>© 2024 furniLux All Rights Reserved</p>

      </footer>
    </div>
  )
}

export default Footer;