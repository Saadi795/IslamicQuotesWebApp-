import { Button } from "@/components/ui/button";
import { RefreshCw, Bookmark, Share2, Copy } from "lucide-react";
import { motion } from "framer-motion";

interface BottomNavigationProps {
  onNewQuote: () => void;
  onBookmark: () => void;
  onShare: () => void;
  onCopy: () => void;
  isBookmarked?: boolean;
  isLoading?: boolean;
  hasQuote?: boolean;
}

export default function BottomNavigation({
  onNewQuote,
  onBookmark,
  onShare,
  onCopy,
  isBookmarked = false,
  isLoading = false,
  hasQuote = false,
}: BottomNavigationProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bottom-nav"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
          <Button
            onClick={onNewQuote}
            disabled={isLoading}
            className="flex-1 max-w-[160px] sm:max-w-[200px] nav-btn-green hover-elevate active-elevate-2"
            data-testid="button-new-quote"
          >
            <RefreshCw className={`w-4 h-4 mr-1.5 sm:mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            <span className="text-sm sm:text-base">{isLoading ? "Loading..." : "New Quote"}</span>
          </Button>

          {hasQuote && (
            <>
              <Button
                size="icon"
                onClick={onBookmark}
                className={`${isBookmarked ? 'nav-btn-icon-blue' : 'nav-btn-icon-blue-light'} hover-elevate active-elevate-2 flex-shrink-0`}
                data-testid="button-bookmark"
                aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </Button>

              <Button
                size="icon"
                onClick={onCopy}
                className="nav-btn-icon-purple hover-elevate active-elevate-2 flex-shrink-0"
                data-testid="button-copy"
                aria-label="Copy quote"
              >
                <Copy className="w-4 h-4" />
              </Button>

              <Button
                size="icon"
                onClick={onShare}
                className="nav-btn-icon-teal hover-elevate active-elevate-2 flex-shrink-0"
                data-testid="button-share"
                aria-label="Share quote"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
