import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
function Testimonials() {
      const slider=useRef();
      let tx=0;
    
  const slideforward=()=>{
       if(tx>-50)
        {tx-=25;} 
       slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slidebackward=()=>{
    if(tx<0)
      {tx+=25;} 
     slider.current.style.transform = `translateX(${tx}%)`;
  }
    return (
        <div className='testimonials'>
        <img src={back_icon} alt="" className='back-btn' onClick={slidebackward}/>
        <img src={next_icon} alt="" className='next-btn' onClick={slideforward}/>
        <div className='slider'>
          <ul ref={slider}>
           <li>
             <div className='slide'>
                <div className='user-info'>
                    <img src={user_1} alt="" />
                    <div>
                        <h3>William jack</h3>
                        <span>Educity,USA</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse, sunt ea reiciendis deleniti doloribus nostrum voluptates architecto excepturi nam libero! Ratione impedit ea sit non magnam dolor numquam iste repudiandae mollitia cupiditate quo illum, quas et commodi distinctio illo obcaecati in consequatur harum omnis nihil error. Dolorem, maiores tempora!</p>
             </div>
           </li>  
           <li>
             <div className='slide'>
                <div className='user-info'>
                    <img src={user_2} alt="" />
                    <div>
                        <h3>William jack 2</h3>
                        <span>Educity,USA</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse, sunt ea reiciendis deleniti doloribus nostrum voluptates architecto excepturi nam libero! Ratione impedit ea sit non magnam dolor numquam iste repudiandae mollitia cupiditate quo illum, quas et commodi distinctio illo obcaecati in consequatur harum omnis nihil error. Dolorem, maiores tempora!</p>
             </div>
           </li>  
           <li>
             <div className='slide'>
                <div className='user-info'>
                    <img src={user_3} alt="" />
                    <div>
                        <h3>William jack 3</h3>
                        <span>Educity,USA</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse, sunt ea reiciendis deleniti doloribus nostrum voluptates architecto excepturi nam libero! Ratione impedit ea sit non magnam dolor numquam iste repudiandae mollitia cupiditate quo illum, quas et commodi distinctio illo obcaecati in consequatur harum omnis nihil error. Dolorem, maiores tempora!</p>
             </div>
           </li>  
           <li>
             <div className='slide'>
                <div className='user-info'>
                    <img src={user_4} alt="" />
                    <div >
                        <h3>William jack 4
                        <span>Educity,USA</span></h3>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse, sunt ea reiciendis deleniti doloribus nostrum voluptates architecto excepturi nam libero! Ratione impedit ea sit non magnam dolor numquam iste repudiandae mollitia cupiditate quo illum, quas et commodi distinctio illo obcaecati in consequatur harum omnis nihil error. Dolorem, maiores tempora!</p>
             </div>
           </li>  
          </ul>  
        </div>
        </div>
    )
}

export default Testimonials
