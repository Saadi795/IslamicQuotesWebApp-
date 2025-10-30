import { motion } from "framer-motion";
import { BookmarkX } from "lucide-react";

export default function EmptyBookmarks() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center p-12 text-center"
      data-testid="empty-bookmarks"
    >
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
        <BookmarkX className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-medium mb-2">No Bookmarks Yet</h3>
      <p className="text-muted-foreground max-w-sm">
        Save your favorite quotes to revisit them anytime for inspiration and reflection.
      </p>
    </motion.div>
  );
}
