import React from 'react'
import './index.scss'
const PracticeArea = () => {
  return (
    <div>
       <div className='titleTextArea'>
        <h1>Practice Areas</h1>
        <div className='staticCards'>
            <div className='toppart'>

            <div className='part1'>
                <div className='icon'><i class="fa-solid fa-landmark-dome"></i></div>
                <div className='part1text'>
                    <h3>Lorem ipsum dolor sit.</h3>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                </div>
            </div>
            <div className='part1'>
                <div className='icon'><i class="fa-solid fa-shield-halved"></i></div>
                <div className='part1text'>
                     <h3>Lorem ipsum dolor sit.</h3>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                </div>
            </div>
            <div className='part1'>
                <div className='icon'><i class="fa-solid fa-people-roof"></i></div>
                <div className='part1text'>
                <h3>Lorem ipsum dolor sit.</h3>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                </div>
            </div>


            </div>
           <div className='bottomPart'>

           <div className='part2'>
            <div className='icon'><i class="fa-solid fa-gun"></i></div>
            <div className='part1text'>
            <h3>Lorem ipsum dolor sit.</h3>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
            </div>
           </div>
           <div className='part2'>
            <div className='icon'><i class="fa-solid fa-plane-departure"></i></div>
            <div className='part1text'>
            <h3>Lorem ipsum dolor sit.</h3>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
            </div>
           </div>
           <div className='part2'>
            <div className='icon'><i class="fa-solid fa-house-user"></i></div>
            <div className='part1text'>
            <h3>Lorem ipsum dolor sit.</h3>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
            </div>
           </div>

            </div>
        </div>
       </div>
    </div>
  )
}

export default PracticeArea