import { z } from "zod"

export const carFormSchema = z.object({
	// id: z.string(),
	make: z.string(),
	model: z.string(),
	year: z
		.string()
		.transform((year) => parseInt(year))
		.pipe(z.number().min(1900).max(2030))
		.transform((year) => year.toString()),
	color: z.string(),
})

export type TCarFormSchema = z.infer<typeof carFormSchema>
