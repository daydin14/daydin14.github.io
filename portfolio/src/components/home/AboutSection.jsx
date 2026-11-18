export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-base-100 px-4 py-16 md:py-24" aria-labelledby="about-heading">
      <div className="mx-auto w-full max-w-3xl">
        <h2 id="about-heading" className="mb-6 text-4xl font-bold md:text-5xl">About Me</h2>
        <blockquote className="mb-6 border-l-4 border-secondary pl-4 text-2xl">
          Fun fact: I&apos;m a triplet!
        </blockquote>
        <p className="text-lg leading-relaxed text-base-content/80">
          Hello!
          <br />
          I am a developer with a strong background in full-stack development.
          Proficient in both front-end and back-end technologies, with a passion for creating responsive web applications, data visualizations, and service integrations.
          I am committed to delivering high-quality code and optimizing performance to enhance user experiences.
          Seeking opportunities to contribute my expertise and passion for problem-solving to a dynamic software development team.
        </p>
      </div>
    </section>
  );
}
