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
		<nav className="flex items-center justify-between px-8 py-4 border-b border-border text-primary">
			<div className="flex items-center justify-between gap-4 text-2xl">
				<Logo height={"30"} width={"30"} color={"#007f5f"} />
				My Car App
			</div>

			<div className="flex justify-end gap-7 text-xl ml-auto mr-10">
				<ModeToggle />
				<Button className="bg-accent text-accent-foreground text-base font-normal hover:bg-muted-foreground">
					<Link to="/about">About</Link>
				</Button>
				<Button className="bg-accent text-accent-foreground text-base font-normal hover:bg-muted-foreground">
					<Link to="/garage">Garage</Link>
				</Button>
				<Button className="bg-accent text-accent-foreground text-base font-normal hover:bg-muted-foreground">
					<Link to="/contact">Contact</Link>
				</Button>
			</div>

			<div className="flex mr-3">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="link"
							size="icon"
							className="rounded-full">
							<Avatar className="border-2 border-primary p-1">
								<AvatarImage
									className="rounded-full"
									src="https://github.com/shadcn.pg"
									alt="placeholder"
								/>
								<AvatarFallback className="bg-muted">
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
							<DropdownMenuItem className="justify-center">
								My Account
							</DropdownMenuItem>
							<DropdownMenuItem className="justify-center">
								My Vehicles
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className="justify-center">
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
