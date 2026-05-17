import React, { useState } from 'react'
import { Search, Clock, MoreHorizontal, ChevronDown, MessageCircle, Video, Bell } from 'lucide-react'
import Footer from '../components/Footer'
import styles from './WebinarsPage.module.css'

const tabs = ['Upcoming Webinars', 'Live Now', 'Past Webinars', 'My Registrations']

const webinars = [
  { month: 'MAY', day: '22', title: 'Live Social Media Page Audit', desc: 'Watch a live transformation of social...', date: 'Fri, May 22', time: '3:00 PM WAT', duration: '60 min', host: 'Adeife Adeoye' },
  { month: 'MAY', day: '29', title: "Let's Build Your Freelance Offer ...", desc: 'Learn how to package your skills into a...', date: 'Fri, May 29', time: '3:00 PM WAT', duration: '60 min', host: 'Adeife Adeoye' },
  { month: 'JUN', day: '5',  title: "What's Wrong With Your...", desc: 'Stop sending applications that vanish...', date: 'Fri, Jun 5', time: '2:00 PM WAT', duration: '60 min', host: 'Omotoyosi Idowu' },
  { month: 'JUN', day: '12', title: 'How to build a strong online...', desc: 'Master the ADEIFE framework to...', date: 'Fri, Jun 12', time: '3:00 PM WAT', duration: '60 min', host: 'Adeife Adeoye' },
  { month: 'JUN', day: '19', title: 'Client Acquisition Workshop —...', desc: '', date: 'Fri, Jun 19', time: '3:00 PM WAT', duration: '60 min', host: 'Remote Workher' },
  { month: 'JUN', day: '26', title: 'LinkedIn Profile Rebuild — Live...', desc: 'Rebuild your profile in real-time to sto...', date: 'Fri, Jun 26', time: '3:00 PM WAT', duration: '60 min', host: 'Remote Workher' },
  { month: 'JUL', day: '3',  title: "Let's fix your content strategy —...", desc: 'Stop guessing what to post and start...', date: 'Fri, Jul 3', time: '3:00 PM WAT', duration: '60 min', host: 'Valerie Momoh' },
  { month: 'JUL', day: '10', title: 'How to use AI to Build...', desc: 'Master the specific AI tools and...', date: 'Fri, Jul 10', time: '3:00 PM WAT', duration: '60 min', host: 'Remote Workher' },
]

const whatToExpect = [
  { icon: MessageCircle, color: '#E91E8C', bg: '#FCE4F3', title: 'Interactive Q&A', desc: 'Ask questions and get expert answers live.' },
  { icon: Video,         color: '#10B981', bg: '#D1FAE5', title: 'Session Recordings', desc: 'Watch recordings anytime in your learning library.' },
  { icon: Bell,          color: '#F59E0B', bg: '#FEF3C7', title: 'Calendar Reminders', desc: 'Get reminded before every session so you never miss out.' },
]

export default function WebinarsPage() {
  const [activeTab, setActiveTab] = useState('Upcoming Webinars')

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <p className={styles.eyebrow}>LIVE, WEEKLY</p>
        <h1 className={styles.heading}>Webinars</h1>
        <p className={styles.sub}>Join expert-led webinars, ask questions, and grow together.</p>

        <div className={styles.tabs}>
          {tabs.map(t => (
            <button
              key={t}
              className={`${styles.tab} ${activeTab === t ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(t)}
            >
              {t}{t === 'Upcoming Webinars' ? ' 8' : ''}
            </button>
          ))}
        </div>

        <div className={styles.searchRow}>
          <div className={styles.searchWrap}>
            <Search size={14} className={styles.searchIcon} />
            <input className={styles.searchInput} placeholder="Search live sessions..." />
          </div>
          <button className={styles.catBtn}>All Categories <ChevronDown size={13} /></button>
        </div>

        <h2 className={styles.sectionTitle}>Upcoming Webinars</h2>

        <div className={styles.list}>
          {webinars.map((w, i) => (
            <div key={i} className={styles.row}>
              <div className={styles.dateBox}>
                <span className={styles.dateMonth}>{w.month}</span>
                <span className={styles.dateDay}>{w.day}</span>
              </div>
              <div className={styles.thumb} />
              <div className={styles.info}>
                <p className={styles.wTitle}>{w.title}</p>
                {w.desc && <p className={styles.wDesc}>{w.desc}</p>}
                <p className={styles.wHost}>{w.host}</p>
              </div>
              <div className={styles.meta}>
                <span className={styles.dateTime}>{w.date}</span>
                <span className={styles.duration}><Clock size={12} /> {w.duration}</span>
              </div>
              <div className={styles.actions}>
                <button className={styles.registerBtn}>Register</button>
                <button className={styles.moreBtn}><MoreHorizontal size={15} /></button>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>

      <div className={styles.right}>
        <p className={styles.rightTitle}>What to Expect</p>
        {whatToExpect.map(({ icon: Icon, color, bg, title, desc }) => (
          <div key={title} className={styles.expectItem}>
            <div className={styles.expectIcon} style={{ background: bg }}>
              <Icon size={16} color={color} />
            </div>
            <div>
              <p className={styles.expectTitle}>{title}</p>
              <p className={styles.expectDesc}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
