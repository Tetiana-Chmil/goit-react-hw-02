import css from './Options.module.css';

function Options({ updateFeedback, totalFeedback }) {
    return (
        <ul className={css.options__list}>
            <li>
                <button
                    onClick={() => {
                        updateFeedback('good');
                    }}
                >
                    Good
                </button>
            </li>
            <li>
                <button
                    onClick={() => {
                        updateFeedback('neutral');
                    }}
                >
                    Neutral
                </button>
            </li>
            <li>
                <button
                    onClick={() => {
                        updateFeedback('bad');
                    }}
                >
                    Bad
                </button>
            </li>
            {totalFeedback > 0 && (
                <li>
                    <button
                        onClick={() => {
                            updateFeedback('reset');
                        }}
                    >
                        Reset
                    </button>
                </li>
            )}
        </ul>
    );
}

export default Options;
