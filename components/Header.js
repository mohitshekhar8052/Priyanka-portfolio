'use client'

import { useState } from 'react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', icon: 'fas fa-home', label: 'Home' },
    { id: 'about', icon: 'fas fa-user', label: 'About' },
    { id: 'skills', icon: 'fas fa-code', label: 'Skills' },
    { id: 'projects', icon: 'fas fa-folder', label: 'Projects' },
    { id: 'education', icon: 'fas fa-graduation-cap', label: 'Education' },
    { id: 'contact', icon: 'fas fa-envelope', label: 'Contact' },
  ]

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => setActiveSection(item.id)}
          aria-label={item.label}
        >
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  )
}
