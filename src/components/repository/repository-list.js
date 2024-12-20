import React from 'react'
import { RefreshCw, Plus } from 'lucide-react'
import styles from './repository-list.module.css'
import Button from '../ui/button'
import Input from '../ui/input'
import Badge from '../ui/badge'

export function RepositoryList({ repositories, onSearch, onRefresh, onAdd }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Repositories</h1>
          <p className={styles.subtitle}>{repositories.length} total repositories</p>
        </div>
        <div className={styles.actions}>
          <Button variant="outline" onClick={onRefresh}>
            <RefreshCw className="h-4 w-4" />
            Refresh All
          </Button>
          <Button onClick={onAdd}>
            <Plus className="h-4 w-4 mr-2" />
            Add Repository
          </Button>
        </div>
      </div>

      <div className={styles.search}>
        <Input
          placeholder="Search Repositories"
          onChange={(e) => onSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.list}>
        {repositories.map((repo) => (
          <div key={repo.name} className={styles.repo}>
            <div className={styles.repoInfo}>
              <div className={styles.repoHeader}>
                <h2 className={styles.repoName}>{repo.name}</h2>
                <Badge variant={repo.visibility === 'Public' ? 'secondary' : 'outline'}>
                  {repo.visibility}
                </Badge>
              </div>
              <div className={styles.repoMeta}>
                <div className={styles.repoLanguage}>
                  <span className={styles.languageDot} />
                  {repo.language}
                </div>
                <div>{(repo.size / 1024).toFixed(2)} MB</div>
                <div>Updated {repo.updatedAt}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

