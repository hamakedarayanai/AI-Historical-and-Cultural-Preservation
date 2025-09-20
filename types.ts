
export interface HistoricalDocument {
  title: string;
  content: string;
}

export interface HistoricalExperience {
  narrative: string;
  document: HistoricalDocument;
  soundscape: string[];
  imageUrl: string;
}
