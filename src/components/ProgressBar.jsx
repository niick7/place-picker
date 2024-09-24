import { useEffect, useState } from "react";

const TIMER = 3000;

export default function ProgressBar({ onConfirm }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(intervalTimer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <>
      <progress value={remainingTime} max={TIMER} />
    </>
  );
}
