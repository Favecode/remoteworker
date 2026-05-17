import React, { useState } from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import MyPlanPage from './pages/MyPlanPage'
import JobsPage from './pages/JobsPage'
import AIToolsPage from './pages/AIToolsPage'
import WebinarsPage from './pages/WebinarsPage'
import CoursesPage from './pages/CoursesPage'
import ResourcesPage from './pages/ResourcesPage'
import styles from './App.module.css'

export default function App() {
  const [activePage, setActivePage] = useState('home')

  const pages = {
    home: <HomePage setActivePage={setActivePage} />,
    myplan: <MyPlanPage />,
    jobs: <JobsPage />,
    aitools: <AIToolsPage />,
    webinars: <WebinarsPage />,
    courses: <CoursesPage />,
    resources: <ResourcesPage />,
  }

  return (
    <div className={styles.app}>
      <Topbar activePage={activePage} />
      <div className={styles.body}>
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className={styles.content}>
          {pages[activePage] || pages.home}
        </main>
      </div>

      {/* Floating chat button */}
      <button className={styles.chatBtn} title="Open chat">💬</button>
    </div>
  )
}
