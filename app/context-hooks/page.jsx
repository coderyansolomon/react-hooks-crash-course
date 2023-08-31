'use client'
import styles from '@/app/page.module.css'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

export default function ContextHooks() {
    const theme = useContext(ThemeContext)
    console.log({theme})
  return (
    <main className={styles.main}>
      <h1>Context Hooks</h1>
      <p>
        Context allows you to use data within a component from distant parents/children
        within your React component tree without needing to prop-drill or lift state. 
      </p>
      <p>
        To use context, you first need to create a context, and then
        you need to provider that context to your components. Once the context is created, 
        and provided, you can use the useContext hook to consume the provided context. *Example
      </p>
    </main>
  )
}