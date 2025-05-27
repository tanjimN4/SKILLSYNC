const Footer = () => {
  return (
    <footer className="bg-gradient-to from-gray-900 via-emerald-800 via-teal-900 via-cyan-800 via-sky-900 to-gray-900 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Branding & Tagline */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold">SkillSync</h2>
          <p className="text-sm">Track. Learn. Grow. Together.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-start md:justify-end space-x-6 text-2xl">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github hover:text-white"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin hover:text-white"></i>
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SkillSync. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
