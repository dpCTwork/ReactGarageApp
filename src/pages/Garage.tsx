import { DataTable } from "@/components/ui/data-table"
import { columns } from "@/lib/col-defs"

import CarForm from "@/components/CarForm"

import { useGetCarData } from "@/hooks/useGetCarData"

const Garage = () => {
	const { carData } = useGetCarData()

	return (
		<>
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={carData} />
			</div>
			<div className="mx-auto px-4 py-2 bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-muted-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
				<CarForm />
			</div>
		</>
	)
}

export default Garage
