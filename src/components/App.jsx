import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
// import s from './App.module.css';


export class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0,
  
  }
  
  handleLeaveFeedback = (e) => { 
  const { name } = e.target;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  }
 
  countTotalFeedback() {
  const { good, neutral, bad } = this.state;
  const total = good + neutral + bad;
   
  return total;
  }
  
  countPositiveFeedbackPercentage() {
  const { good } = this.state;
  const total = this.countTotalFeedback();

  const percentage = ((good / total) *100).toFixed();
  
  return percentage;
  }
  render() {
  const { good, neutral, bad } = this.state;
    
    
  return (
      <>
      

  <Section title="Please leave feedback">  
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleLeaveFeedback} />
  </Section>

  <Section title="Statistics">
      <Statistics good={good} neutral={neutral } bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
  </Section>
     
    </>
  );
  }
};