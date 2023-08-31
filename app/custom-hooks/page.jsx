'use client'
import styles from '@/app/page.module.css'
import useBrowserStorage from '../components/useLocalStorage'
import { useEffect } from 'react'


export default function CustomHooks() {
  const {getItem,setItem,removeItem,error} = useBrowserStorage()

  useEffect(() => {
      setItem('example', '1232345')
  }, [])

  if (error) return null;

  return (
    <main className={styles.main}>
      <h1>Custom Hooks</h1>
      <p>
        You aren't limited to just the built in hooks provided by React, you can create
        your own. You can do this when you want to reuse some React logic throughout your
        application. 
      </p>
      <p>
        Your custom hooks still need to abide by the rules of hooks: calling them at the top 
        level and only from within a React component or another hook. They must also start with
        the prefix "use".
      </p>
      <p>
        Custom hooks help you share stateful logic or effects, but not state itself. State itself
        can be shared using context or some other state management provider. Keep in mind, though,
        that some duplication isn't really a bad thing. And just because you can create custom hooks
        doesn't mean you should create custom hooks for every single thing.
      </p>
    </main>
  )
}