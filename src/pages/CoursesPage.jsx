import React, { useState } from 'react'
import { Search, Star, Crown } from 'lucide-react'
import Footer from '../components/Footer'
import styles from './CoursesPage.module.css'

const courses = [
  { icon: '🚀', bg: '#FFF0F0', label: 'Turn Your Knowledge Into Opportunities', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: true, rating: null },
  { icon: '🚀', bg: '#FFF0F0', label: 'How to Become Visible in Your Industry', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: true, rating: null },
  { icon: '📣', bg: '#FFF0F0', label: 'How to Create Content That Attracts Opportunities', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: true, rating: null },
  { icon: '🎨', bg: '#EFF6FF', label: 'How to Build a Career Brand Online', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: true, rating: null },
  { icon: '🎨', bg: '#EFF6FF', label: 'How to Build an Offer People Will Pay For', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: true, rating: null },
  { icon: '🌐', bg: '#EFF6FF', label: 'Remote Work Tools You Actually Need', author: 'Valerie Momoh', level: 'Beginner', comingSoon: true, rating: null },
  { icon: '🌐', bg: '#EFF6FF', label: 'How to Build a Job Search System with Remote...', author: 'Toyosi', level: 'Beginner', comingSoon: true, rating: null },
  { icon: '💼', bg: '#EFF6FF', label: 'How to Bridge the Experience Gap as a Job...', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: true, rating: null },
  { icon: '🎤', bg: '#FFF0F0', label: 'How to Ace Your Interviews', author: 'Toyosi', level: 'All Levels', comingSoon: true, rating: null },
  { icon: '🚀', bg: '#FFF0F0', label: 'Handling Payments & Invoicing', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: false, rating: null },
  { icon: '🌐', bg: '#EFF6FF', label: 'How to Land a Remote Job', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: false, rating: 5 },
  { icon: '💼', bg: '#DBEAFE', label: 'Using Linkedin like a Pro', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: false, rating: 5 },
  { icon: '📣', bg: '#FFF0F0', label: 'Content for Visibility', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: false, rating: 4.5 },
  { icon: '🎨', bg: '#EFF6FF', label: 'Portfolio Building 101', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: false, rating: null },
  { icon: '💵', bg: '#ECFDF5', label: 'Getting your First Freelance Client', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: false, rating: null },
  { icon: '💵', bg: '#ECFDF5', label: 'Freelancing 101', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: false, rating: null },
  { icon: '🚀', bg: '#FFF0F0', label: 'Finding Your Niche', author: 'Adeife Adeoye', level: 'Beginner', comingSoon: false, rating: null },
]

export default function CoursesPage() {
  const [search, setSearch] = useState('')

  const filtered = courses.filter(c =>
    c.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={styles.page}>
      <p className={styles.eyebrow}>SKILL UP</p>
      <h1 className={styles.heading}>
        Learn what gets you <span className={styles.pink}>hired</span>
      </h1>
      <p className={styles.sub}>Build in-demand skills with expert-led courses.</p>

      <div className={styles.searchWrap}>
        <Search size={14} className={styles.searchIcon} />
        <input
          className={styles.searchInput}
          placeholder="Search courses..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <h2 className={styles.sectionTitle}>All Courses</h2>

      <div className={styles.grid}>
        {filtered.map((course, i) => (
          <div key={i} className={styles.card}>
            {course.comingSoon && (
              <div className={styles.soonBadge}>COMING SOON</div>
            )}
            <div className={styles.iconWrap} style={{ background: course.bg }}>
              <span className={styles.icon}>{course.icon}</span>
            </div>
            <h3 className={styles.courseLabel}>{course.label}</h3>
            <p className={styles.author}>{course.author}</p>
            {course.rating && (
              <div className={styles.ratingRow}>
                <Star size={12} fill="#F59E0B" color="#F59E0B" />
                <span className={styles.ratingVal}>{course.rating}</span>
                <span className={styles.ratingCount}>(2)</span>
              </div>
            )}
            <p className={styles.level}>{course.level}</p>
            {course.comingSoon ? (
              <button className={styles.soonBtn}>Coming Soon</button>
            ) : (
              <button className={styles.joinBtn}>
                <Crown size={12} /> Join Remote Workher
              </button>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}
