import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import {
	Form,
	FormControl,
	// FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { TCarFormSchema, carFormSchema } from "@/server/carform"
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog"
// import { addDoc, collection } from "firebase/firestore"
// import { db } from "@/config/firebase"
import { apiCalls } from "@/server/api/server"

const CarForm = () => {
	// Can also use <z.infer<typeof carFormSchema>> instead of <TCarFormSchema>. See "onSubmit" function below for example.
	const form = useForm<z.infer<typeof carFormSchema>>({
		// const form = useForm<TCarFormSchema>({
		resolver: zodResolver(carFormSchema),
		defaultValues: {
			make: "",
			model: "",
			year: "",
			color: "",
		},
	})

	// const carsRef = collection(db, "cars")

	const onSubmit = async (data: TCarFormSchema) => {
		console.log("onSubmit triggered")
		// await addDoc(carsRef, {
		// 	...data,
		// })

		apiCalls.addCar(data)

		// console.log(carsRef)
		// navigate("/garage")
		window.location.reload()
	}

	return (
		<Form {...form}>
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>
				<DialogContent>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8">
						<DialogHeader>
							<DialogTitle>
								Add, update, or delete a new car
							</DialogTitle>
						</DialogHeader>
						<FormField
							control={form.control}
							name="make"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Make</FormLabel>
									<FormControl>
										<Input placeholder="Make" {...field} />
									</FormControl>
									{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="model"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Model</FormLabel>
									<FormControl>
										<Input placeholder="Model" {...field} />
									</FormControl>
									{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="year"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Year</FormLabel>
									<FormControl>
										<Input placeholder="Year" {...field} />
									</FormControl>
									{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="color"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Color</FormLabel>
									<FormControl>
										<Input placeholder="Color" {...field} />
									</FormControl>
									{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<DialogFooter>
							<Button type="submit">Submit</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</Form>
	)
}

export default CarForm
