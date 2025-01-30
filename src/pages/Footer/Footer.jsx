
import './footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { IoMapSharp } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";

function Footer() {
    return (
      <>
        <footer className="footer">
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
          <ul className="social-icon">
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                href="https://www.facebook.com/profile.php?id=61556308754814&mibextid=LQQJ4d"
                target="_blank"
              >
                <FaFacebook name="logo-facebook"></FaFacebook>
              </a>
            </li>
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                href="https://www.instagram.com/knoz_academy"
                target="_blank"
              >
                <FaInstagram name="logo-instagram"></FaInstagram>
              </a>
            </li>
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                target="_blank"
                href="https://www.google.com/maps/place/The+Exchange+Tower/@25.1863205,55.2600946,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f694c700e12f9:0x190ce8d857467f06!8m2!3d25.1863205!4d55.2600946!16s%2Fg%2F11h2h194ly?entry=ttu"
              >
                <IoMapSharp name="logo-map"></IoMapSharp>
              </a>
            </li>
            <li className="social-icon__item">
              <a
                className="social-icon__link"
                href="https://web.whatsapp.com/send?phone=+971585766358"
                target="_blank"
              >
                <SiWhatsapp name="logo-whatsapp"></SiWhatsapp>
              </a>
            </li>
          </ul>
          <ul className="menu">
            <li className="menu-item">
              <Link className="a" to="/">
                Home
              </Link>
            </li>
            {/* <li className='menu-item'><Link>Divisions</Link></li> */}
            <li className="menu-item">
              <Link to="/contact">Contact us</Link>
            </li>
            {/* <li className='menu-item'><Link>Language</Link></li> */}
          </ul>
          <p>&copy; 2024 Knoz academy </p>
        </footer>
      </>
    );
}

export default Footer
 