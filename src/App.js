import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import QuestionPage from './components/QuestionPage';
import { questions } from './data';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleYesClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('Congratulations! Let’s go on that date!');
    }
  };

  const handleNoClick = () => {
    alert('You can’t escape that easily! 😜');
  };

  return (
    <AnimatePresence mode="wait">
      <QuestionPage 
        key={currentQuestionIndex}
        question={questions[currentQuestionIndex]}
        onYesClick={handleYesClick}
        onNoClick={handleNoClick}
      />
    </AnimatePresence>
  );
};

export default App;
