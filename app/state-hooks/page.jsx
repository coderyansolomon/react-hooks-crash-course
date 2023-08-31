import styles from '@/app/page.module.css'
import WatchList from '../components/WatchList'

export default function StateHooks() {
  return (
    <main className={styles.main}>
      <h1>State Hooks</h1>
      <p>
        React provides two hooks for managing state within your apps. useState and useReducer.
        Let's add state to our watch list below to show how these work.
      </p>
      <WatchList />
    </main>
  )
}