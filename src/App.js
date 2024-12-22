import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import { RepositoryList } from './components/repository/repository-list'
import { Sidebar } from './layout/sidebar'
import { AddRepositoryDialog } from './components/repository/add-repository-dialog'
import { useAuth } from './context/auth-context'
import { useNavigate } from 'react-router'

const initialRepositories = [
  {
    name: 'design-system',
    language: 'React',
    size: 7320,
    visibility: 'Public',
    updatedAt: '1 day ago'
  },
  {
    name: 'codeant-ci-app',
    language: 'Javascript',
    size: 5871,
    visibility: 'Private',
    updatedAt: '2 days ago'
  },
  {
    name: 'analytics-dashboard',
    language: 'Python',
    size: 4521,
    visibility: 'Private',
    updatedAt: '5 days ago'
  },
  {
    name: 'mobile-app',
    language: 'Swift',
    size: 3096,
    visibility: 'Public',
    updatedAt: '3 days ago'
  },
  {
    name: 'e-commerce-platform',
    language: 'Java',
    size: 6210,
    visibility: 'Private',
    updatedAt: '6 days ago'
  },
  {
    name: 'blog-website',
    language: 'HTML/CSS',
    size: 1876,
    visibility: 'Public',
    updatedAt: '4 days ago'
  },
  {
    name: 'social-network',
    language: 'PHP',
    size: 5432,
    visibility: 'Private',
    updatedAt: '7 days ago'
  }
]

export default function App() {
  const [repositories, setRepositories] = useState(initialRepositories)
  const [searchQuery, setSearchQuery] = useState('')
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const { user } = useAuth();
  const navigate = useNavigate();

  // if user not exists then navigate to login page
  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return null;
    }
  }, []);

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleRefresh = () => {
    console.log('Refreshing repositories...')
  }

  const handleAddRepository = (data) => {
    const newRepo = {
      name: data.name,
      language: 'None',
      size: 0,
      visibility: data.visibility,
      updatedAt: 'just now'
    }
    setRepositories([newRepo, ...repositories])
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <RepositoryList
          repositories={filteredRepositories}
          onSearch={setSearchQuery}
          onRefresh={handleRefresh}
          onAdd={() => setIsAddDialogOpen(true)}
        />
        <AddRepositoryDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onSubmit={handleAddRepository}
        />
      </main>
    </div>
  )
}

