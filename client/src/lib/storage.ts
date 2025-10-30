import type { Quote } from "@shared/schema";

const STORAGE_KEY = "islamic-quotes-bookmarks";

export function getBookmarks(): Quote[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error reading bookmarks:", error);
    return [];
  }
}

export function saveBookmark(quote: Quote): void {
  try {
    const bookmarks = getBookmarks();
    const exists = bookmarks.some((b) => b.id === quote.id);
    if (!exists) {
      bookmarks.unshift(quote);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    }
  } catch (error) {
    console.error("Error saving bookmark:", error);
  }
}

export function removeBookmark(quoteId: string): void {
  try {
    const bookmarks = getBookmarks();
    const filtered = bookmarks.filter((b) => b.id !== quoteId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error("Error removing bookmark:", error);
  }
}

export function isBookmarked(quoteId: string): boolean {
  const bookmarks = getBookmarks();
  return bookmarks.some((b) => b.id === quoteId);
}

export function copyQuoteToClipboard(quote: Quote): void {
  const text = `"${quote.text}"\n\n— ${quote.source}, ${quote.reference}`;
  navigator.clipboard.writeText(text);
}

export function shareQuote(quote: Quote): void {
  const text = `"${quote.text}"\n\n— ${quote.source}, ${quote.reference}`;
  
  if (navigator.share) {
    navigator.share({
      title: "Islamic Quote",
      text: text,
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text);
  }
}
