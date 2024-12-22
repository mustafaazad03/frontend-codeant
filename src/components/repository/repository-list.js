import React from 'react'
import { Plus } from 'lucide-react'
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
          <Button variant="outline" onClick={onRefresh} className={styles.refreshButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15.9609 11.4102C16.418 11.5508 16.6641 12.0078 16.5234 12.4648C15.5391 15.8047 12.4453 18.125 8.96484 18.125C6.1875 18.125 3.62109 16.6133 2.21484 14.2578V17.8438C2.21484 18.3359 1.86328 18.6875 1.37109 18.6875C0.914062 18.6875 0.527344 18.3359 0.527344 17.8438V12.2188C0.527344 11.7617 0.914062 11.375 1.37109 11.375H6.99609C7.48828 11.375 7.83984 11.7617 7.83984 12.2188C7.83984 12.7109 7.45312 13.0625 6.99609 13.0625H3.44531C4.5 15.1016 6.60938 16.4375 8.96484 16.4375C11.707 16.4375 14.168 14.6094 14.9062 11.9727C15.0469 11.5156 15.5039 11.2695 15.9609 11.4102ZM16.5938 1.8125C17.0508 1.8125 17.4375 2.19922 17.4375 2.65625V8.28125C17.4375 8.77344 17.0508 9.125 16.5938 9.125H10.9688C10.4766 9.125 10.125 8.77344 10.125 8.28125C10.125 7.82422 10.4766 7.4375 10.9688 7.4375H14.4844C13.4297 5.43359 11.3203 4.0625 9 4.0625C6.25781 4.0625 3.79688 5.92578 3.02344 8.52734C2.91797 8.98438 2.46094 9.23047 2.00391 9.08984C1.54688 8.98438 1.30078 8.49219 1.40625 8.07031C2.39062 4.73047 5.51953 2.375 9 2.375C11.7773 2.375 14.3438 3.92188 15.75 6.27734V2.65625C15.75 2.19922 16.1016 1.8125 16.5938 1.8125Z" fill="#414651"/>
          </svg>
            Refresh All
          </Button>
          <Button onClick={onAdd}>
            <Plus className="h-4 w-4 mr-2" />
            Add Repository
          </Button>
        </div>
      </div>

      <div className={styles.search}>
        <div className={styles.searchIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17.7188 19.8086C18.0703 20.1602 18.0703 20.6875 17.7188 21.0039C17.5781 21.1797 17.3672 21.25 17.1562 21.25C16.9102 21.25 16.6992 21.1797 16.5234 21.0039L11.8125 16.293C10.5469 17.3125 8.96484 17.875 7.27734 17.875C3.26953 17.875 0 14.6055 0 10.5625C0 6.55469 3.23438 3.25 7.27734 3.25C11.2852 3.25 14.5898 6.55469 14.5898 10.5625C14.5898 12.2852 14.0273 13.8672 13.0078 15.0977L17.7188 19.8086ZM1.6875 10.5625C1.6875 13.6914 4.18359 16.1875 7.3125 16.1875C10.4062 16.1875 12.9375 13.6914 12.9375 10.5625C12.9375 7.46875 10.4062 4.9375 7.3125 4.9375C4.18359 4.9375 1.6875 7.46875 1.6875 10.5625Z" fill="#414651"/>
        </svg>
        </div>
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
                <Badge variant={'outline'}>
                  {repo.visibility}
                </Badge>
              </div>
              <div className={styles.repoMeta}>
                <div className={styles.repoLanguage}>
                  {repo.language}
                  <span className={styles.languageDot} />
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none" style={{ marginRight: '0.5rem' }}>
                    <path d="M5.25 12C2.34375 12 0 11.1797 0 10.125V1.875C0 0.84375 2.34375 0 5.25 0C8.13281 0 10.5 0.84375 10.5 1.875V10.125C10.5 11.1797 8.13281 12 5.25 12ZM9.375 2.03906L9.35156 2.01562C9.23438 1.92188 8.97656 1.75781 8.57812 1.61719C7.78125 1.33594 6.58594 1.125 5.25 1.125C3.89062 1.125 2.69531 1.33594 1.89844 1.61719C1.5 1.75781 1.24219 1.92188 1.125 2.01562V4.10156C1.42969 4.26562 1.85156 4.42969 2.39062 4.57031C3.1875 4.75781 4.17188 4.875 5.25 4.875C6.30469 4.875 7.28906 4.75781 8.08594 4.57031C8.625 4.42969 9.04688 4.26562 9.375 4.10156V2.03906ZM9.375 5.34375C9.04688 5.46094 8.71875 5.57812 8.34375 5.67188C7.45312 5.88281 6.375 6 5.25 6C4.10156 6 3.02344 5.88281 2.13281 5.67188C1.75781 5.57812 1.42969 5.46094 1.125 5.34375V7.10156C1.42969 7.26562 1.85156 7.42969 2.39062 7.57031C3.1875 7.75781 4.17188 7.875 5.25 7.875C6.30469 7.875 7.28906 7.75781 8.08594 7.57031C8.625 7.42969 9.04688 7.26562 9.375 7.10156V5.34375ZM1.125 10.0078C1.24219 10.1016 1.5 10.2656 1.89844 10.4062C2.69531 10.6875 3.89062 10.875 5.22656 10.875C6.58594 10.875 7.78125 10.6875 8.57812 10.4062C8.97656 10.2656 9.23438 10.1016 9.35156 10.0078L9.375 9.98438V8.34375C9.04688 8.46094 8.71875 8.57812 8.34375 8.67188C7.45312 8.88281 6.375 9 5.22656 9C4.10156 9 3.02344 8.88281 2.13281 8.67188C1.75781 8.57812 1.42969 8.46094 1.10156 8.34375V9.98438L1.125 10.0078ZM9.42188 9.9375L9.39844 9.96094C9.42188 9.9375 9.42188 9.9375 9.42188 9.9375ZM1.07812 9.96094C1.07812 9.9375 1.05469 9.9375 1.05469 9.9375L1.07812 9.96094ZM1.07812 2.0625C1.05469 2.08594 1.05469 2.08594 1.05469 2.08594L1.07812 2.0625ZM9.42188 2.08594C9.42188 2.08594 9.42188 2.08594 9.39844 2.0625L9.42188 2.08594Z" fill="#181D27"/>
                  </svg>
                  {repo.size} KB
                </div>
                <div>Updated {repo.updatedAt}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

