import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const googleUser = useSelector((state) => state.user);
  const jwtUser = useSelector((state) => state.auth.getMe)
  return (
    <div>
        {googleUser.loggedIn || jwtUser ? (
          <div>
            <Link to="/home"><h1 className="WebsiteTitle">Just Food!</h1> </Link>
            <div className='NavbarLinks'>
              <Link to="/pantry">Pantry</Link>
              <Link to="/myaccount">My Account</Link>
              <Link to="/cookinghistory">Cooking History</Link>
              <Link to="/bookmarks">Bookmarks</Link>
              <Link to="/aboutus">About Us</Link>
            </div>

            <div>
              <h3 className="WelcomeElement">Welcome, {googleUser.firstName || jwtUser.firstName}!</h3>
              <form className='logoutButton' action="/auth/logout" method="post">
                <button className="logout" type="submit">
                  Sign out
                </button>
              </form>
            </div>

          </div>
        ) : (
          <div>
            <Link to="/home"><h1 className="WebsiteTitle">Just Food!</h1> </Link>
            <h3 className="WelcomeElement">Welcome, Guest!</h3>
            <div className='NavbarLinks'>
              <Link to="/login">Login/Sign-up</Link>
              <Link to="/aboutus">About Us</Link>
            </div>
          </div>
        )}
      <hr />
    </div>
  );
};

export default Navbar;
