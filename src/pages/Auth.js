import { useState } from 'react'
import { ArrowUp, Github, Gitlab, Key } from 'lucide-react'
import styles from './auth.module.css'
import { useAuth } from '../context/auth-context'
import { ToggleGroup } from '../components/ui/toggle-group'
import Button from '../components/ui/button'
import { Link, useNavigate } from 'react-router'
import logo from '../logo.svg'
import GroupFour from '../assets/Group 4.svg'

const deploymentOptions = [
  { value: 'saas', label: 'SAAS' },
  { value: 'self-hosted', label: 'Self Hosted' }
]

const providers = [
  {
    id: 'github',
    name: 'Sign in with Github',
    icon: <Github className={styles.providerIcon} />,
  },
  {
    id: 'gitlab',
    name: 'Sign in with GitLab',
    icon: <Gitlab className={styles.providerIcon} />,
  },
  {
    id: 'sso',
    name: 'Sign in with SSO',
    icon: <Key className={styles.providerIcon} />,
  },
]

export default function AuthPage() {
  const { login, deploymentType, setDeploymentType } = useAuth()
  const [isLoading, setIsLoading] = useState(null)
  const navigate = useNavigate()

  const handleLogin = async (providerId) => {
    setIsLoading(providerId)
    try {
      await login(providerId)
      navigate('/')
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <div className={styles.statsHeader}>
          <img
            src={logo}
            alt="CodeAnt AI Logo"
            width={40}
            height={40}
          />
          <h2>AI to Detect & Autofix Bad Code</h2>
        </div>
        <div className={styles.totalEmailsParent}>
        <div className={styles.totalEmails}>
          <div className={styles.bg}></div>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={logo} />
            <b className={styles.aiToDetect}>AI to Detect & Autofix Bad Code</b>
          </div>
          <div className={styles.totalEmailsChild}></div>
          <div className={styles.parent}>
            <b className={styles.aiToDetect}>30+</b>
            <div className={styles.languageSupport}>Language Support</div>
          </div>
          <div className={styles.kParent}>
            <b className={styles.aiToDetect}>10K+</b>
            <div className={styles.languageSupport}>Developers</div>
          </div>
          <div className={styles.kGroup}>
            <b className={styles.aiToDetect}>100K+</b>
            <div className={styles.languageSupport}>Hours Saved</div>
          </div>
        </div>
        <div className={styles.card10}>
          <div className={styles.bg1}></div>
          <div className={styles.groupParent}>
            <img className={styles.groupChild} alt="" src={GroupFour} />
            <div className={styles.uiIconArrowSmallRight2Parent}>
              <ArrowUp className={styles.uiIconArrowSmallRight2} />
              <b className={styles.b1}>14%</b>
              <div className={styles.thisWeek}>This week</div>
            </div>
            <div className={styles.issuesFixedParent}>
              <div className={styles.issuesFixed}>Issues Fixed</div>
              <b className={styles.k2}>500K+</b>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className={styles.auth}>
        <div className={styles.authContent}>
          <img
            src={logo}
            alt="CodeAnt AI Logo"
            width={40}
            height={40}
            className={styles.logo}
          />
          <h1 className={styles.title}>Welcome to CodeAnt AI</h1>
          
          <ToggleGroup
            value={deploymentType}
            onChange={(value) => setDeploymentType(value)}
            items={deploymentOptions}
          />

          <div className={styles.providers}>
            {providers.map((provider) => (
              <Button
                key={provider.id}
                variant="outline"
                fullWidth
                icon={provider.icon}
                onClick={() => handleLogin(provider.id)}
                disabled={!!isLoading}
              >
                {isLoading === provider.id ? 'Signing in...' : provider.name}
              </Button>
            ))}
          </div>

          <p className={styles.terms}>
            By signing up you agree to the{' '}
            <Link href="/privacy" className={styles.link}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
      <div className={styles.watermark}>
        <img src={logo} alt="CodeAnt AI Logo" width={284} height={319} />
      </div>
    </div>
  )
}

