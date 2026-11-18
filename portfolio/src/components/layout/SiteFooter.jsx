const companyName = 'daydin14';
const rights = 'All rights reserved.';
const author = 'David Aydin';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-center site-footer bg-transparent text-base-content">
      <aside>
        <p>{companyName} &copy; {year} {rights}</p>
        <p>Created by {author}</p>
      </aside>
    </footer>
  );
}
