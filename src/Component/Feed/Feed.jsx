import React, { useEffect, useState } from 'react'
import './feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../datas'
import { whole_value } from '../../datas'
import moment from 'moment'
//https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=YOUR_API_KEY"        //  e.preventDefault();

function Feed({ catagory }) {

  const [data,setData] = useState([]);

const fetchData = async () => {
  const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${catagory}&key=${API_KEY}`;
  try {
    const response = await fetch( videoList_url );
    const result = await response.json();
    console.log('Fetched:', result);
    setData(result.items);
  } catch (err) {
    console.error('Fetch failed:', err);
  }
};
  useEffect(() => {
    console.log(catagory); // Check the value of category here
    fetchData();
  }, [catagory])

  
  return (
    <div className='Feed'>
      {data.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="card">
            {/* <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="card">
 */}
            <img src={`${item.snippet.thumbnails.medium.url}`} alt="thum1" />
            <h2>{`${item.snippet.title}`} </h2>
            <h3>{`${item.snippet.channelTitle}`}</h3>
            <p>{whole_value(item.statistics.viewCount)} views &bull; {`${moment(item.snippet.publishedAt).fromNow()}`}</p>
          </Link>
        )
       
      })}
    </div>
  )
}

export default Feed