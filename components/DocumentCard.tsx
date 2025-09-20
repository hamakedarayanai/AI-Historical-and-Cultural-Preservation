
import React from 'react';

interface DocumentCardProps {
  title: string;
  content: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white/60 p-6 rounded-lg shadow-md border border-accent/20 h-full">
      <h3 className="font-serif text-xl font-bold text-accent-dark border-b border-accent/20 pb-2 mb-4">{title}</h3>
      <p className="whitespace-pre-wrap font-serif text-ink/90 leading-relaxed">{content}</p>
    </div>
  );
};

export default DocumentCard;
