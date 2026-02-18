import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mic } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Newsletter', path: '/newsletter' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-navy-950/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 max-w-5xl">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
            <Mic className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-white">
            Kevin Curtin
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-3 py-1.5 rounded-md text-sm transition-colors',
                location.pathname === item.path
                  ? 'text-white font-medium'
                  : 'text-gray-400 hover:text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-navy-950/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1 max-w-5xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'px-3 py-2.5 rounded-md text-sm transition-colors',
                  location.pathname === item.path
                    ? 'text-white font-medium'
                    : 'text-gray-400 hover:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
