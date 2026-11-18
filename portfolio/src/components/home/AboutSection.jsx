export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-base-100 px-4 py-16 md:py-24" aria-labelledby="about-heading">
      <div className="mx-auto w-full max-w-3xl">
        <h2 id="about-heading" className="mb-6 text-4xl font-bold md:text-5xl">About Me</h2>
        <div className="space-y-4 text-lg leading-relaxed text-base-content/80">
          <p>
            I&apos;m David Aydin, a software engineer in Asbury Park, NJ, open to relocation or remote work.
            I earned a B.S. in Computer Science from Saint Joseph&apos;s University and completed General Assembly&apos;s Software Engineering Immersive.
          </p>
          <p>
            My background is in C# and .NET, including ASP.NET and Blazor, along with SQL and system integrations.
            At Key Software Systems I investigated integration issues in dispatch and final-mile delivery workflows, resolved SQL data leaks, and built reusable report templates in Azure DevOps.
            At Medfuse I contributed C# and Blazor Server features and built data charts that helped internal teams present product insights.
          </p>
          <p>
            I&apos;m now pursuing IT support, software, and data roles.
            Outside of work, I build and troubleshoot PCs.
          </p>
        </div>
      </div>
    </section>
  );
}
