import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, whole_value } from '../../datas'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
function Playvideo() {
const{ videoId }=useParams()
    const [apidata, setApidata] = useState(null) // null---You intentionally set something as empty or no value
    const [chaneldata, setChaneldata] = useState(null)
    const [commentadata, setCommentdata] = useState([])
    const fetchVideoData = async () => {
        //fetching video data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApidata(data.items[0]))
    }
    useEffect(() => {
        fetchVideoData()
    }, [videoId])

    const fetchChannelData = async () => {
        //fetch channel data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res => res.json()).then(data => setChaneldata(data.items[0]))


        //fetch comment data
        const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        await fetch(commentData_url).then(res => res.json()).then(data => setCommentdata(data.items))
    }
    useEffect(() => {
        fetchChannelData()
    }, [apidata])


    return (
        <div className='play-video'>
            {/* <video src={video1} autoPlay controls muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share,muted" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apidata ? apidata.snippet.title : "video title"}</h3>
            <div className="play-video-info">
                <p>{apidata ? whole_value(apidata.statistics.viewCount) : 'view count'}views &bull; {moment(apidata ? apidata.snippet.publishedAt : 'time').fromNow()}</p>
                <div>
                    <span><img src={like} alt="" />{apidata ? whole_value(apidata.statistics.likeCount) : 'like count'}</span>
                    <span><img src={dislike} alt="" />2</span>
                    <span><img src={share} alt="" />share</span>
                    <span><img src={save} alt="" />120</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={chaneldata ? chaneldata.snippet.thumbnails.default.url : "cus profile"} alt="" />
                <div>
                    <p>{apidata ? apidata.snippet.channelTitle : 'channeltitle'}</p>
                    <span>{chaneldata ? whole_value(chaneldata.statistics.subscriberCount) : "subscribe"} subscribers</span>
                </div>
                <button>sunscribe</button>
            </div>
            <div className="vid-discription">
                <p>{apidata ? apidata.snippet.description.slice(0, 400) : 'description'}</p>
                <hr />
                <h4>{apidata ? whole_value(apidata.statistics.commentCount) : 'comment count'} Comment</h4>


                {commentadata.map((item, index) => {
                    return (

                        <Link className="comment" key={index}>
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 days ago</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>{whole_value(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>
                        </Link>

                    )
                })}


            </div>
        </div>
    )
}

export default Playvideo