
import React, { useState } from 'react';

interface InputFormProps {
  onGenerate: (location: string, timePeriod: string) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onGenerate, isLoading }) => {
  const [location, setLocation] = useState('Paris, France');
  const [timePeriod, setTimePeriod] = useState('The Belle Époque, late 19th century');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location && timePeriod) {
      onGenerate(location, timePeriod);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto bg-white/50 p-6 md:p-8 rounded-lg shadow-lg border border-accent/10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="location" className="block text-sm font-bold font-serif text-ink mb-2">
            Historical Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Ancient Rome"
            className="w-full px-4 py-2 bg-parchment/50 border border-accent/30 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            disabled={isLoading}
            required
          />
        </div>
        <div>
          <label htmlFor="time-period" className="block text-sm font-bold font-serif text-ink mb-2">
            Time Period
          </label>
          <input
            id="time-period"
            type="text"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            placeholder="e.g., The reign of Augustus"
            className="w-full px-4 py-2 bg-parchment/50 border border-accent/30 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            disabled={isLoading}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent text-white font-bold py-3 px-4 rounded-md hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-dark transition-transform duration-200 ease-in-out hover:scale-105 disabled:bg-stone-400 disabled:cursor-not-allowed disabled:scale-100"
        >
          {isLoading ? 'Generating...' : 'Travel Through Time'}
        </button>
      </form>
    </section>
  );
};

export default InputForm;
