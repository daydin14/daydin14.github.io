import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePicture from '../../assets/images/profile-pictures/profile-pic-business-casual.png';

export default function Hero() {
  return (
    <section id="home" className="hero scroll-mt-24 bg-base-200">
      <div className="hero-content w-full max-w-6xl flex-col gap-10 py-16 lg:flex-row lg:py-24">
        <div className="indicator mb-6">
          <span className="indicator-item indicator-bottom badge badge-success gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-content opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success-content" />
            </span>
            Open to Work
          </span>
          <div className="avatar">
            <div className="w-40 rounded-full ring ring-primary ring-offset-4 ring-offset-base-100 md:w-48">
              <img src={profilePicture} alt="Portrait of David Aydin" />
            </div>
          </div>
        </div>
        <div className="max-w-xl">
          <div className="badge badge-primary badge-outline">daydin14</div>
          <h1 className="mt-3 text-5xl font-bold md:text-7xl">David Aydin</h1>
          <p className="mt-3 text-xl font-semibold">Software Engineer</p>
          <p className="mt-4 text-lg text-base-content/80">
            Welcome to my portfolio! I am excited to share my journey and work with you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="https://github.com/daydin14" target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" />
              GitHub Profile
            </a>
            <a className="btn btn-outline" href="https://www.linkedin.com/in/daydin14" target="_blank" rel="noopener noreferrer">
              <FaLinkedin aria-hidden="true" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
