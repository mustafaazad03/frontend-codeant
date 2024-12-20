import React, { useState } from 'react'
import { HomeIcon, CodeIcon, ShieldCheckIcon, BookOpenIcon, SettingsIcon, PhoneIcon, LogOutIcon, X } from 'lucide-react'
import styles from './sidebar.module.css'
import logo from '../logo.svg'
import ScrollArea from '../components/ui/scroll-area'
import { Link } from 'react-router'
import Button from '../components/ui/button'

const sidebarLinks = [
  { name: 'Repositories', href: '/', icon: HomeIcon },
  { name: 'AI Code Review', href: '/code-review', icon: CodeIcon },
  { name: 'Cloud Security', href: '/security', icon: ShieldCheckIcon },
  { name: 'How to Use', href: '/guide', icon: BookOpenIcon },
  { name: 'Settings', href: '/settings', icon: SettingsIcon },
  { name: 'Support', href: '/support', icon: PhoneIcon },
  { name: 'Logout', href: '/logout', icon: LogOutIcon },
]

export function Sidebar({ className }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className={styles.mobileMenuButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <X className="h-6 w-6" />
      </Button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''} ${className}`}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="CodeAnt AI Logo"
            className={styles.logoImage}
          />
          <span className={styles.logoText}>CodeAnt AI</span>
        </div>
        <ScrollArea className={styles.nav}>
          <nav>
            {sidebarLinks.map((link) => (
              <Link key={link.name} href={link.href} className={styles.navLink}>
                <link.icon className={styles.navIcon} />
                {link.name}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </>
  )
}

