import { useState } from 'react'
import styles from './add-repository-dialog.module.css'
import Input from '../ui/input'
import Button from '../ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'

export function AddRepositoryDialog({
  open,
  onOpenChange,
  onSubmit,
}) {
  const [name, setName] = useState('')
  const [visibility, setVisibility] = useState('Public')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ name, visibility })
    onOpenChange(false)
    setName('')
    setVisibility('Public')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new repository</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Repository name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="my-awesome-project"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Visibility</label>
            <div className={styles.radioGroup}>
              <label className={styles.radio}>
                <input
                  type="radio"
                  name="visibility"
                  value="Public"
                  checked={visibility === 'Public'}
                  onChange={(e) => setVisibility(e.target.value)}
                />
                <span>Public</span>
              </label>
              <label className={styles.radio}>
                <input
                  type="radio"
                  name="visibility"
                  value="Private"
                  checked={visibility === 'Private'}
                  onChange={(e) => setVisibility(e.target.value)}
                />
                <span>Private</span>
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Create repository</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

