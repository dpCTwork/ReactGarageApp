import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"

import Logo from "./ui/app-logo"
import { User, LogIn } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { ModeToggle } from "./ui/mode-toggle"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, gAuthProvider } from "@/config/firebase"

const Navbar = () => {
	const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

	const navigate = useNavigate()

	const signInGoogle = async () => {
		// This returns a promise
		await signInWithPopup(auth, gAuthProvider).then(() => {
			localStorage.setItem("isAuth", "true")
			setIsAuth("true")
			// console.log(res.user.photoURL)
			navigate("/")
		})
	}

	const signOutUser = () => {
		signOut(auth).then(() => {
			localStorage.removeItem("isAuth")
			setIsAuth(null)
			navigate("/")
		})
	}

	return (
		<nav className="flex items-center justify-between px-3 sm:px-7 py-2 border-b border-border text-foreground">
			<div className="flex items-center justify-between gap-4 text-xl xs:text-base">
				<Logo height={"25"} width={"25"} color={"#007f5f"} />
				<Link to="/">My Car App</Link>
			</div>

			<div className="hidden sm:flex sm:justify-start sm:gap-7 sm:m-auto">
				<Button size="sm">
					<Link to="/about">About</Link>
				</Button>
				{isAuth ? (
					<Button size="sm">
						<Link to="/garage">Garage</Link>
					</Button>
				) : null}
				<Button size="sm">
					<Link to="/contact">Contact</Link>
				</Button>
			</div>

			<div className="flex gap-2 sm:gap-4 md:gap-8">
				<ModeToggle />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						{isAuth ? (
							<Button variant="outline" size="smr">
								<Avatar>
									<AvatarImage
										className="rounded-full"
										src={auth.currentUser?.photoURL ?? ""}
										alt="user_avatar"
									/>
									<AvatarFallback>
										<User />
									</AvatarFallback>
								</Avatar>
							</Button>
						) : (
							<Button variant="outline" size="smr">
								<Avatar className="pl-1">
									<LogIn className="my-auto" />
								</Avatar>
							</Button>
						)}
					</DropdownMenuTrigger>
					{/* </Button> */}
					<DropdownMenuContent
						className="w-auto bg-background"
						align="center"
						forceMount>
						<DropdownMenuGroup>
							<DropdownMenuItem className="justify-start ps-5 sm:hidden">
								<Link to="/about">About</Link>
							</DropdownMenuItem>
							{isAuth ? (
								<DropdownMenuItem className="justify-start ps-5 sm:hidden">
									<Link to="/garage">Garage</Link>
								</DropdownMenuItem>
							) : null}
							<DropdownMenuItem className="justify-start ps-5 sm:hidden">
								<Link to="/contact">Contact</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator className="sm:hidden" />
							{isAuth ? (
								<DropdownMenuItem
									className="justify-start ps-5"
									onClick={signOutUser}>
									Sign Out
								</DropdownMenuItem>
							) : (
								<DropdownMenuItem
									className="justify-start ps-5"
									onClick={signInGoogle}>
									Sign In
								</DropdownMenuItem>
							)}
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	)
}

export default Navbar
