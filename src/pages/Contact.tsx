import { apiCalls } from "@/server/api/server"

const Contact = () => {
	console.log(apiCalls.getCars())

	return <div>Contact</div>
}

export default Contact
