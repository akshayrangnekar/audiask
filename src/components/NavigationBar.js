import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav className="bg-primary w-full">
      <div className="flex items-center justify-between py-2">
        {/* Left Side: Logo and Primary Links */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="text-lg font-bold pl-4">
            <Link href="/" className="text-primary-inverse hover:text-primary-inverse">
              Logo
            </Link>
          </div>
          {/* Primary Links with 20px spacing */}
          <div className="ml-5 flex space-x-5">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-inverse-dull hover:text-primary-inverse"
            >
              Google
            </a>
            <a
              href="https://www.yahoo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-inverse-dull hover:text-primary-inverse"
            >
              Yahoo
            </a>
          </div>
        </div>
        {/* Right Side: Secondary Links */}
        <div className="flex space-x-5 pr-4">
          <a
            href="https://news.bbc.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-inverse-dull hover:text-primary-inverse"
          >
            BBC
          </a>
          <a
            href="https://www.cnn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-inverse-dull hover:text-primary-inverse"
          >
            CNN
          </a>
        </div>
      </div>
    </nav>
  );
}