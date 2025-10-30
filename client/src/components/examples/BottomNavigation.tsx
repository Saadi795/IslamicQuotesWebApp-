import BottomNavigation from '../BottomNavigation';

export default function BottomNavigationExample() {
  return (
    <BottomNavigation
      onNewQuote={() => console.log('New quote clicked')}
      onBookmark={() => console.log('Bookmark clicked')}
      onShare={() => console.log('Share clicked')}
      onCopy={() => console.log('Copy clicked')}
      isBookmarked={false}
      isLoading={false}
      hasQuote={true}
    />
  );
}
