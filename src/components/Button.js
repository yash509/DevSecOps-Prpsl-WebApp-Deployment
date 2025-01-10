import { motion } from 'framer-motion';
import { buttonVariants } from '../animations';
import styled from '@emotion/styled';

const StyledButton = styled(motion.button)`
  background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
  color: white;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 9999px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <StyledButton
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
