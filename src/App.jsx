import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
    const [feedbacks, setFeedbacks] = useState(() => {
        const savedFeedback = window.localStorage.getItem('saved-feedback');
        if (savedFeedback !== null) {
            return JSON.parse(savedFeedback);
        }
        return { good: 0, neutral: 0, bad: 0 };
    });

    const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
    const positiveFeedback = Math.round(
        ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
    );

    const updateFeedback = feedbackType => {
        if (feedbackType !== 'reset') {
            setFeedbacks({
                ...feedbacks,
                [feedbackType]: feedbacks[feedbackType] + 1,
            });
        } else {
            setFeedbacks({
                good: 0,
                neutral: 0,
                bad: 0,
            });
        }
    };

    useEffect(() => {
        window.localStorage.setItem('saved-feedback', JSON.stringify(feedbacks));
    });

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
            {totalFeedback > 0 ? (
                <Feedback
                    feedbacks={feedbacks}
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback}
                />
            ) : (
                <Notification />
            )}
        </>
    );
}

export default App;
