import React from 'react'
import "./Home.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';
const Contact = () => {
    return (
      <>
        <h2 className="contact--header">Team</h2>
        <div className="contact">
        
          <div className="contact--card card--david" data-aos="fade-right" data-aos-offset="20"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">

            <div className="contact--imgContainer">
              <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light" alt="David - Developer" className="contact--img" />
            </div>

            <div className="contact--info"> 
                <h3>David Asaolu</h3>
                <p> Full Stack Developer</p>
                <div className="contact--links">
                <a href="https://www.linkedin.com/in/david-asaolu234/"
                  target="_blank" rel="noopener noreferrer"><IconButton><LinkedInIcon /></IconButton> </a>

                <a href="https://www.facebook.com/asaolu.david.9" target="_blank" rel="noopener noreferrer">
                <IconButton><FacebookIcon /></IconButton></a>

                <a href="http://github.com/dha-stix" target="_blank" rel="noopener noreferrer">
                <IconButton><GitHubIcon /></IconButton></a>
                
                <a href="https://twitter.com/Arshadayvid" target="_blank" rel="noopener noreferrer">
                <IconButton> <TwitterIcon /></IconButton></a>
                </div>
            </div>
            
          </div>
       
          <div className="contact--card" data-aos="fade-left" data-aos-offset="20"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">

            <div className="contact--imgContainer">
              <img  className="contact--img" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light" alt="Favour - Designer" />
            </div>

              <div className="contact--info"> 
                <h3>Favour Oluwanifemi</h3>
                <p> UI/UX Designer</p>
                <div className="contact--links">
                <a href="https://www.linkedin.com/in/favour-oluwanifemi-f-2b8016199/" target="_blank" rel="noopener noreferrer">
                <IconButton><LinkedInIcon /></IconButton></a>

                <a href="https://www.facebook.com/ayomiposi.nifemi.3" target="_blank" rel="noopener noreferrer">
                <IconButton> <FacebookIcon /> </IconButton></a>
                </div>
            </div> 
          </div> 
         </div>
      </>
    )
}

export default Contact
