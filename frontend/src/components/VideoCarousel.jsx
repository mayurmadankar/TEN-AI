import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const content = [
  {
    heading: "Agentic Workflows",
    text: "Enable AI agents to take proactive actions by integrating them with your firm's systems, allowing for real-time responses and intelligent decision-making without constant human oversight.",
    video: "https://cdn.free-stock.video/3092022/drone-high-angle-view-architecture-flying-outdoors-famous-place-footage-152252-small.mp4",
  },
  {
    heading: "AI-Driven Efficiency",
    text: "AI-driven workflows reduce human error and ensure consistency in decision-making, making operations more efficient and reliable.",
    video: "https://cdn.free-stock.video/1262022/reflection-sunset-sunset-lake-clouds-water-nature-194442-small.mp4",
  },
  {
    heading: "Automating Repetitive Tasks",
    text: "By automating repetitive tasks, businesses can free up human resources for strategic problem-solving and innovation.",
    video: "https://cdn.free-stock.video/2862021/symbol-sign-film-ciname-countdown-vintage-youtube-intro-background-9730-small.mp4",
  },
];


export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeContent = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 500);
  };

  const prevContent = () => {
    changeContent(currentIndex === 0 ? content.length - 1 : currentIndex - 1);
  };

  const nextContent = () => {
    changeContent(currentIndex === content.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative flex flex-col items-center gap-12 mx-auto px-4 sm:px-8 lg:px-16">
      <span className="flex w-full flex-col items-center text-center gap-8">
        <h1 className="w-full max-w-2xl font-semibold text-3xl sm:text-4xl">
          Discover How TEN AI Can Transform Your Workflows
        </h1>
        <hr className="bg-black w-full max-w-md" />
      </span>
      
      {/* For large screens: Text on left, Video on right */}
      <div className="hidden md:flex flex-row-reverse items-center justify-between w-full max-w-6xl mx-auto gap-12">
        <div className="w-1/2 flex justify-center">
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
            <video
              key={content[currentIndex].video}
              src={content[currentIndex].video}
              autoPlay
              loop
              muted
              className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            />
          </div>
        </div>
        <div className={`w-1/2 text-left transition-opacity duration-700 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}> 
          <h2 className="text-2xl font-bold mb-4">{content[currentIndex].heading}</h2>
          <p className="text-gray-700">{content[currentIndex].text}</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-4 p-4 self-start">
        <button
          onClick={prevContent}
          className="p-2 bg-lime-400 rounded-full hover:bg-lime-600"
        >
          <ChevronLeft size={24} />
        </button>
        <span className="text-gray-700">
          {currentIndex + 1}/{content.length}
        </span>
        <button
          onClick={nextContent}
          className="p-2 bg-lime-400 rounded-full hover:bg-lime-600"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* For small screens: Video -> Navigation Buttons -> Text */}
      <div className="flex flex-col md:hidden items-center w-full gap-6">
        <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
          <video
            key={content[currentIndex].video}
            src={content[currentIndex].video}
            autoPlay
            loop
            muted
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
        <div className="flex items-center gap-4 p-4 self-start">
          <button
            onClick={prevContent}
            className="p-2 bg-lime-400 rounded-full hover:bg-lime-600"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-gray-700">
            {currentIndex + 1}/{content.length}
          </span>
          <button
            onClick={nextContent}
            className="p-2 bg-lime-400 rounded-full hover:bg-lime-600"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="text-center"> 
          <h2 className="text-2xl font-bold mb-4">{content[currentIndex].heading}</h2>
          <p className="text-gray-700">{content[currentIndex].text}</p>
        </div>
      </div>
    </div>
  );
}