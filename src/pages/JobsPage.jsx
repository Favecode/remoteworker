import React, { useState } from 'react'
import { Search, Heart, Bell, ChevronDown } from 'lucide-react'
import Footer from '../components/Footer'
import styles from './JobsPage.module.css'

const jobs = [
  { initials: '6', bg: '#10B981', company: '6CRICKETS', title: 'Customer Success / Client Support Associate', desc: '6crickets is looking for a Client Success Specialist to support and partner with customers while...', req: '1+ year experience in customer success, customer service, technical support, or sales · Availab...', tags: [{ label: 'Fully Remote', color: '#10B981' }, { label: '$40,000 – $75,000/year', color: '#10B981' }, { label: 'CRM Platforms', color: null }], ago: '1d ago', curated: true },
  { initials: 'HM', bg: '#E91E8C', company: 'HURRIKAINE MEDIA', title: 'Social Media Strategist & Content Creator', desc: 'Hurrikaine Media is hiring a Social Media Strategist & Content Creator to lead the development and...', req: '4–6 years experience in social media and content strategy roles · Strong portfolio with content...', tags: [{ label: 'hybrid', color: null }, { label: '250,000-350,000', color: '#F59E0B' }, { label: 'CapCut Pro', color: null }], ago: '1d ago', curated: true },
  { initials: 'HM', bg: '#E91E8C', company: 'HURRIKAINE MEDIA', title: 'Digital Growth & Performance Marketing Strategist', desc: 'Hurrikaine Media is looking for a Digital Growth & Performance Marketing Specialist to lead high-impact...', req: '4+ years of experience in digital growth, performance marketing, or related fields · Proven record...', tags: [{ label: 'hybrid', color: null }, { label: '250,000-350,000', color: '#F59E0B' }, { label: 'Growth Strategy', color: null }], ago: '1d ago', curated: true },
  { initials: 'GM', bg: '#6B7280', company: 'GASCO MARINE', title: 'Admin Assistant', desc: 'Gasco Marine is looking for a highly organized and proactive Admin Assistant to support the Head of Ga...', req: 'ND, HND, or BSc qualification is an added advantage · Strong organizational and administrative...', tags: [{ label: 'Collaboration Tools', color: null }], ago: '1d ago', curated: true },
  { initials: 'I', bg: '#8B5CF6', company: 'IMPACT BRANDS', title: 'Executive Assistant to the CTO', desc: "We are seeking a highly organized and proactive CTO Assistant to support the Chief Technology Officer...", req: "Bachelor's degree in Business Administration, Management, or related field · Strong data...", tags: [{ label: 'Work from Anywhere', color: '#3B82F6' }, { label: '€1200/month', color: '#F59E0B' }], ago: '3d ago', curated: true },
  { initials: 'I', bg: '#8B5CF6', company: 'IMPACT BRANDS', title: 'Marketing Administrative Assistant', desc: 'Impact Brands is hiring a Marketing Administrative Assistant to support marketing operations, executive...', req: 'Experience as an Executive or Personal Assistant, preferably supporting senior leaders · Strong...', tags: [{ label: 'Fully Remote', color: '#10B981' }, { label: '€1200/month', color: '#F59E0B' }], ago: '2d ago', curated: true },
  { initials: 'M', bg: '#6B7280', company: 'MICRO1', title: 'Accounting Expert', desc: "Join our customer's team as an expert Accounting / Finance Management Specialist, where you'll play a...", req: "Bachelor's degree in Accounting, Finance, or related field · Minimum of 3 years' hands-on...", tags: [{ label: 'Work from Anywhere', color: '#3B82F6' }, { label: '$50 – $80/hour', color: '#F59E0B' }], ago: '2d ago', curated: true },
]

export default function JobsPage() {
  const [search, setSearch] = useState('')

  const filtered = jobs.filter(j =>
    j.title.toLowerCase().includes(search.toLowerCase()) ||
    j.company.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <p className={styles.eyebrow}>NON-TECH REMOTE JOBS</p>
        <div className={styles.titleRow}>
          <h1 className={styles.heading}>Curated remote roles for women</h1>
          <button className={styles.alertBtn}><Bell size={14} /> Create Job Alert</button>
        </div>
        <p className={styles.sub}>Marketing, virtual assistant, customer success, design, ops and more — handpicked non-coding remote roles for women.</p>

        <div className={styles.newBadge}>
          🔥 <strong>25 new remote jobs added this week</strong>&nbsp;&nbsp;⚡ Updated daily — don't miss out
        </div>

        <div className={styles.filters}>
          <div className={styles.searchWrap}>
            <Search size={14} className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              placeholder='Search e.g. "marketing manager | virtual assistant | data entry"'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className={styles.filterRow}>
            {['Category', 'Country', 'Salary', 'Currency: NGN'].map(f => (
              <button key={f} className={`${styles.filterBtn} ${f === 'Currency: NGN' ? styles.filterActive : ''}`}>
                {f} <ChevronDown size={13} />
              </button>
            ))}
          </div>
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Min <span className={styles.any}>Any</span></span>
            <span className={styles.filterLabel}>Max <span className={styles.any}>Any</span></span>
            {['Type', 'Level'].map(f => (
              <button key={f} className={styles.filterBtn}>{f} <ChevronDown size={13} /></button>
            ))}
          </div>
        </div>

        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.tabActive}`}>All Jobs (31)</button>
          <button className={styles.tab}>New Today (0)</button>
          <button className={styles.tab}>Internships (0)</button>
        </div>

        <div className={styles.jobList}>
          {filtered.map((job, i) => (
            <div key={i} className={styles.jobCard}>
              <div className={styles.jobLeft}>
                <div className={styles.jobAvatar} style={{ background: job.bg }}>{job.initials}</div>
              </div>
              <div className={styles.jobBody}>
                <p className={styles.jobCompany}>{job.company}</p>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobDesc}>{job.desc}</p>
                <p className={styles.jobReq}><strong>Requirements:</strong> {job.req}</p>
                <div className={styles.jobTags}>
                  {job.tags.map((t, ti) => (
                    <span key={ti} className={styles.jobTag} style={t.color ? { background: t.color + '22', color: t.color, border: `1px solid ${t.color}44` } : {}}>
                      {t.label}
                    </span>
                  ))}
                </div>
                <p className={styles.jobMeta}>{job.ago} · {job.curated ? 'Curated' : ''}</p>
              </div>
              <div className={styles.jobRight}>
                <button className={styles.heartBtn}><Heart size={16} /></button>
                <button className={styles.viewBtn}>View Role</button>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.loadMore}>Load More Jobs (24 more) ▾</button>
        <Footer />
      </div>

      {/* Right sidebar */}
      <div className={styles.rightPanel}>
        <div className={styles.alertBox}>
          <p className={styles.alertTitle}>Don't miss your next opportunity</p>
          <p className={styles.alertDesc}>Create a job alert and get notified when new jobs match your preferences.</p>
          <button className={styles.createAlertBtn}><Bell size={13} /> Create Job Alert</button>
        </div>
        <div className={styles.assistBox}>
          <p className={styles.assistTitle}>✨ Apply Assistant</p>
          <p className={styles.assistDesc}>Tailor a resume + cover letter for any job in seconds.</p>
        </div>
      </div>
    </div>
  )
}
