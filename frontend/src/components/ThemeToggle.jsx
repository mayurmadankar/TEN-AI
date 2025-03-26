import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    },[theme])

  return (
    <button className='cursor-pointer absolute right-10 top-4 z-50 ' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  )
}

export default ThemeToggle