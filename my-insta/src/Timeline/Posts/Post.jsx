/* eslint-disable no-unused-vars */
import React from 'react'
import "./Post.css"
import { IoIosMore } from "react-icons/io"
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

const Post = ({ user, postImg, likes, timespamp }) => {
    const setimg = {
        width: "100%",
        height: "100%"
    }
    return (
        <div className='post-header-big'>
            <div className='post'>
                <div className='post-header'>
                    <div className="post-headerauthor">
                        <div className='avatar'>
                            <p>{user.charAt(0).toUpperCase()}</p>
                        </div>
                        {user}<span>{timespamp}</span>
                    </div>
                    <IoIosMore className='loadmore' />
                </div>
                <div className='post-image'>
                    <img src={postImg} style={setimg} alt="" />
                </div>
                <div className='post-footer'>
                    <div className="post-footericons">
                        <div className="post-iconsmain">
                            <FaHeart className='postIcon' />
                            <FaComment className='postIcon' />
                            <FaTelegramPlane className='postIcon' />
                        </div>
                        <div className="post-iconssave">
                            <FaRegBookmark className='postIcon' />
                        </div>
                    </div>
                    like by {likes} people.
                </div>
            </div>
        </div>
    )
}

export default Post