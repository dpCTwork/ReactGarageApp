import { collection, getDocs, addDoc } from "firebase/firestore"
import { db } from "@/config/firebase"
import { TCarFormSchema } from "../carform"

export const apiCalls = {
	getCars: async () => {
		const carsRef = collection(db, "cars")
		const data = await getDocs(carsRef)
		console.log(
			data.docs.map((doc) => ({
				...doc.data(),
				// id: doc.id,
			}))
		)
		return data.docs.map((doc) => ({ ...doc.data() }))
	},

	addCar: async (data: TCarFormSchema) => {
		const carsRef = collection(db, "cars")
		await addDoc(carsRef, {
			...data,
		})
	},
}
