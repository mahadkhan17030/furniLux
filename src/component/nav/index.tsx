import "./index.css"
import bell from '../../images/bell.png'

function NavBar() {
  return (
    <div>
      <header>

        <div className="sale-banner">
          <img src={bell} />
          <p>Enjoy 30% Off - Shop Now and Save Big</p>
        </div>

        <div className="navbar">
          <p>furniLux</p>

          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>About Us</li>
            <li>Pages</li>
            <li>Contact Us</li>
          </ul>

          <ol>
            <li>Log in</li>
            <li style={{ color: '#589b9d' }}>Sign Up</li>
          </ol>

        </div>

      </header>
    </div>
  )
}

export default NavBar;