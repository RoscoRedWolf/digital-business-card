import GitHubIcon from './assets/github-icon.png';
import InstagramIcon from './assets/instagram-icon.png';
import LinkedInIcon from './assets/linkedin-icon.png';

export default function Footer() {
  return(
    <div className='footer'>
      <a href='https://github.com/RoscoRedWolf'><img className='social-icons' src={GitHubIcon} /></a>
      <a href='https://www.instagram.com/andy45w/'><img className='social-icons' src={InstagramIcon} /></a>
      <a href='https://www.linkedin.com/in/andrew-woods-51092133a'><img className='social-icons' src={LinkedInIcon} /></a>
    </div>
  )
}