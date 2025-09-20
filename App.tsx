
import React, { useState } from 'react';
import type { HistoricalExperience } from './types';
import { generateHistoricalExperience } from './services/geminiService';
import Header from './components/Header';
import InputForm from './components/InputForm';
import LoadingSpinner from './components/LoadingSpinner';
import ExperienceDisplay from './components/ExperienceDisplay';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [experienceData, setExperienceData] = useState<HistoricalExperience | null>(null);

  const handleGenerateExperience = async (location: string, timePeriod: string) => {
    setIsLoading(true);
    setError(null);
    setExperienceData(null);
    try {
      const data = await generateHistoricalExperience(location, timePeriod);
      setExperienceData(data);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred. Please check the console and API key.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-parchment">
      <main className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="mt-8">
          <InputForm onGenerate={handleGenerateExperience} isLoading={isLoading} />
        </div>

        <div className="mt-12 flex justify-center">
          {isLoading && <LoadingSpinner />}
          
          {error && (
            <div className="w-full max-w-2xl bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center" role="alert">
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline ml-2">{error}</span>
            </div>
          )}

          {experienceData && !isLoading && <ExperienceDisplay experience={experienceData} />}
        </div>
      </main>
      <footer className="text-center py-4 text-ink/60 text-sm mt-8 border-t border-accent/20">
        <p>Powered by Google Gemini. A conceptual interface for cultural exploration.</p>
      </footer>
    </div>
  );
};

export default App;
