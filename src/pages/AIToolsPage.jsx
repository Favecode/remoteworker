import React, { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import Footer from '../components/Footer'
import styles from './AIToolsPage.module.css'

const categories = ['All Tools', 'Resume & CV', 'Cover Letter', 'LinkedIn', 'Interview', 'Career', 'Money']

const tools = [
  { icon: '📄', label: 'Resume Builder', desc: 'Build an ATS-friendly resume from My Wins using 3 polished templates.', cost: '2 Coins', costColor: null },
  { icon: '✨', label: 'Resume Optimizer', desc: 'Score your existing CV against ATS criteria and get targeted fixes.', cost: '2 Coins', costColor: null },
  { icon: '🎯', label: 'Cold Pitch AI', desc: 'Write human, specific cold pitches that earn the micro-yes — for email, DM, or LinkedIn.', cost: '1 Coin', costColor: null },
  { icon: '💼', label: 'Cover Letter AI', desc: 'Generate a tailored cover letter from a job description in seconds.', cost: '1 Coin', costColor: null },
  { icon: '💼', label: 'LinkedIn Optimizer', desc: 'Analyze and rewrite your headline, About, and experience sections.', cost: '2 Coins', costColor: null },
  { icon: '✍️', label: 'LinkedIn Post Generator', desc: 'Write scroll-stopping LinkedIn posts using proven viral formulas.', cost: '1 Coin', costColor: null },
  { icon: '📊', label: 'Skills Gap Analyzer', desc: 'Compare your profile to a target role and map missing skills to resources.', cost: '2 Coins', costColor: null },
  { icon: '🔭', label: 'Explore Careers', desc: 'Nigeria-specific insights across roles, salaries, and transition planning.', cost: '1 Coin', costColor: null },
  { icon: '💰', label: 'Salary Analyzer', desc: 'Check role and city salary insights across Nigeria.', cost: 'Free', costColor: 'var(--green)' },
  { icon: '🧮', label: 'Tax Calculator', desc: 'Nigerian Tax Act 2025 PAYE with rent relief — instant.', cost: 'Free', costColor: 'var(--green)' },
]

export default function AIToolsPage() {
  const [active, setActive] = useState('All Tools')
  const [search, setSearch] = useState('')

  const filtered = tools.filter(t =>
    t.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={styles.page}>
      <p className={styles.eyebrow}>CAREER TOOLKIT</p>
      <h1 className={styles.heading}>
        AI tools that <span className={styles.pink}>get you hired</span>
      </h1>
      <p className={styles.sub}>Tailor your CV, write a cover letter, polish your LinkedIn — every tool is built around real Nigerian remote job hunting.</p>

      <div className={styles.cats}>
        {categories.map(c => (
          <button
            key={c}
            className={`${styles.catBtn} ${active === c ? styles.catActive : ''}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
        <button className={styles.catBtn}>More <ChevronDown size={12} /></button>
      </div>

      <div className={styles.grid}>
        {filtered.map((tool, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.icon}>{tool.icon}</span>
            </div>
            <h3 className={styles.toolLabel}>{tool.label}</h3>
            <p className={styles.toolDesc}>{tool.desc}</p>
            <div className={styles.cardBottom}>
              <span className={styles.cost} style={tool.costColor ? { color: tool.costColor } : {}}>
                🪙 {tool.cost}
              </span>
              <button className={styles.useBtn}>Use Tool</button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}
