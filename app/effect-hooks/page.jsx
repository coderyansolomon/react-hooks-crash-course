import styles from '@/app/page.module.css'
import UseEffectExample from '../components/UseEffectExample'


export default function EffectHooks() {
  return (
    <main className={styles.main}>
      <h1>Effect Hooks</h1>
      <p>
        React provides a few hooks for having 'side effects' in your apps.
        Side effects would be things like making network requests, manipulating the DOM,
        working with browser APIs, animations, or other non-react code. 
      </p>
      <p>
        React provides useEffect, useLayoutEffect, and useInsertionEffect. You really only 
        use useEffect, but you might use useLayoutEffect if you need to perform an effect
        before the browser repaints the screen. And you might use useInsertionEffect if you
        need an effect before React makes changes to the DOM. We're just going to cover useEffect,
        but the main difference between the others is when they're called. 
      </p>
      <p>
        The useEffect hook can be quite complex. And generally, I'd recommend not using it if 
        you can get away with it. Especially now that you can fetch data on the server using 
        server components in Next.js.
      </p>
      <UseEffectExample />
    </main>
  )
}