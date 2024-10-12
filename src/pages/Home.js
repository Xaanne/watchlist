import { Outlet, Link } from "react-router-dom";

export default function Home() {

    return (
      <>
      <div className="App">
        <h1>HOME</h1>
        <Link to='/watchlist/reading'>Reading</Link>
      </div>
      </>
    );
}