 
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
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
} from "@/components/ui/menubar"
import { CaretDownIcon } from "@radix-ui/react-icons";

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

  return (
    <div>
   <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed   w-full    transition-all duration-300 z-50 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-white z-50 border-b-2"
      }`}
    >
      <div className=" flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          TEN<span className="text-blue-500 ">AI</span>
        </motion.h1>

        {/* Navigation */}
        <nav className="hidden md:flex  ">
        <Menubar className="gap-5">
      <MenubarMenu >
        <MenubarTrigger>
        Solutions <CaretDownIcon/>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Custom Ai Agents
            
          </MenubarItem>
          <MenubarItem>
            All Survices For StartUp  
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Why Ten-Ai</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
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
          <CaretDownIcon/>
          </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Retail  
          </MenubarItem>
          <MenubarItem>
            Insurance  
          </MenubarItem>
         
        
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Company</MenubarTrigger>
      
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Blogs
        <CaretDownIcon/>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Costumer Stories  
          </MenubarItem>
          <MenubarItem>
            Latest Insights 
          </MenubarItem>
         
        
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
        </nav>
        <div className="bg-blue-500 hover:bg-black transition-all cursor-pointer
         text-white border rounded-full mr-9">
       Let's Talk
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

