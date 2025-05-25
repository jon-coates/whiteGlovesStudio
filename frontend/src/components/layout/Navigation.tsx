'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  isMenuOpen: boolean;
  onMenuClose: () => void;
}

export const Navigation = ({ isMenuOpen, onMenuClose }: NavigationProps) => {
  const pathname = usePathname();

  const links = [
    { href: '/services', label: 'Services' },
  
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:items-center md:space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-500 ${
              pathname === link.href
                ? 'text-yellow-600 dark:text-yellow-500'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-white p-4 shadow-lg dark:bg-gray-900 md:hidden">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onMenuClose}
                className={`text-base font-medium transition-colors hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-500 ${
                  pathname === link.href
                    ? 'text-yellow-600 dark:text-yellow-500'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}; 