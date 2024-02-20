import { ColumnDef } from "@tanstack/react-table"
// import { TCarFormSchema } from "@/server/carform"
import { TCarFormSchema } from "@/server/carform"

// export type Cars = {
// 	id: string
// 	make: string
// 	model: string
// 	year: number
// 	color: string
// }

export const columns: ColumnDef<TCarFormSchema>[] = [
	{
		accessorKey: "year",
		header: "Year",
	},
	{
		accessorKey: "make",
		header: "Make",
	},
	{
		accessorKey: "model",
		header: "Model",
	},
	{
		accessorKey: "color",
		header: "Color",
	},
]
