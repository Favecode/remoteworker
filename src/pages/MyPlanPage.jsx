import React from 'react'
import { Lock, Crown } from 'lucide-react'
import Footer from '../components/Footer'
import styles from './MyPlanPage.module.css'

export default function MyPlanPage() {
  return (
    <div className={styles.page}>
      <div className={styles.center}>
        <div className={styles.card}>
          <div className={styles.lockIcon}><Lock size={22} color="var(--pink)" /></div>
          <p className={styles.label}>MY PLAN</p>
          <h2 className={styles.heading}>Your 90-day plan is for members</h2>
          <p className={styles.desc}>
            Standard and Premium members get a personalised 90-day execution plan, daily tasks, streak tracking and AI coach support. Upgrade to start yours today.
          </p>
          <button className={styles.upgradeBtn}>
            <Crown size={16} /> Upgrade to start my plan
          </button>
        </div>
      </div>

      {/* Social proof popup */}
      <div className={styles.popup}>
        <div className={styles.popupFlag}>🇳🇬</div>
        <div className={styles.popupText}>
          <p className={styles.popupMsg}><strong>A product manager</strong> from Ibadan just started her quarterly membership</p>
          <p className={styles.popupMeta}>7 minutes ago · <span className={styles.popupBrand}>⏱ Remote WorkHER</span></p>
        </div>
        <button className={styles.popupClose}>✕</button>
      </div>

      <Footer />
    </div>
  )
}
