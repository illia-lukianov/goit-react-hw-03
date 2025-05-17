import styles from './Description.module.css'

export default function Description() {
    return (
        <>
        <h1 className={styles.feedbackTitle}>Sip Happens Café</h1>
        <p className={styles.feedbackDescription}>Please leave your feedback about our service by selecting one of the options below.</p>
        </>
    )
}