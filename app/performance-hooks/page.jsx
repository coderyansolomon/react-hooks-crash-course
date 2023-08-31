import styles from '@/app/page.module.css'
import UseMemoExample from '../components/UseMemoExample'


export default function EffectHooks() {
  return (
    <main className={styles.main}>
      <h1>Performance Hooks</h1>
      <p>
        Sometimes, React can re-render quite often leading to performance issues. However,
        before doing these optimizations, I'd highly recommend actually making sure you have 
        a re-rending issue, and that you're optimizing the big stuff first (e.g. not waterfalling
        network requests)
      </p>
      <p>
        If you do find you need to optimize performance, you can do so by using useMemo to cache the
        result of an expensive calculation. Or by using useCallback to cache a function before
        passing it down to an optimized component. Caching is just saving the return value of 
        doing some work and reusing that value so you don't have to keep doing the work over
        and over again.
      </p>
      <p>
        useMemo accepts two arguments, a function the does some work to compute a value, and 
        a dependency array. React will call the passed in function once on the inital render 
        and store the returned value. It will then only call the passed in function again if 
        a value in the dependency array changes
      </p>
      <UseMemoExample />
      <p>
       useCallback works very similarly to useMemo. However, instead of caching a return value
       of a function, it caches a function itself. The first argument is the function you want 
       to cache, and the second argument is a dependency array. React will return the cached function
       on initial render, and it will only re-initialize this function when the props change. This
       can be particularly useful when using a function as a dependency or prop.
      </p>
      <UseMemoExample />
    </main>
  )
}