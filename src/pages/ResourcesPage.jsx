import React, { useState } from 'react'
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Footer from '../components/Footer'
import styles from './ResourcesPage.module.css'

const tabFilters = ['All resources', 'Resumes & CVs', 'Cover Letters', 'Career Guides', 'Toolkits', 'Negotiation Scripts']

const resources = [
  { icon: '📖', bg: '#ECFDF5', iconColor: '#10B981', title: 'The Career Pivot Workbook', desc: 'This interactive workbook guides you through identifying...', types: ['Workbook', 'PDF'], pro: true },
  { icon: '💼', bg: '#EFF6FF', iconColor: '#3B82F6', title: 'LinkedIn Optimization Workbook', desc: 'This workbook provides actionable steps to optimize yo...', types: ['Workbook', 'PDF'], pro: true },
  { icon: '✉️', bg: '#F3F4F6', iconColor: '#6B7280', title: 'Google Docs Resume & Cover Letter Templates', desc: 'Get professional Google Docs templates for your resume and...', types: ['Template', 'PDF'], pro: true },
  { icon: '✉️', bg: '#F3F4F6', iconColor: '#6B7280', title: 'Customer Support Cover Letter', desc: 'Download this customisable cover letter template specificall...', types: ['Template', 'PDF'], pro: true },
  { icon: '🔧', bg: '#FFF7ED', iconColor: '#F59E0B', title: 'Freelancer Starter Kit', desc: 'This Freelancer Starter Kit workbook provides templates...', types: ['Workbook', 'PDF'], pro: true },
  { icon: '✉️', bg: '#F3F4F6', iconColor: '#6B7280', title: 'Data Analyst Cover Letter', desc: 'This customizable cover letter template provides a professional...', types: ['Template', 'PDF'], pro: true },
  { icon: '✉️', bg: '#F3F4F6', iconColor: '#6B7280', title: 'Content Writer Cover Letter', desc: 'This template provides a pre-formatted cover letter for...', types: ['Template', 'PDF'], pro: true },
  { icon: '✉️', bg: '#F3F4F6', iconColor: '#6B7280', title: 'Recent Graduate Cover Letter', desc: 'This template provides a clear structure for your cover letter...', types: ['Template', 'PDF'], pro: true },
  { icon: '✉️', bg: '#F3F4F6', iconColor: '#6B7280', title: 'Project Manager Cover Letter', desc: 'Download this Project Manager Cover Letter template to craft a...', types: ['Template', 'PDF'], pro: true },
  { icon: '✉️', bg: '#F3F4F6', iconColor: '#6B7280', title: 'Social Media Manager Cover Letter', desc: 'Get a professionally formatted Social Media Manager Cover...', types: ['Template', 'PDF', 'Remote Work'], pro: true },
  { icon: '✉️', bg: '#F3F4F6', iconColor: '#6B7280', title: 'Virtual Assistant Cover Letter', desc: 'Download this professionally formatted virtual assistant...', types: ['Template', 'PDF', 'Remote Work'], pro: true },
  { icon: '💵', bg: '#FEF9C3', iconColor: '#CA8A04', title: 'Interview Prep and Salary Guide', desc: 'This guide provides essential interview strategies and salary...', types: ['Guide', 'PDF'], pro: true },
  { icon: '✉️', bg: '#F3F4F6', iconColor: '#6B7280', title: 'Email Templates for Job Application', desc: 'Download these editable email templates for job applications...', types: ['Template', 'PDF'], pro: true },
  { icon: '📖', bg: '#ECFDF5', iconColor: '#10B981', title: 'Your 90 Day Career Reset', desc: 'This workbook provides structured exercises for a 90-...', types: ['Workbook', 'PDF', 'Career Direction'], pro: true },
  { icon: '🎤', bg: '#FFF7ED', iconColor: '#F59E0B', title: 'Top Interview Questions & How to Answer Them', desc: 'This is a guide that helps job seekers prepare for interviews b...', types: ['PDF', 'PDF'], pro: false },
  { icon: '✏️', bg: '#EDE9F6', iconColor: '#7C3AED', title: 'Brand Bible Template', desc: 'The Personal Brand Bible Template gives you one place to...', types: ['Workbook', 'PDF'], pro: true },
  { icon: '🧠', bg: '#EDE9F6', iconColor: '#7C3AED', title: 'AI prompt for Job Seekers', desc: '20 prompts to research, apply, interview, negotiate, and land th...', types: ['Guide', 'PDF'], pro: true },
  { icon: '🧠', bg: '#EDE9F6', iconColor: '#7C3AED', title: 'Ikigai Framework', desc: 'This practical Ikigai Workbook for Clarity, Purpose & Income. A lot...', types: ['Workbook', 'PDF', 'Clarity'], pro: true },
]

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('All resources')
  const [search, setSearch] = useState('')

  const filtered = resources.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1 className={styles.heading}>Resources</h1>
        <p className={styles.sub}>Professionally crafted templates, guides, and toolkits to help you save time and do your best work.</p>

        <div className={styles.tabRow}>
          <button className={styles.arrowBtn}><ChevronLeft size={16} /></button>
          {tabFilters.map(t => (
            <button
              key={t}
              className={`${styles.tab} ${activeTab === t ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
            </button>
          ))}
          <button className={styles.arrowBtn}><ChevronRight size={16} /></button>
        </div>

        <div className={styles.grid}>
          {filtered.map((r, i) => (
            <div key={i} className={styles.card}>
              {r.pro && <div className={styles.proBadge}>Pro</div>}
              <div className={styles.iconWrap} style={{ background: r.bg }}>
                <span className={styles.icon} style={{ color: r.iconColor }}>{r.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
              <div className={styles.typeTags}>
                {r.types.map((t, ti) => (
                  <span key={ti} className={styles.typeTag}>{t}</span>
                ))}
              </div>
              <p className={styles.membersOnly}>Members only</p>
              <div className={styles.cardActions}>
                <button className={styles.detailsBtn}>View details</button>
                <button className={styles.downloadBtn}>Join to download</button>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>

      <div className={styles.right}>
        <p className={styles.rightTitle}>Search resources</p>
        <div className={styles.searchWrap}>
          <Search size={14} className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            placeholder="Search resources..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <p className={styles.filterTitle}>Filter by <button className={styles.clearBtn}>Clear all</button></p>

        {['All categories', 'All types', 'All industries', 'Most popular'].map(f => (
          <button key={f} className={styles.filterBtn}>
            {f} <ChevronDown size={13} />
          </button>
        ))}
      </div>
    </div>
  )
}
