import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { containerVariants } from '../animations';
import Button from './Button';
import styled from '@emotion/styled';

const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  text-align: center;
  color: white;
  padding: 20px;
  position: relative;
`;

const Sticker = styled.span`
  font-size: 3rem;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const NoButton = styled(motion.div)`
  display: inline-block;
  font-size: 1.5rem;
  padding: 10px 20px;
  border-radius: 9999px;
  background: #f5576c;
  color: white;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  transition: all 0.3s ease; /* Smooth transition */
`;

const getRandomPosition = (buttonWidth, buttonHeight) => {
  // Get viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Calculate max x and y positions to ensure button stays within the viewport
  const maxX = viewportWidth - buttonWidth;
  const maxY = viewportHeight - buttonHeight;

  // Generate random positions
  let x = Math.random() * maxX * 0.3;
  let y = Math.random() * maxY * 0.6;

  // Ensure position is within viewport
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  return { x: `${x}px`, y: `${y}px` };
};

const QuestionPage = ({ question, onYesClick, onNoClick }) => {
  const [noPosition, setNoPosition] = useState({ x: '50%', y: '50%' }); // Initial position alongside Yes button
  const buttonRef = useRef(null);

  const handleMouseOver = () => {
    if (buttonRef.current) {
      const buttonWidth = buttonRef.current.offsetWidth;
      const buttonHeight = buttonRef.current.offsetHeight;
      let { x, y } = getRandomPosition(buttonWidth, buttonHeight);

      // Adjust position if it's near the viewport boundaries
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (parseInt(x) < 0) x = '0px';
      if (parseInt(x) > viewportWidth - buttonWidth) x = `${viewportWidth - buttonWidth}px`;
      if (parseInt(y) < 0) y = '0px';
      if (parseInt(y) > viewportHeight - buttonHeight) y = `${viewportHeight - buttonHeight}px`;

      setNoPosition({ x, y });
    }
  };

  return (
    <PageContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ backgroundImage: `url(${question.background})` }}
    >
      <motion.h2 
        className="text-5xl font-bold mb-8"
        animate={{ 
          scale: [0.8, 1.2, 1], 
          rotate: [0, 10, -10, 0] 
        }}
        transition={{ duration: 0.8 }}
      >
        {question.text}
      </motion.h2>
      
      <ButtonContainer>
        <Button onClick={onYesClick}>Yes</Button>
        <NoButton
          ref={buttonRef}
          style={{ left: noPosition.x, top: noPosition.y }}
          onMouseOver={handleMouseOver}
        >
          No
        </NoButton>
      </ButtonContainer>

      <div className="mt-12 flex space-x-4">
        {question.stickers.map((sticker, index) => (
          <Sticker key={index}>{sticker}</Sticker>
        ))}
      </div>
    </PageContainer>
  );
};

export default QuestionPage;
