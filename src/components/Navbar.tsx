import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"

// import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu"

import Logo from "./ui/app-logo"
import { User} from "lucide-react"
import { Link } from "react-router-dom"
// import { useState } from "react"
import { ModeToggle } from "./ui/mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"

const Navbar = () => {
	// const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="flex items-center justify-between px-7 py-2 border-b border-border text-foreground">
			<div className="flex items-center justify-between gap-4 text-xl">
				<Logo height={"25"} width={"25"} color={"#007f5f"} />
				My Car App
			</div>

			<div className="hidden sm:flex sm:justify-start sm:gap-7 sm:m-auto">
				<Button
					size="sm"
					className="bg-background text-foreground text-md font-normal hover:bg-muted">
					<Link to="/about">About</Link>
				</Button>
				<Button
					size="sm"
					className="bg-background text-foreground text-md font-normal hover:bg-muted">
					<Link to="/garage">Garage</Link>
				</Button>
				<Button
					size="sm"
					className="bg-background text-foreground text-md font-normal hover:bg-muted">
					<Link to="/contact">Contact</Link>
				</Button>
			</div>

			<div className="flex gap-2">
				<ModeToggle />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="smr">
							<Avatar>
								<AvatarImage
									className="rounded-full"
									src="https://github.com/shadcn.pg"
									alt="placeholder"
								/>
								<AvatarFallback>
									<User />
								</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-auto bg-background"
						align="center"
						forceMount>
						<DropdownMenuGroup>
							<DropdownMenuItem className="justify-start ps-5">
								My Profile
							</DropdownMenuItem>
							<DropdownMenuItem className="justify-start ps-5">
								My Vehicles
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="justify-start ps-5 sm:hidden">
								<Link to="/about">About</Link>
							</DropdownMenuItem>
							<DropdownMenuItem className="justify-start ps-5 sm:hidden">
								<Link to="/garage">Garage</Link>
							</DropdownMenuItem>
							<DropdownMenuItem className="justify-start ps-5 sm:hidden">
								<Link to="/contact">Contact</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator className="sm:hidden" />
							<DropdownMenuItem className="justify-start ps-5">
								Sign Out
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
				{/* <Button className="pe-1 text-primary-300">
					<User size={20} strokeWidth={2} />
				</Button> */}
			</div>

			{/* <div className="flex items-center justify-between gap-4">
				<DropdownMenu
					open={isOpen}
					onOpenChange={setIsOpen}
				>
					<Avatar>
						<AvatarFallback>
							<AvatarImage
								src="https://avatars.githubusercontent.com/u/13879127?v=4"
								alt="avatar"
							/>
						</AvatarFallback>
					</Avatar>
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Settings</DropdownMenuItem>
					<DropdownMenuItem>Logout</DropdownMenuItem>
				</DropdownMenu>
			</div> */}
		</nav>
	)
}

export default Navbar
