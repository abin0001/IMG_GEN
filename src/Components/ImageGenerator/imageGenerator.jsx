import React from 'react'
import './ImageGenaerator.css'
import defualt_img from '../Assets/aiimage.jpg'
const imageGenerator = () => {

    
    


  return (
    <div className="ai-image-generator">
        <div className="header">Ai image <span>generator</span></div>
        <div className="img-loading">
            <div className="image">
                <img src={defualt_img} alt="" />
            </div>
        </div>
        <div className="search-box">
            <input className='search-input' type="text" placeholder="Discribe your imagination by text "/>
            <div className="generate-btn">Generate</div>
        </div>
    </div>
  )
}

export default imageGenerator
