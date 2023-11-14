import Home from "@/pages/Home"
import About from "@/pages/About"
import Garage from "@/pages/Garage"
import Contact from "@/pages/Contact"

interface RouteType {
	path: string
	component: () => React.ReactElement
	name: string
}

const routes: RouteType[] = [
	{
		path: "/",
		component: Home,
		name: "Home Screen",
	},
	{
		path: "/about",
		component: About,
		name: "About",
	},
	{
		path: "/garage",
		component: Garage,
		name: "Garage",
	},
	{
		path: "/contact",
		component: Contact,
		name: "Contact",
	},
]

export default routes
