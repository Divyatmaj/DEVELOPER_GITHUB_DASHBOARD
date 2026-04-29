import RepoCard from './components/RepoCard.jsx'
import UserCard from './components/UserCard.jsx'
import RecentCard from './components/RecentCard.jsx'
import ReadMeCard from './components/ReadMeCard.jsx'

function App() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <p className="eyebrow">Developer Dashboard</p>
        <h1>GitHub Activity Overview</h1>
        <p className="subtitle">A quick snapshot of profile, repositories, recent activity, and README.</p>
      </header>

      <section className="section-card section-user">
        <h2>Profile</h2>
        <UserCard />
      </section>

      <section className="section-card section-repos">
        <h2>Repositories</h2>
        <RepoCard />
      </section>

      <section className="section-card section-recent">
        <h2>Recent Activity</h2>
        <RecentCard />
      </section>

      <section className="section-card section-readme">
        <h2>README</h2>
        <ReadMeCard />
      </section>

      <footer className="dashboard-footer">
        <p>Built with React + GitHub API</p>
      </footer>
    </main>
  )
}

export default App
