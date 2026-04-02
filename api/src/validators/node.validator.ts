import { z } from "zod";

export const createNodeSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  parentId: z.string().uuid().optional().nullable().or(z.string().length(24).optional().nullable()),
});

export type CreateNodeInput = z.infer<typeof createNodeSchema>;
