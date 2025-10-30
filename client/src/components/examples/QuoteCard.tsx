import QuoteCard from '../QuoteCard';

export default function QuoteCardExample() {
  const mockQuote = {
    id: '1',
    text: 'Indeed, with hardship comes ease.',
    source: 'Quran',
    reference: 'Surah Ash-Sharh (94:6)',
    timestamp: Date.now(),
  };

  return <QuoteCard quote={mockQuote} />;
}
