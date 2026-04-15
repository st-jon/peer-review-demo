import { useState } from 'react'
import ExerciseLayout from '../components/ExerciseLayout'

/*
 * EXERCISE 1 — Wire a button to its handler
 *
 * A "Say Hello" button is already rendered below.
 * There is also a `handleClick` function that shows an alert.
 *
 * TODO: Add an `onClick` prop to the <button> so that clicking it
 *       calls `handleClick`.
 *
 * Expected result: clicking the button shows an alert saying "Hello, world! 👋"
 */
export default function Exercise1() {
  const [clicked, setClicked] = useState(false)

  function handleClick() {
    setClicked(true)
    alert('Hello, world! 👋')
  }

  return (
    <ExerciseLayout
      number={1}
      title="Wire a button to its handler"
      instructions={
        <>
          A <strong>Say Hello</strong> button is already on screen and a <code>handleClick</code>{' '}
          function is already defined. Connect them by adding the correct prop to the button.
        </>
      }
    >
      <div className="flex flex-col items-center gap-4 py-6">
        <button onClick={() => handleClick()} className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
          Say Hello
        </button>

        {clicked && (
          <p className="text-green-600 font-medium">✅ Great job! The handler fired.</p>
        )}
      </div>
    </ExerciseLayout>
  )
}
