import React from 'react'
import { Search, User, Building2 } from 'lucide-react'
import styles from './Topbar.module.css'

export default function Topbar({ activePage }) {
  const placeholders = {
    home: 'Search Remote Workher...',
    jobs: 'Search jobs by role, company, location...',
    aitools: 'Search AI tools...',
    webinars: 'Search webinars...',
    courses: 'Search courses...',
    resources: 'Search resources & templates...',
    myplan: 'Search Remote Workher...',
  }

  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoRemote}>remote</span>
          <span className={styles.logoWork}>work</span>
          <span className={styles.logoHer}>her</span>
        </a>
        <div className={styles.searchWrap}>
          <Search size={15} className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            placeholder={placeholders[activePage] || 'Search Remote Workher...'}
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.tabActive}`}>
            <User size={13} /> Talent
          </button>
          <button className={styles.tab}>
            <Building2 size={13} /> Recruiter
          </button>
        </div>
        <button className={styles.loginBtn}>Login</button>
        <button className={styles.hiringBtn}>I'm hiring</button>
      </div>
    </header>
  )
}
