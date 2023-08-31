import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>React Hooks Crash Course</h1>
      <p>
        React "hooks" are just JavaScript functions that allow you to 
        "hook" into build-in React features like state management, context, effects, etc.
      </p>
      <p>
        You can even create your own custom hooks. Often, your custom hooks will be very similar
        to creating a JavaScript function, but it will "wrap" some of React's built-in hooks.
      </p>
      <p>
        A few rules of hooks to keep in mind are that hooks must be prefixed with "use". Also, they 
        can only be called within React components or custom hooks, and at the "top level" of those 
        components and hooks. You can't use a hook in a plain JavaScript file that's not a 
        component or another hook.
      </p>
      <p>
        React provides state hooks, context hooks, ref hooks, effect hooks, performance hooks, and more.
        Plus, like I mentioned, you can even create your own hooks.
      </p>
    </main>
  )
}
