export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Kevin Curtin
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/kevincurtin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kevincurtin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://kevincurtin.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Substack
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
