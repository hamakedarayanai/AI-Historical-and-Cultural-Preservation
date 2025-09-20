
import React from 'react';
import type { HistoricalExperience } from '../types';
import DocumentCard from './DocumentCard';

interface ExperienceDisplayProps {
  experience: HistoricalExperience;
}

const ExperienceDisplay: React.FC<ExperienceDisplayProps> = ({ experience }) => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-8 animate-fade-in space-y-8">
      {/* Visual Reconstruction */}
      <section>
        <h2 className="font-serif text-3xl font-bold text-accent-dark mb-4 text-center">Visual Reconstruction</h2>
        <div className="overflow-hidden rounded-lg shadow-2xl border-4 border-white">
          <img src={experience.imageUrl} alt="AI generated historical scene" className="w-full h-auto object-cover" />
        </div>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Narrative */}
        <section className="lg:col-span-3">
          <h2 className="font-serif text-3xl font-bold text-accent-dark mb-4">Generated Narrative</h2>
          <div className="bg-white/60 p-6 rounded-lg shadow-md border border-accent/20">
             <p className="font-serif text-lg leading-loose text-ink/90 whitespace-pre-wrap">{experience.narrative}</p>
          </div>
        </section>

        {/* Document & Soundscape */}
        <div className="lg:col-span-2 space-y-8">
            <section>
                <h2 className="font-serif text-3xl font-bold text-accent-dark mb-4">Historical Document</h2>
                <DocumentCard title={experience.document.title} content={experience.document.content} />
            </section>
            
            <section>
                <h2 className="font-serif text-3xl font-bold text-accent-dark mb-4">Audio Soundscape</h2>
                <div className="bg-white/60 p-6 rounded-lg shadow-md border border-accent/20">
                    <ul className="space-y-3">
                        {experience.soundscape.map((sound, index) => (
                        <li key={index} className="flex items-start">
                            <svg className="w-6 h-6 text-accent-dark mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path></svg>
                            <span className="font-sans text-ink">{sound}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDisplay;
