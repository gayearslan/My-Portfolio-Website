import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  href?: string;
  text?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  spinSpeed?: 'slow' | 'normal' | 'fast';
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  onClick, 
  href = "#contact",
  text = 'Contact Me',
  className = '',
  size = 'md',
  spinSpeed = 'normal'
}) => {
  
  const sizes = {
    sm: "w-20 h-20 text-xs",
    md: "w-20 h-20 text-sm", 
    lg: "w-20 h-20 text-sm"
  };

  
  const spinSpeeds = {
    slow: "animate-spin [animation-duration:4s]",
    normal: "animate-spin [animation-duration:3s]", 
    fast: "animate-spin [animation-duration:2s]"
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else {
      e.preventDefault();
      const contactElement = document.querySelector(href);
      if (contactElement) {
        contactElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`
        fixed top-6 left-6 z-50 
        ${sizes[size]}
        rounded-full
        bg-amber-950
        text-yellow-100  font-bold
        flex items-center justify-center
        shadow-lg hover:shadow-xl
        transition-all duration-300 hover:scale-110
        ${spinSpeeds[spinSpeed]}
        border-4 border-white/20
        ${className}
        group
      `}
      aria-label="Contact me"
    >
      <span className="text-center leading-tight whitespace-nowrap">
        Contact Me
      </span>
    </a>
  );
};

export default ContactButton;