import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import BookmarkItem from "@/components/BookmarkItem";
import EmptyBookmarks from "@/components/EmptyBookmarks";
import ThemeToggle from "@/components/ThemeToggle";
import type { Quote } from "@shared/schema";
import {
  getBookmarks,
  removeBookmark,
  copyQuoteToClipboard,
  shareQuote,
} from "@/lib/storage";

export default function Bookmarks() {
  const { toast } = useToast();
  const [bookmarks, setBookmarks] = useState<Quote[]>([]);

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = () => {
    const saved = getBookmarks();
    setBookmarks(saved);
  };

  const handleDelete = (quoteId: string) => {
    removeBookmark(quoteId);
    loadBookmarks();
    toast({
      title: "Bookmark removed",
    });
  };

  const handleCopy = (quote: Quote) => {
    copyQuoteToClipboard(quote);
    toast({
      title: "Copied to clipboard",
    });
  };

  const handleShare = (quote: Quote) => {
    shareQuote(quote);
    toast({
      title: "Share",
    });
  };

  return (
    <div className="min-h-screen">
      <header className="top-nav">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4">
          <Link href="/" className="flex-shrink-0">
            <Button variant="ghost" size="icon" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-foreground leading-tight">
              Saved Bookmarks
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-tight">
              {bookmarks.length > 0 ? (
                <span data-testid="text-bookmark-count">
                  {bookmarks.length} {bookmarks.length === 1 ? "quote" : "quotes"} saved
                </span>
              ) : (
                <span className="font-light italic">Your collection of spiritual wisdom</span>
              )}
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main 
        className="max-w-4xl mx-auto px-4 sm:px-6"
        style={{
          paddingTop: '100px',
          paddingBottom: '2rem',
          minHeight: 'calc(100vh - 64px)'
        }}
      >
        {bookmarks.length === 0 ? (
          <EmptyBookmarks />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bookmarks.map((quote) => (
              <BookmarkItem
                key={quote.id}
                quote={quote}
                onDelete={handleDelete}
                onCopy={handleCopy}
                onShare={handleShare}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
