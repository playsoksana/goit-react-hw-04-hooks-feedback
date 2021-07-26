import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import useLocaleStorage from '../helpers/useLocaleStorage';
import styles from './App.module.css';


function App() {
  const [good, setGood] = useLocaleStorage('good', 0);
  const [neutral, setNeutral] = useLocaleStorage('neutral', 0);
  const [bad, setBad] = useLocaleStorage('bad', 0);

  const increment = ({ target: { textContent } }) => {
    switch (textContent) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;
      default:
        return;
    }
  };

  const total = (() => good + neutral + bad)();
  const positivePercent = (() => Number(((good / total) * 100).toFixed(0)))();

  return (
    <div>
      <h1>Task #1 , HomeWork 2</h1>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={increment}
        />
      </Section>
      <Section title="Statistics">
        {total < 1 ? (
          <p className={styles.Message}>No feedback given</p>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercent={positivePercent}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
