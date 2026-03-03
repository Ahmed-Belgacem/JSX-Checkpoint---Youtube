import React from 'react'
import './sugg.css'

function Sugg() {
  let video = [
    {
      src: "https://www.youtube.com/embed/jbAXr5yrB6o",
      name: "I'LL PUSH PAST MY LIMITS | ASTA | Black Clover AMV",
      channel: "Anime Inspires Me",
      views: "1.1M views",
      time: "2 years ago"
    },
    {
      src: "https://www.youtube.com/embed/P60G3GK6hJA",
      name: "Moments When Black Clover Fans Went Crazy",
      channel: "Ota MA",
      views: "10M views",
      time: "2 years ago"
    },
    {
      src: "https://www.youtube.com/embed/e2NgIAefwBY",
      name: "IVOXYGEN SAD MIX",
      channel: "tokiyskuy gruz",
      views: "88K views",
      time: "1 year ago"
    },
        {
      src: "https://www.youtube.com/embed/hwkAbAKOfxk",
      name: "The moment Asta scared everyone for 23secs",
      channel: "Mr Anime",
      views: "150K views",
      time: "3 year ago"
    },
        {
      src: "https://www.youtube.com/embed/xbq8q5MpvrM",
      name: "Black Clover Asta",
      channel: "tokiyskuy gruz",
      views: "300K views",
      time: "1.5 year ago"
    },
    {
      src: "https://www.youtube.com/embed/bgJT4rRv1jg",
      name: "Black Clover AMV/ASMV - THE TRUE WIZARD KING",
      channel: "Tributer Craft",
      views: "3.9M views",
      time: "1 year ago"
    }
  ]

  return (
    <div className="sugg-wrapper">
      {video.map((el, index) => (
        <div className="sugg-card" key={index}>
          <iframe
            src={el.src}
            title={el.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="sugg-info">
            <p className="sugg-name">{el.name}</p>
            <p className="sugg-channel">{el.channel}</p>
            <p className="sugg-meta">{el.views} • {el.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sugg