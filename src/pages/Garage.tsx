import { DataTable } from "@/components/DataTable"
import { Cars, columns } from "@/components/col-defs"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"


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

	return (
		<>
			<div className="container mx-auto py-10">
				<DataTable columns={columns} data={data} />
			</div>
			<div className="mx-auto">
				<Button variant={"outline"}>
					<Dialog>
						<DialogTrigger>Open</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Are you sure absolutely sure?</DialogTitle>
								<DialogDescription>
									This action cannot be undone. This will permanently
									delete your account and remove your data from our
									servers.
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</Button>
			</div>
		</>
	)
}

export default Garage