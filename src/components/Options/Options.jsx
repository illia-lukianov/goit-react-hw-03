import styles from './Options.module.css'

export default function Options({ setStatistic, totalFeedback}) {
    return (
    <ul className={styles.feedbackButtonsList}>
        <li className={styles.feedbackListItem}><button className={styles.feedbackButton} onClick={() => setStatistic("good")}>Good</button></li>
        <li className={styles.feedbackListItem}><button className={styles.feedbackButton} onClick={() => setStatistic("neutral")}>Neutral</button></li>
        <li className={styles.feedbackListItem}><button className={styles.feedbackButton} onClick={() => setStatistic("bad")}>Bad</button></li>
        {totalFeedback > 0 && <li className={styles.feedbackListItem}><button className={styles.feedbackButton} onClick={() => setStatistic("reset")}>Reset</button></li>}
    </ul>
)}