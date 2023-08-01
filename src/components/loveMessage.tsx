"use client"

import { useEffect, useState } from "react";

function LoveMessage() {
  const [isVisible, setIsVisible] = useState(true);
  const [isName, setIsName] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const letter1 = setTimeout(() => {
      setIsName(false);
    }, 5000);

    return () => clearTimeout(letter1);
  }, []);

  if (isName == false) {
    useEffect(() => {
      const letter2 = setTimeout(() => {
        setIsName(false);
      }, 20000);

      return () => clearTimeout(letter2);
    }, []);
  } else {
    return
  }

  return (
    <p style={{ display: isVisible ? "block" : "none" }}>Creador para mi</p>
  );
}

export default LoveMessage;
