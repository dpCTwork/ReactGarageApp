import Home from "@/pages/Home"
import Garage from "@/pages/Garage"
import About from "@/pages/About"

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
]

export default routes
