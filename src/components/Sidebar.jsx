import React from 'react'
import {
  Home, Target, Briefcase, Wand2, Radio, BookOpen, FileText,
  MoreHorizontal, ChevronRight, Crown
} from 'lucide-react'
import styles from './Sidebar.module.css'

const navItems = [
  { icon: Home,      label: 'Home',      page: 'home' },
  { icon: Target,    label: 'My Plan',   page: 'myplan' },
  { icon: Briefcase, label: 'Jobs',      page: 'jobs' },
  { icon: Wand2,     label: 'AI tools',  page: 'aitools' },
  { icon: Radio,     label: 'Webinars',  page: 'webinars' },
  { icon: BookOpen,  label: 'Courses',   page: 'courses' },
  { icon: FileText,  label: 'Resources', page: 'resources' },
]

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <p className={styles.sectionLabel}>EXPLORE</p>
        {navItems.map(({ icon: Icon, label, page }) => (
          <button
            key={page}
            className={`${styles.navItem} ${activePage === page ? styles.active : ''}`}
            onClick={() => setActivePage(page)}
          >
            <Icon size={17} />
            <span>{label}</span>
          </button>
        ))}
        <button className={styles.navItem}>
          <MoreHorizontal size={17} />
          <span>More</span>
          <ChevronRight size={14} className={styles.chevron} />
        </button>
      </div>

      <div className={styles.joinBox}>
        <div className={styles.joinIcon}><Crown size={16} /></div>
        <p className={styles.joinTitle}>Join Remote WorkHER</p>
        <p className={styles.joinDesc}>Apply faster, track your applications, and increase your chances.</p>
        <button className={styles.joinBtn} onClick={() => setActivePage('home')}>
          Get started →
        </button>
      </div>
    </aside>
  )
}
