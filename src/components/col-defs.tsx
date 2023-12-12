
import { ColumnDef } from "@tanstack/react-table"

export type Cars = {
	id: string
	make: string
	model: string
	year: number
    color: string
}

export const columns: ColumnDef<Cars>[] = [
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
