import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePicture from '../../assets/images/profile-pictures/profile-pic-business-casual.png';
import heroPhoto from '../../assets/images/hero/hero-bg.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero section bg-transparent min-h-0">
      <div className="hero-content hero-layout max-w-none">
      <div className="hero-copy">
        <p className="eyebrow">daydin14</p>
        <h1>David Aydin</h1>
        <p className="role">Software Engineer</p>
        <p className="lead">Welcome to my portfolio! I am excited to share my journey and work with you.</p>
        <div className="socials">
          <a className="text-link" href="https://github.com/daydin14" target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" />
            GitHub Profile
          </a>
          <a className="text-link" href="https://www.linkedin.com/in/daydin14" target="_blank" rel="noopener noreferrer">
            <FaLinkedin aria-hidden="true" />
            LinkedIn Profile
          </a>
        </div>
      </div>
      <div className="hero-photos">
        <img className="portrait" src={profilePicture} alt="Portrait of David Aydin" />
        <img className="scene" src={heroPhoto} alt="David Aydin on a river" />
      </div>
      </div>
    </section>
  );
}
