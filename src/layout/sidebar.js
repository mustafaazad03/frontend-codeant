import React, { useState } from 'react'
import { HomeIcon, CodeIcon, ShieldCheckIcon, BookOpenIcon, SettingsIcon, PhoneIcon, LogOutIcon, X, Menu } from 'lucide-react'
import styles from './sidebar.module.css'
import logo from '../logo.svg'
import { Link, useLocation } from 'react-router'
import Button from '../components/ui/button'
import Select from '../components/ui/select'

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
  const [selectedUser, setSelectedUser] = useState('UtkarshDhairyaPanwar');
  const userOptions = [
    { value: 'UtkarshDhairyaPanwar', label: 'UtkarshDhairyaPanwar' },
  ];
  const currentHref = useLocation().pathname;
  console.log(currentHref);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className={styles.mobileMenuButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
      </Button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''} ${className}`}>
        <div className={styles.logo}>
          <img src={logo} alt="CodeAnt AI Logo" className={styles.logoImage} />
          <span className={styles.logoText}>CodeAnt AI</span>
        </div>
        <div className={styles.selectContainer}>
          <Select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            options={userOptions}
          />
        </div>
        <nav className={styles.nav}>
          {sidebarLinks.slice(0, -2).map((link) => {
            const Icon = link.icon
            return (
              <Link key={link.name} href={link.href} className={link.href === currentHref ? styles.selectedRoute : styles.navLink }>
                <Icon className={styles.navIcon} />
                <span className={styles.navText}>{link.name}</span>
              </Link>
            )
          })}
        </nav>
        <nav className={styles.bottomNav}>
          {sidebarLinks.slice(-2).map((link) => {
            const Icon = link.icon
            return (
              <Link key={link.name} href={link.href} className={link.href === currentHref ? styles.selectedRoute : styles.navLink }>
                <Icon className={styles.navIcon} />
                <span className={styles.navText}>{link.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}

