import { Separator } from "./ui/separator"

const Footer = () => {
	return (
		<footer className="mt-auto">
			<Separator />
			<div className="flex justify-center p-5 xs:text-sm">
				Copyright &copy; David Park, 2023
			</div>
		</footer>
	)
}

export default Footer