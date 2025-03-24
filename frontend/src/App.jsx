import './App.css'
import { Compare } from './components/ui/Compare'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
function App() {
   

  return (
    <>
      
      <h1 class="text-3xl font-bold bg-green-400 flex justify-center  underline">
         Welcome to Ten.Ai
      </h1> 
       
      <hi>shad-cn setup successfully</hi>
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        
          <p className='border bg-cyan-400 w-16 cursor-pointer'> Hover</p>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  
      <div className="p-4 flex flex-col justify-center items-center rounded-3xl ">
      <h1 class=" font-bold   flex justify-center">
         examples for using animated component from ui.aceternity
      </h1> 
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
    </>
  )
}

export default App
