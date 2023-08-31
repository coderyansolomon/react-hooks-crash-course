import styles from '@/app/page.module.css'
import InputRef from '../components/InputRef'


export default function RefHooks() {
  return (
    <main className={styles.main}>
      <h1>Ref Hooks</h1>
      <p>
        Refs allow you to maintain information that isn't used for rendering UI. 
        For example, maintaining a reference to a DOM element or a timeout ID. 
      </p>
      <p>
       The primary difference between state and refs is that when a value of a ref is updated,
       it does not trigger a re-render of your component. A ref is also different from a regular
       variable since variables reset on every render, whereas refs are maintained.
       Refs are useful when you need to do non-react stuff, like working with a browser API 
       or external library requiring refs.
      </p>
      <p>
        Note: Do not use refs to display UI. If you're going to be using information
        to display ui, use state. Also, it's best to update the values of your refs in event
        handlers, not in the body of your component.
      </p>
      <p>
        *inputRef example
      </p>
      <InputRef />
    </main>
  )
}