import { apiCalls } from "@/server/api/server"

import { TCars } from "@/server/cardata"
import { useEffect, useState } from "react"

export const useGetCarData = () => {
	const [carData, setCarData] = useState<TCars[]>([])
	async function handleDataFetch() {
		const res = await apiCalls.getCars()
		setCarData(res as TCars[])
	}

	useEffect(() => {
		handleDataFetch()
	}, [])

	return { carData, getCarData: handleDataFetch }
}
