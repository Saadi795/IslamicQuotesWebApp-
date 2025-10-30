import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import QuoteCard from "@/components/QuoteCard";
import BottomNavigation from "@/components/BottomNavigation";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookmarkCheck } from "lucide-react";
import type { Quote } from "@shared/schema";
import {
  saveBookmark,
  removeBookmark,
  isBookmarked as checkIsBookmarked,
  copyQuoteToClipboard,
  shareQuote,
} from "@/lib/storage";

export default function Home() {
  const { toast } = useToast();
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const fetchNewQuote = async () => {
    setIsLoading(true);
    
    try {
      // TODO: Replace with actual n8n webhook integration
      // const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ action: 'get_quote' }),
      // });
      // const data = await response.json();
      
      // Mock data for prototype
      const mockQuotes = [
        {
          text: "Indeed, with hardship comes ease.",
          source: "Quran",
          reference: "Surah Ash-Sharh (94:6)",
        },
        {
          text: "The best among you are those who have the best manners and character.",
          source: "Hadith",
          reference: "Sahih Bukhari 3559",
        },
        {
          text: "And whoever relies upon Allah - then He is sufficient for him.",
          source: "Quran",
          reference: "Surah At-Talaq (65:3)",
        },
        {
          text: "Verily, in the remembrance of Allah do hearts find rest.",
          source: "Quran",
          reference: "Surah Ar-Ra'd (13:28)",
        },
        {
          text: "The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.",
          source: "Hadith",
          reference: "Sahih Bukhari 6114",
        },
      ];
      
      await new Promise((resolve) => setTimeout(resolve, 800));
      const randomQuote = mockQuotes[Math.floor(Math.random() * mockQuotes.length)];
      const newQuote: Quote = {
        id: Date.now().toString(),
        ...randomQuote,
        timestamp: Date.now(),
      };
      
      setCurrentQuote(newQuote);
      setIsBookmarked(checkIsBookmarked(newQuote.id));
      
      toast({
        title: "New quote received",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch quote. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookmark = () => {
    if (!currentQuote) return;

    if (isBookmarked) {
      removeBookmark(currentQuote.id);
      setIsBookmarked(false);
      toast({
        title: "Bookmark removed",
      });
    } else {
      saveBookmark(currentQuote);
      setIsBookmarked(true);
      toast({
        title: "Quote bookmarked",
      });
    }
  };

  const handleCopy = () => {
    if (!currentQuote) return;
    copyQuoteToClipboard(currentQuote);
    toast({
      title: "Copied to clipboard",
    });
  };

  const handleShare = () => {
    if (!currentQuote) return;
    shareQuote(currentQuote);
    toast({
      title: "Share",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="top-nav">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
          <div className="flex flex-col min-w-0 flex-1">
            <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-foreground leading-tight">
              Islamic Quotes
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 font-light italic leading-tight">
              Daily wisdom from Quran and Hadith
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/bookmarks" className="flex-shrink-0">
              <Button 
                className="nav-btn-blue hover-elevate active-elevate-2 whitespace-nowrap"
                data-testid="link-bookmarks"
              >
                <BookmarkCheck className="w-4 h-4 mr-1.5" />
                <span className="hidden xs:inline">Bookmarks</span>
                <span className="xs:hidden">Saved</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main 
        className="flex-1 flex items-center justify-center"
        style={{
          paddingTop: '80px',
          paddingBottom: '80px',
          minHeight: 'calc(100vh - 160px)',
          width: '100%',
        }}
      >
        <QuoteCard quote={currentQuote} isLoading={isLoading} />
      </main>

      <BottomNavigation
        onNewQuote={fetchNewQuote}
        onBookmark={handleBookmark}
        onShare={handleShare}
        onCopy={handleCopy}
        isBookmarked={isBookmarked}
        isLoading={isLoading}
        hasQuote={!!currentQuote}
      />
    </div>
  );
}
