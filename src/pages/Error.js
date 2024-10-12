import { Outlet, Link } from "react-router-dom";

function Error() {
    return (
      <div className="App">
        <h1>ERROR!</h1>
        <Link to='/watchlist'>Home</Link>
      </div>
    );
  }
  
  export default Error;