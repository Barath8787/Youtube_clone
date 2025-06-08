import React from 'react'
import './Sidebar.css'
import Home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import Sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import Music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

function Sidebar({sidebar,catagory,setcatagory}) {
  return (
 
    <div className={`side_bar ${sidebar?'':'small-sidebar'}`}>
        <div className="shortcut_link">

        <div className={`side_link ${catagory===0?'active':''}`}  onClick={()=>setcatagory(0)}>
            <img src={Home} alt="" /><p>Home</p>
         </div>
        <div className={`side_link ${catagory===20?'active':''}`}  onClick={()=>setcatagory(20)}>
            <img src={game_icon} alt="" /><p>Gaming</p>
        </div>
        <div className={`side_link ${catagory===2?'active':''}`}  onClick={()=>setcatagory(2)}>
            <img src={automobiles} alt="" /><p>Automobiles</p>
        </div>
        <div className={`side_link ${catagory===17?'active':''}`}  onClick={()=>setcatagory(17)}>
            <img src={Sports} alt="" /><p>Sports</p>
        </div>
        <div className={`side_link ${catagory===24?'active':''}`}  onClick={()=>setcatagory(24)}>
            <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
        <div className={`side_link ${catagory===28?'active':''}`}  onClick={()=>setcatagory(28)}>
            <img src={tech} alt="" /><p>Tech</p>
        </div>
        <div className={`side_link ${catagory===10?'active':''}`}  onClick={()=>setcatagory(10)}>
            <img src={Music} alt="" /><p>Music</p>
        </div>
        <div className={`side_link ${catagory===22?'active':''}`}  onClick={()=>setcatagory(22)}>
            <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className={`side_link ${catagory===25?'active':''}`}  onClick={()=>setcatagory(25)}>
            <img src={news} alt="" /><p>News</p>
        </div>
<hr />

        </div>
  <div className="subscried-list">
    <h3>subscribe</h3>
    <div className="side_link">
            <img src={jack} alt="" /><p>maran</p>
    </div>
    <div className="side_link">
            <img src={simon} alt="" /><p>Manokar</p>
    </div>
    <div className="side_link">
            <img src={tom} alt="" /><p>Barath</p>
    </div>
    <div className="side_link">
            <img src={megan} alt="" /><p>Babu</p>
    </div>
    <div className="side_link">
            <img src={cameron} alt="" /><p>Niresh</p>
        </div>
  </div>
    </div>
  )
}

export default Sidebar