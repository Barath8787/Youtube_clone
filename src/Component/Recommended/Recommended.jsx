import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import { API_KEY } from '../../datas'
import { Link } from 'react-router-dom';


function Recommended({ categoryId }) {
    const [apiData, setApidata] = useState([]);

    const fetchRecommendvid = async () => {
        const recommended = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
        const res = await fetch(recommended);
        const data = await res.json();
        console.log("Fetched data:", data);
        setApidata(data.items || []);
    };

    useEffect(() => {
        fetchRecommendvid();
    }, [categoryId]); // added dependency

    return (
        <div className="recommended">
            {apiData.map((video, index) => (
                <Link to={`/video/${video.snippet.categoryId}/${video.id}`} className="side-video-list" key={index}>
                    <img src={video.snippet?.thumbnails?.default?.url || thumbnail1} alt="" />
                    <div className="video-info">
                        <h4>{video.snippet?.title || 'No Title'}</h4>
                        <p>{video.snippet?.channelTitle || 'Unknown Channel'}</p>
                        <p>{video.statistics?.viewCount || '0'} views</p>
                    </div>
                </Link>
              
            ))}
        </div>
    );
}

export default Recommended;
