import { useState, useEffect } from 'react'
import Description from '../Description/Description'
import style from './App.module.css'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'

export default function App() {

  const [feedback, setFeedback] = useState(() => {
    const initFeedback = window.localStorage.getItem('feedback');
    return initFeedback
      ? JSON.parse(initFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  })

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback))
  }, [feedback])
  

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100): 0;
  
  
  function updateFeedback(feedbackType) {
    if (feedbackType === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback(currentFeedback => {
        return {
          ...currentFeedback,
          [feedbackType]: currentFeedback[feedbackType] + 1,
        }
      })
    }
  }
  
    return (
    <div className = {style.contentWrapper}>
      < Description />
      < Options setStatistic={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? < Feedback feedback={feedback} totalStatistic={totalFeedback} positiveStatistic={positiveFeedback} /> : <Notification/>}
    </div>
  )}
