import React, { useState } from 'react'
import { HomeIcon, CodeIcon, ShieldCheckIcon, BookOpenIcon, SettingsIcon, PhoneIcon, LogOutIcon, X, Menu } from 'lucide-react'
import styles from './navbar.module.css'
import logo from '../../logo.svg'
import Button from '../../components/ui/button'
import Select from '../../components/ui/select'
import { Link, useLocation, useNavigate } from 'react-router'
import { useAuth } from '../../context/auth-context'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState('UtkarshDhairyaPanwar');
  const { logout } = useAuth()
  const navigate = useNavigate()
  const sidebarLinks = [
    { name: 'Repositories', href: '/', icon: HomeIcon },
    { name: 'AI Code Review', href: '/code-review', icon: CodeIcon },
    { name: 'Cloud Security', href: '/security', icon: ShieldCheckIcon },
    { name: 'How to Use', href: '/guide', icon: BookOpenIcon },
    { name: 'Settings', href: '/settings', icon: SettingsIcon },
    { name: 'Support', href: '/support', icon: PhoneIcon },
    { name: 'Logout', href: '/logout', icon: LogOutIcon },
  ]

  const userOptions = [
    { value: 'UtkarshDhairyaPanwar', label: 'UtkarshDhairyaPanwar' },
  ];
  const currentHref = useLocation().pathname;

  const handleLogout = () => {
    logout()
    navigate('/auth')
  }


  return (
    <div className={`${styles.navbar} ${isOpen ? styles.navActive : styles.notActive}`}>
      <div className={styles.mobileHeader}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
          <span className={styles.logoText}>CodeAnt AI</span>
        </div>
        <Button
          variant="ghost"
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={styles.menuIcon} />
          ) : (
            <Menu className={styles.menuIcon} />
          )}
        </Button>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <div className={styles.selectContainer}>
            <Select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              options={userOptions}
            />
        </div>
        {sidebarLinks.map((link) => {
          const Icon = link.icon
          if (link.href === '/logout') {
            return (
              <div
                key={link.name}
                className={currentHref === link.href ? `${styles.navLink} ${styles.active}` : styles.navLink}
                onClick={handleLogout}
              >
                <Icon className={styles.navIcon} />
                <span>{link.name}</span>
              </div>
            )
          }
          return (
            <Link
              to={link.href}
              key={link.name}
              className={currentHref === link.href ? `${styles.navLink} ${styles.active}` : styles.navLink}
              onClick={() => setIsOpen(false)}
            >
              <Icon className={styles.navIcon} />
              <span>{link.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Navbar
