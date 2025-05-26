import { useState, useEffect } from 'react';

const TypeWriter = ({ texts, speed = 150, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
        setTypingSpeed(speed / 2);

        if (currentIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
          setTypingSpeed(delay);
        }
      } else {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
        setTypingSpeed(speed);

        if (currentIndex === currentText.length) {
          setIsDeleting(true);
          setTypingSpeed(delay);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textIndex, texts, speed, delay, typingSpeed]);

  return <span className="typewriter-text">{displayText}</span>;
};

export default TypeWriter;
