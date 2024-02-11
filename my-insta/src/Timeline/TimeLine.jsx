/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./TimeLine.css"
import Suggestion from "./Suggestion"
import Post from './Posts/Post'
// import AvatarSuggest from './Posts/AvatarSuggest'


const TimeLine = () => {
  const [posts, setpost] = useState([
    {
      user: "redian_",
      postImg: "https://images.unsplash.com/photo-1587187174606-2cf853e2f00b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 12,
      timespamp: "1d"
    },
    {
      user: "kudeep",
      postImg: "https://images.unsplash.com/photo-1635803786884-b60b9c404fee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 120,
      timespamp: "2d"
    },
    {
      user: "karan",
      postImg: "https://images.unsplash.com/photo-1604328128622-78dd68fe16da?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 210,
      timespamp: "3d"
    },
    {
      user: "priya",
      postImg: "https://images.unsplash.com/photo-1635645476287-f38e5956744c?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 28,
      timespamp: "2h"
    },
    {
      user: "kunal",
      postImg: "https://images.unsplash.com/photo-1597269808222-490569d2a1ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlbW9ufGVufDB8fDB8fHww",
      likes: 18,
      timespamp: "1h"
    }
  ])

  return (
    <div>
      <div className="timeline">
        <div className="timeline-left">
          <div className="timeline_posts">
            {
              posts.map((data) => {
                return (
                  <Post
                    user={data.user}
                    postImg={data.postImg}
                    likes={data.likes}
                    timespamp={data.timespamp}
                  />
                )
              })
            }

          </div>
        </div>
        <div className="timeline-right">
          <Suggestion />
        </div>
      </div>
    </div>
  )
}

export default TimeLine