import { ThemeProvider } from "./theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import routes from "./config/routes"
import Navbar from "./components/Navbar"

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<Navbar />
				<Routes>
					{routes.map((route, index) => (
						<Route
						key={index}
						path={route.path}
						element={<route.component />}
						/>
						))}
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
