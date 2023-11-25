import { ThemeProvider } from "./theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import routes from "./config/routes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<div className="App">
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
					<Footer />
				</div>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
