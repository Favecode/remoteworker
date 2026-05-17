import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoSmall}>remote</span>
            <span><span className={styles.logoBlack}>work</span><span className={styles.logoPink}>her</span></span>
          </div>
          <p className={styles.tagline}>Land remote roles, track wins, and grow your career — built for women on the rise.</p>
        </div>

        <div className={styles.col}>
          <p className={styles.colHead}>EXPLORE</p>
          {['Jobs','AI tools','My Wins','Resources'].map(l => <a key={l} href="#" className={styles.link}>{l}</a>)}
        </div>

        <div className={styles.col}>
          <p className={styles.colHead}>TOOLS</p>
          {['Resume Builder','Cover Letter AI','Salary Analyzer','Tax Calculator'].map(l => <a key={l} href="#" className={styles.link}>{l}</a>)}
        </div>

        <div className={styles.col}>
          <p className={styles.colHead}>COMPANY</p>
          {['About','Contact','Privacy','Terms'].map(l => <a key={l} href="#" className={styles.link}>{l}</a>)}
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Remote Workher. All rights reserved.</span>
        <span>Made with ♥ for women on the rise.</span>
      </div>
    </footer>
  )
}
