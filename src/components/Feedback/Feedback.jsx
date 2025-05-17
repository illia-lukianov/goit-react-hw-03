import styles from './Feedback.module.css'

export default function Feedback({ feedback: { good, neutral, bad }, totalStatistic, positiveStatistic }) {
    return (
        <div className={styles.container}>
            <div className={styles.statistic}>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
            </div>
            <div className={`${styles.totalStatistic} ${styles.statistic}`}>
                <p>Total Feedback: {totalStatistic}</p>
                <p>Positive Feedback: {positiveStatistic}%</p>
            </div>
        </div>
    )
}