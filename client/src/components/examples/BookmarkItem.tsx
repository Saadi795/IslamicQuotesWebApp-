import BookmarkItem from '../BookmarkItem';

export default function BookmarkItemExample() {
  const mockQuote = {
    id: '1',
    text: 'Indeed, with hardship comes ease.',
    source: 'Quran',
    reference: 'Surah Ash-Sharh (94:6)',
    timestamp: Date.now(),
  };

  return (
    <BookmarkItem
      quote={mockQuote}
      onDelete={(id) => console.log('Delete:', id)}
      onCopy={(quote) => console.log('Copy:', quote)}
      onShare={(quote) => console.log('Share:', quote)}
    />
  );
}
