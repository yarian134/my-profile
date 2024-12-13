import React from 'react'

const SkillsCard = () => {
  return (
    <div>
      <div className='skill-card'>

        <div className='skill-item'>
          <h1>Skills Overview</h1>
          <h5 className='project-item'>
            I have more than 2 years' experience building rich web applications  and I have implemented Kolmogorov Arnold Networks(KAN) in python using tensorflow</h5>
        </div>

      </div>
      <div className='skills'>
        <div className='skill-element'>
          <div className='image-filed'></div>
          <h2>Front-end</h2>

          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>React</h4></div>
          </div>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>JavaScript</h4></div>
          </div>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>HTML/CSS</h4></div>
          </div>
          
        </div>
        <div className='skill-element'>
          <h2>Backend</h2>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>Python/Django</h4></div>
          </div>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>SQL/MySQL</h4></div>
          </div>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>PHP</h4></div>
          </div>
        </div>
        <div className='skill-element'>
          <h2>Others</h2>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>Machine Learning</h4></div>
          </div>
          <div className='skill-val'>
            <div style={{ 'color': 'blue', 'font-size': '25px' }} className='item-12'> &#10004;</div>
            <div className='item-12'> <h4>Deep Learning</h4></div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default SkillsCard