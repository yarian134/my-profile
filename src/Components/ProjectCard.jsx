import React from 'react'

const ProjectCard = () => {
    return (
        <div>
            <div className='project-card'>

                <div className='project-item'>
                    <h1  className='project-item'>Projects</h1>
                    <h5 className='project-item'>
                    In-depth Case Studies to show you what I can offer and how I work</h5>
                </div>

            </div>
            <div className='skills'>
        <div className='skill-element'>
          <h2>Ecommerce</h2>
          <div className='image-filed'>
            <a href="https://mizan1235.github.io/Ecommerce_project/" target='_blank' rel="noreferrer">
          <img src="../Images/ecommerce.png" alt="Ecommerce" /></a>
          </div>
             

          <div className='skill-val'>
            
            <div className='item-12'> <h4>React</h4></div>
          </div>
          <div className='skill-val'>
            
            <div className='item-12'> <h4>JavaScript</h4></div>
          </div>
          <div className='skill-val'>
            
            <div className='item-12'> <h4>HTML/CSS</h4></div>
          </div>
          <div className='skill-val'>
            
            <div className='item-12'> <h4>Django</h4></div>
          </div>
          
        </div>
        <div className='skill-element'>
          <h2>Job Search</h2>

        <div className='image-filed'>
            <a href="https://mizan1235.github.io/Job_react_app/" target='_blank' rel="noreferrer">
          <img src="../Images/job-search.png" alt="Ecommerce" /></a>
          </div>
          
          <div className='skill-val'>
            
            <div className='item-12'> <h4>React</h4></div>
          </div>
          <div className='skill-val'>
            
            <div className='item-12'> <h4>JavaScript</h4></div>
          </div>
          <div className='skill-val'>
            
            <div className='item-12'> <h4>HTML/CSS</h4></div>
          </div>
          <div className='skill-val'>
            
            <div className='item-12'> <h4>Django</h4></div>
          </div>
        </div>
        <div className='skill-element'>
          <h2>Weather</h2>
        <div className='image-filed'>
            <a href="https://mizan1235.github.io/Weather/" target='_blank' rel="noreferrer">
          <img src="../Images/weather.png" alt="Ecommerce" /></a>
          </div>
          
          
          
          <div className='skill-val'>
            
            <div className='item-12'> <h4>HTML/CSS</h4></div>
          </div>
          <div className='skill-val'>
            
            <div className='item-12'> <h4>JavaScript</h4></div>
          </div>
          
        </div>

      </div>

        </div>
    )
}

export default ProjectCard