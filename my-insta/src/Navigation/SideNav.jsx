import React from 'react';
import "./SideNav.css";
import { MdHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { MdSlideshow } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { IoMdMenu } from "react-icons/io";
import { MdAddBox } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../FireBase";
import { logoutuser } from "../Feature/UserSlice";
import { Link } from "react-router-dom"

const SideNav = () => {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const HandleLogout = () => {
    dispatch(logoutuser());
    signOut(auth);
  };
  return (
    <div>
      <div className="sidenav">
        <h1>instagram</h1>
        <div className="sidenav_buttons">
          <button className="side_button">
            <MdHome />
            <Link className='links-list' to="/home">Home</Link>
          </button>
          <button className="side_button">
            <FaSearch />
            <Link to="/search" className='links-list'>Search</Link>
          </button>
          <button className="side_button">
            <MdExplore />
            <Link to="/explore" className='links-list'>Explore</Link>
          </button>
          <button className="side_button">
            <MdSlideshow />
            <Link to="/reels" className='links-list'>Reels</Link>
          </button>
          <button className="side_button">
            <MdOutlineChat />
            <Link to="/message" className='links-list'>Message</Link>
          </button>
          <button className="side_button">
            <IoIosNotifications />
            <Link to="/notification" className='links-list'>Notification</Link>
          </button>
          <button className="side_button">
            <MdAddBox />
            <Link to="/create" className='links-list'>Create</Link>
          </button>
          <button className="side_button">
            <FaUser />
            <Link to="/profile" className='links-list'>Profile</Link>
          </button>
          <button className="side_button">
          <FaUser />
            {user.username}{" "}
            <span onClick={HandleLogout}>Logout</span>
          </button>
          <button className="side_button">
            <IoMdMenu />
            <Link to="" className='links-list'>More</Link>
          </button>

        </div>

      </div>
    </div >
  )
}

export default SideNav