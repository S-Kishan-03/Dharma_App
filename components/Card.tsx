import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, style }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  const cardClasses = `
    bg-white/50
    dark:bg-brand-deep-blue-light
    rounded-xl 
    shadow-lg 
    shadow-amber-900/5
    dark:shadow-2xl
    dark:shadow-black/20
    overflow-hidden 
    transition-all 
    duration-700 
    ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
    ${onClick ? 'cursor-pointer hover:shadow-xl dark:hover:shadow-brand-gold/10 hover:-translate-y-1' : ''} 
    border
    border-amber-900/10
    dark:border-brand-gold/20
    ${className}
  `;

  return (
    <div ref={ref} className={cardClasses} onClick={onClick} style={style}>
      {children}
    </div>
  );
};

export default Card;
