import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Copy, Share2 } from "lucide-react";
import type { Quote } from "@shared/schema";

interface BookmarkItemProps {
  quote: Quote;
  onDelete: (id: string) => void;
  onCopy: (quote: Quote) => void;
  onShare: (quote: Quote) => void;
}

export default function BookmarkItem({ quote, onDelete, onCopy, onShare }: BookmarkItemProps) {
  return (
    <Card className="p-6 hover-elevate active-elevate-2 transition-all bookmark-card">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-2">
          <blockquote className="font-serif text-lg leading-relaxed bookmark-quote-text flex-1">
            "{quote.text}"
          </blockquote>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onDelete(quote.id)}
            className="shrink-0"
            data-testid={`button-delete-${quote.id}`}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-1">
            <p className="text-sm font-medium bookmark-source-text">
              {quote.source}
            </p>
            <p className="text-xs bookmark-reference-text">
              {quote.reference}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onCopy(quote)}
              data-testid={`button-copy-${quote.id}`}
            >
              <Copy className="w-3 h-3" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onShare(quote)}
              data-testid={`button-share-${quote.id}`}
            >
              <Share2 className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
