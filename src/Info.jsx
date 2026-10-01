import roscoImg from './assets/rosco-profile.png';
import envelope from './assets/envelope.png';

export default function Info() {
  return (
    <>
      <img 
        className='rosco-profile-pic' 
        src={roscoImg} 
        alt="Rosco profile picture" 
      />
      <h1 className='name'>Rosco RedWolf</h1>
      <h3 className='title'>Frontend Developer</h3>
      <p className='github-link'><a href='https://github.com/RoscoRedWolf'>Rosco Redwolf GitHub</a></p>
      <button className='email-btn'>
        <img className='envelope' src={envelope} />
        Email
      </button>
    </>
  );
}