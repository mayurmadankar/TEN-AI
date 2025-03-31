import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, Moon, MoveRight, Sun } from "lucide-react";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSub,
	MenubarSubTrigger,
	MenubarSubContent,
	MenubarCheckboxItem,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

  const {theme, setTheme} = useTheme();

	return (
		<div>
			<motion.header
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className={`fixed   w-full    transition-all duration-300 z-50 ${
					isScrolled
						? "bg-black/80 dark:bg-gray-800 text-gray-300 backdrop-blur-lg shadow-lg"
						: "bg-white dark:bg-black z-50 border-b-2"
				}`}
			>
				<div className=" flex justify-between items-center px-8">
					{/* Logo */}
					<motion.h1
						className="text-2xl font-bold"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						<span className="dark:text-white">TEN</span><span className="text-blue-500 ">AI</span>
					</motion.h1>

					{/* Navigation */}
					<nav className="hidden md:flex  ">
						<Menubar className="gap-5">
							<MenubarMenu>
								<MenubarTrigger>
									Solutions <CaretDownIcon />
								</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Custom Ai Agents</MenubarItem>
									<MenubarItem>
										All Services For StartUp
									</MenubarItem>
									<MenubarSeparator />
									<MenubarSub>
										<MenubarSubTrigger>
											Why Ten-Ai
										</MenubarSubTrigger>
										<MenubarSubContent>
											<MenubarItem>
												Email link
											</MenubarItem>
											<MenubarItem>Messages</MenubarItem>
											<MenubarItem>Notes</MenubarItem>
										</MenubarSubContent>
									</MenubarSub>
									<MenubarSeparator />
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>
									Industries
									<CaretDownIcon />
								</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Retail</MenubarItem>
									<MenubarItem>Insurance</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>Company</MenubarTrigger>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>
									Blogs
									<CaretDownIcon />
								</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>Costumer Stories</MenubarItem>
									<MenubarItem>Latest Insights</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
						</Menubar>
					</nav>
					<div
						className="flex gap-3 items-center "
					>
            <div>
              <button className='cursor-pointer right-10 top-4 z-50 ' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "dark" ? <Sun /> : <Moon />}
              </button>
            </div>
            <div className="flex gap-1 items-center bg-blue-500 hover:bg-black transition-all cursor-pointer
         text-white border-0 outline-0 rounded-full px-4 py-2 text-sm font-semibold">
						  <span>Let's Talk</span> {<MoveRight size={16}/>}
            </div>
					</div>

					{/* Mobile Menu */}
					<div className="md:hidden">
						<Menu className="w-8 h-8" />
					</div>
				</div>
			</motion.header>
		</div>
	);
};

export default Header;
