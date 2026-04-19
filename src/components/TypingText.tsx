import { useEffect, useState } from "react";

interface Props {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}

const TypingText = ({ words, typingSpeed = 90, deletingSpeed = 50, pause = 2000 }: Props) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = window.setTimeout(
        () => {
          setText((t) => (deleting ? t.slice(0, -1) : current.slice(0, t.length + 1)));
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return <span className="typing-cursor text-amber font-semibold">{text}</span>;
};

export default TypingText;
