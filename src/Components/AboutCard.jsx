import React from 'react'

const AboutCard = () => {
  return (
    <div>
      <div className='project-card'>

        <div className='project-item'>
          <h1 className='project-item'>Skill Overview</h1>
          <h5 className='project-item'>
          
          I  am a Full Stack Developer with experience in building web applications using React, Django, and PHP. I have also worked on Machine Learning projects . I am passionate about learning new technologies and building projects that solve real-world problems.
          </h5>
        </div>

      </div>

      <div className='project-card'>

        <div className='project-item'>
          <h1 className='project-item'>Qualfications</h1>
          <h5 className='project-item'>
            B.Tech in Computer Science and Engineering(2021-25)
           </h5 >
           <a href="https://nitdgp.ac.in/" target='_Blank' rel="noreferrer" style={{textDecoration:'none',color:'black'}}> 
           <h6  className='project-item'>National Institute of technology Durgapur</h6></a>
        </div>

      </div>

      <div className='project-card'>

        <div className='project-item'>
          <h1 className='project-item'>Hobbies and Extra Curricular Activities</h1>
          <h5 className='project-item'>
            Listening Music
           </h5 >
           <h5 className='project-item'>Playing Cricket/Chess</h5>
           <h5 className='project-item'>Surfing Internet</h5>
           <h5 className='project-item'>Reading Technical Books/Journals</h5>
           
        </div>

      </div>
    </div>
  )
}

export default AboutCard