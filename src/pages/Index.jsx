import { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { Button } from '@/components/ui/button';
import { useWindowSize } from 'react-use';

const Index = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const { width, height } = useWindowSize();

  const triggerConfetti = () => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000); // Stop confetti after 5 seconds
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold text-white mb-8">Fun Confetti App!</h1>
      <Button
        onClick={triggerConfetti}
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-4 px-8 rounded-full text-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Celebrate!
      </Button>
      {isConfettiActive && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
        />
      )}
    </div>
  );
};

export default Index;
