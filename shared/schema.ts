import { z } from "zod";

export const quoteSchema = z.object({
  id: z.string(),
  text: z.string(),
  source: z.string(),
  reference: z.string(),
  timestamp: z.number(),
});

export type Quote = z.infer<typeof quoteSchema>;
