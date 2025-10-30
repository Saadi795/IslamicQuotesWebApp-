import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Quote } from "@shared/schema";

interface QuoteCardProps {
  quote: Quote | null;
  isLoading?: boolean;
}

export default function QuoteCard({ quote, isLoading }: QuoteCardProps) {

  if (isLoading) {
    return (
      <div className="quote-wrapper" style={{ display: 'flex', justifyContent: 'center', padding: '0 32px', boxSizing: 'border-box', width: '100%' }}>
        <Card 
          className="p-8 sm:p-10 md:p-12 max-w-2xl w-full quote-box-pattern"
        >
          <div className="space-y-6 sm:space-y-8 animate-pulse" style={{ position: 'relative', zIndex: 10 }}>
            <div className="h-24 sm:h-32 bg-amber-200/30 rounded-md"></div>
            <div className="h-6 bg-amber-200/30 rounded-md w-2/3 mx-auto"></div>
          </div>
        </Card>
      </div>
    );
  }

  if (!quote) {
    return (
      <div className="quote-wrapper" style={{ display: 'flex', justifyContent: 'center', padding: '0 32px', boxSizing: 'border-box', width: '100%' }}>
        <Card 
          className="p-8 sm:p-10 md:p-12 max-w-2xl w-full text-center quote-box-pattern"
        >
          <p 
            className="text-base sm:text-lg leading-relaxed px-2"
            style={{
              fontFamily: '"Poppins", sans-serif',
              color: '#2d6a4f',
              position: 'relative',
              zIndex: 10
            }}
          >
            Tap "New Quote" to receive inspiration
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div 
      className="quote-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0 32px',
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 45 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ 
          duration: 0.9, 
          ease: "easeOut",
          times: [0, 0.6, 1],
          y: [50, -10, 0]
        }}
        key={quote.id}
        style={{ 
          perspective: '1000px',
          maxWidth: 'min(640px, 100%)',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Card 
          className="p-8 sm:p-10 md:p-12 lg:p-14 transition-all duration-300 quote-box-pattern"
          data-testid="card-quote"
        >
          <div className="space-y-6 sm:space-y-8" style={{ position: 'relative', zIndex: 10 }}>
            <blockquote 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center leading-relaxed break-words quote-text"
              style={{ 
                fontFamily: '"Poppins", -apple-system, sans-serif',
                letterSpacing: '0.02em',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                hyphens: 'auto',
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              {quote.text}
            </blockquote>
            
            <div className="text-center space-y-2 sm:space-y-3 pt-4">
              <p 
                className="text-sm sm:text-base md:text-lg break-words italic quote-source"
                style={{ 
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  textShadow: '0 0 8px rgba(76, 175, 80, 0.15)',
                  letterSpacing: '0.03em'
                }}
              >
                — {quote.source}
              </p>
              <p 
                className="text-xs sm:text-sm md:text-base break-words italic quote-reference"
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  textShadow: '0 0 6px rgba(76, 175, 80, 0.1)',
                  letterSpacing: '0.02em',
                  fontWeight: 400
                }}
              >
                {quote.reference}
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
