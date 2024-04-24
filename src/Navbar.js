import './styles/Navbar.css';
import { Outlet, Link } from "react-router-dom";


      export default function Navbar() {

        return(
          <>
            <div className='navSpace' id="navBack">.</div>

            {/* <div className='navSpace' id="navBox">
            <Link to="/watchlist">Home</Link>
            <Link to="/watchlist/reading">Reading</Link>
            <Link to="/contact">Contact</Link>
            </div> */}
          </>
        );
      }