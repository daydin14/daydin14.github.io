import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePicture from '../../assets/images/profile-pictures/profile-pic-business-casual.png';
import heroPhoto from '../../assets/images/hero/hero-bg.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero scroll-mt-24 bg-base-200">
      <div className="hero-content w-full max-w-6xl flex-col gap-10 py-12 lg:flex-row-reverse lg:py-20">
        <div className="relative mx-auto w-full max-w-md pb-8">
          <img
            className="aspect-[16/11] w-full rounded-box object-cover object-[72%_42%] shadow-xl"
            src={heroPhoto}
            alt="David Aydin on a river"
          />
          <div className="avatar absolute -bottom-2 -left-2">
            <div className="w-32 rounded-full ring ring-primary ring-offset-2 ring-offset-base-200 md:w-36">
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
