export default function AboutSection() {
  return (
    <section id="about" className="bg-base-100 px-4 py-16 md:py-24" aria-labelledby="about-heading">
      <div className="mx-auto w-full max-w-3xl">
        <h2 id="about-heading" className="mb-6 text-4xl font-bold md:text-5xl">About Me</h2>
        <div className="space-y-4 text-lg leading-relaxed text-base-content/80">
          <p>
            I&apos;m David Aydin, a software engineer. I earned a B.S. in Computer Science from Saint Joseph&apos;s University and completed General Assembly&apos;s Software Engineering Immersive.
          </p>
          <p>
            My background is in C# and .NET, including ASP.NET and Blazor, along with SQL and system integrations. At Key Software Systems, I investigated integration issues in dispatch and final-mile delivery workflows, resolved SQL data issues, and built reusable report templates in Azure DevOps. At Medfuse, I contributed C# and Blazor Server features and built data charts that helped internal teams present product insights.
          </p>
          <p>
            Outside of work, I build and troubleshoot computers and tinker with other tech. I&apos;ve set up media servers like Plex, Mumble, and Teamspeak, run a home mesh Wi-Fi network, and used virtual machines for a separate dev environment. I&apos;ve also done car audio work, including a subwoofer replacement, and most recently modded my Nintendo Switch.
          </p>
        </div>
      </div>
    </section>
  );
}
