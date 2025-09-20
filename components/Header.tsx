
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 border-b-2 border-accent/20">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent-dark">
        AI Historical Preservation
      </h1>
      <p className="mt-2 text-lg text-ink/80">
        Bringing the Past to Life Through Generative AI
      </p>
    </header>
  );
};

export default Header;
