function Feedback({ feedbacks, totalFeedback, positiveFeedback }) {
    return (
        <ul>
            <li>Good: {feedbacks.good}</li>
            <li>Neutral: {feedbacks.neutral}</li>
            <li>Bad: {feedbacks.bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positiveFeedback}%</li>
        </ul>
    );
}

export default Feedback;
