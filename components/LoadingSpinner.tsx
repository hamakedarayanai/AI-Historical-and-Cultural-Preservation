
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-accent"></div>
        <p className="font-serif text-lg text-accent-dark">Reconstructing history...</p>
    </div>
  );
};

export default LoadingSpinner;
