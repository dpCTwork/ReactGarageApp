import { z } from "zod"

export const carFormSchema = z.object({
	// id: z.string(),
	make: z.string(),
	model: z.string(),
	year: z.coerce.number().int().min(1900).max(2025),
	color: z.string(),
})

export type TCarFormSchema = z.infer<typeof carFormSchema>
