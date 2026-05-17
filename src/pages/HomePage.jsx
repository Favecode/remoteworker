import React from 'react'
import { Briefcase, Wand2, Trophy, Radio, BookOpen, ChevronRight, Heart, ArrowRight, Bell, Crown } from 'lucide-react'
import styles from './HomePage.module.css'

const quickActions = [
  { icon: '💼', emoji: true, label: 'Jobs', sub: 'Curated remote roles', color: '#FEF3C7', page: 'jobs' },
  { icon: Wand2, label: 'AI tools', sub: 'Career toolkit', color: '#EDE9F6', page: 'aitools' },
  { icon: Trophy, label: 'My Wins', sub: 'Log your wins', color: '#FEF3C7', page: 'home' },
  { icon: Radio, label: 'Live sessions', sub: 'Weekly with experts', color: '#FCE7F3', page: 'webinars' },
  { icon: BookOpen, label: 'Courses', sub: 'Skill up on demand', color: '#DBEAFE', page: 'courses' },
]

const latestJobs = [
  { initials: '6', bg: '#10B981', company: '6crickets', title: 'Customer Success / Client Support Associate', type: 'Remote', salary: 'Competitive' },
  { initials: 'HM', bg: '#E91E8C', company: 'Hurrikaine Media', title: 'Social Media Strategist & Content Creator', type: 'Hybrid', salary: 'Competitive' },
  { initials: 'HM', bg: '#E91E8C', company: 'Hurrikaine Media', title: 'Digital Growth & Performance Marketing Strategist', type: 'Hybrid', salary: 'Competitive' },
  { initials: 'GM', bg: '#6B7280', company: 'Gasco Marine', title: 'Admin Assistant', type: 'Remote', salary: 'Competitive' },
]

const aiTools = [
  { icon: '📄', label: 'CV optimizer', desc: 'Get AI feedback on your CV — no login needed' },
  { icon: '✉️', label: 'Cover letter generator', desc: 'Personalized cover letters in seconds' },
  { icon: '🔍', label: 'Resume checker', desc: 'Scan for impact, keywords & ATS score' },
  { icon: '💰', label: 'Salary calculator', desc: 'Know your worth in any role or market' },
  { icon: '📊', label: 'Skills gap analyzer', desc: "See what's missing for your target role" },
  { icon: '🧮', label: 'Tax calculator', desc: 'Nigeria Tax Act 2025 — net pay in seconds' },
]

const liveThisWeek = [
  { type: 'LIVE THIS WEEK', color: '#E91E8C', title: 'Live Social Media Page Au...', sub: 'Fri, May 22 · 3:00 PM' },
  { type: 'NEW JOBS', color: '#10B981', title: '25 new roles added this week', sub: '' },
  { type: 'NEW RESOURCE', color: '#6B7280', title: 'Top Interview Questions ...', sub: 'PDF' },
]

export default function HomePage({ setActivePage }) {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        {/* Hero */}
        <div className={styles.hero}>
          <p className={styles.welcome}>WELCOME</p>
          <h1 className={styles.heading}>
            Let's get you <span className={styles.pink}>hired.</span>
          </h1>
          <p className={styles.sub}>Get access to the tools, workshops, guidance, and opportunities to grow your career online.</p>
          <div className={styles.checks}>
            {['Full application system', 'Curated remote jobs daily', 'Step-by-step career guidance'].map(c => (
              <span key={c} className={styles.check}><span className={styles.dot} />{ c}</span>
            ))}
          </div>
          <div className={styles.heroBtns}>
            <button className={styles.primaryBtn}>I'm ready for a job →</button>
            <button className={styles.secondaryBtn}>View pricing</button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Quick Actions</h2>
          <div className={styles.quickGrid}>
            {quickActions.map(({ icon: Icon, emoji, label, sub, color, page }) => (
              <button key={label} className={styles.quickCard} onClick={() => setActivePage(page)}>
                <div className={styles.quickIcon} style={{ background: color }}>
                  {emoji ? <span style={{ fontSize: 22 }}>{Icon}</span> : <Icon size={22} color="#374151" />}
                </div>
                <p className={styles.quickLabel}>{label}</p>
                <p className={styles.quickSub}>{sub}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Latest Jobs */}
        <div className={styles.section}>
          <div className={styles.sectionRow}>
            <h2 className={styles.sectionTitle}>Latest jobs</h2>
            <button className={styles.viewAll} onClick={() => setActivePage('jobs')}>View all jobs →</button>
          </div>
          <div className={styles.jobsGrid}>
            {latestJobs.map((job, i) => (
              <div key={i} className={styles.jobCard}>
                <div className={styles.jobTop}>
                  <div className={styles.jobAvatar} style={{ background: job.bg }}>{job.initials}</div>
                  <button className={styles.heartBtn}><Heart size={14} /></button>
                </div>
                <p className={styles.jobCompany}>{job.company}</p>
                <p className={styles.jobTitle}>{job.title}</p>
                <span className={styles.jobTag}>{job.type}</span>
                <div className={styles.jobBottom}>
                  <span className={styles.jobSalary}>{job.salary}</span>
                  <button className={styles.applyBtn}>Apply →</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools */}
        <div className={styles.section}>
          <div className={styles.sectionRow}>
            <h2 className={styles.sectionTitle}>Use career tools instantly</h2>
            <button className={styles.viewAll} onClick={() => setActivePage('aitools')}>View all tools →</button>
          </div>
          <div className={styles.toolsGrid}>
            {aiTools.map((t) => (
              <div key={t.label} className={styles.toolCard}>
                <span className={styles.toolIcon}>{t.icon}</span>
                <p className={styles.toolLabel}>{t.label}</p>
                <p className={styles.toolDesc}>{t.desc}</p>
                <button className={styles.useNow}>Use now →</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className={styles.right}>
        {/* Unlock box */}
        <div className={styles.unlockBox}>
          <div className={styles.unlockTop}>
            <Crown size={14} style={{ color: 'var(--purple)' }} />
            <span className={styles.unlockLabel}>Unlock the full system</span>
          </div>
          <p className={styles.unlockTitle}>Join Remote Workher</p>
          <p className={styles.unlockDesc}>Unlimited tools, courses, live sessions & more.</p>
          <button className={styles.unlockLink}>Explore plans →</button>
          <div className={styles.unlockImg}>
            <div className={styles.avatarPlaceholder}>👩🏾‍💻</div>
          </div>
        </div>

        {/* Live this week */}
        <div className={styles.liveBox}>
          <div className={styles.liveBanner}>
            <Radio size={14} />
            <span>Live Social Media Page Audit</span>
          </div>
          <p className={styles.liveTime}>Fri 3:00 PM · Free for members</p>
          <button className={styles.rsvpBtn}>RSVP →</button>
        </div>

        <div className={styles.weekBox}>
          <p className={styles.weekTitle}>This week on Remote Workher</p>
          {liveThisWeek.map((item, i) => (
            <div key={i} className={styles.weekItem}>
              <div className={styles.weekDot} style={{ background: item.color }} />
              <div>
                <p className={styles.weekType} style={{ color: item.color }}>{item.type}</p>
                <p className={styles.weekItemTitle}>{item.title}</p>
                {item.sub && <p className={styles.weekItemSub}>{item.sub}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
