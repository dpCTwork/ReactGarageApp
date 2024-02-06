import { DataTable } from "@/components/ui/data-table"
import { Cars, columns } from "@/lib/col-defs"
// import { Button } from "@/components/ui/button"

// import {
// 	Dialog,
// 	DialogContent,
// 	DialogHeader,
// 	DialogTitle,
// 	DialogTrigger,
// } from "@/components/ui/dialog"
import CarForm from "@/components/CarForm"

// async function getData(): Promise<Cars[]> {
// 	// Fetch data from your API here.
// 	return [
// 		{
// 			id: "1",
// 			make: 'volkswagen',
// 			model: "jetta",
// 			year: 2019,
//       color: "white",
// 		},
// 	]
// }

const Garage = () => {
	const data: Cars[] = [
		{
			id: "1",
			make: "volkswagen",
			model: "jetta",
			year: 2019,
			color: "white",
		},
	]

	// const { handleSubmit } = useForm<TCarFormSchema>()

	// const onSubmit = (values: TCarFormSchema) => {
	// 	console.log(values)
	// }

	return (
		<>
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={data} />
			</div>
			<div className="mx-auto px-4 py-2 bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-muted-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
				{/* <Button variant={"outline"}> */}
				{/* <Dialog>
					<DialogTrigger>Open</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>
								Add, update, or delete a new car
							</DialogTitle>
						</DialogHeader>
						<CarForm />
					</DialogContent>
				</Dialog> */}
				{/* </Button> */}
				<CarForm />
			</div>
		</>
	)
}

export default Garage
