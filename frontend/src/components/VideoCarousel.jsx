import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const content = [
  {
    heading: "Agentic Workflows",
    text: "Enable AI agents to take proactive actions by integrating them with your firm's systems, allowing for real-time responses and intelligent decision-making without constant human oversight.",
    video: "https://videocdn.cdnpk.net/videos/34e4463b-eb03-48e1-9f3b-5d850717b5c4/horizontal/previews/clear/large.mp4?token=exp=1743355694~hmac=0f859eb6cf70d7e777534e7205712d9ed160ce1ec672418dd971e816e8e6c426",
  },
  {
    heading: "AI-Driven Efficiency",
    text: "AI-driven workflows reduce human error and ensure consistency in decision-making, making operations more efficient and reliable.",
    video: "https://videocdn.cdnpk.net/videos/997afe2c-65f5-49c1-abfc-fde1abcf9e8c/horizontal/previews/clear/large.mp4?token=exp=1743354429~hmac=02fd4fb7597c3e4821a1e7182cd0814341a6cd4bbf641386041ba72e5914065e",
  },
  {
    heading: "Automating Repetitive Tasks",
    text: "By automating repetitive tasks, businesses can free up human resources for strategic problem-solving and innovation.",
    video: "https://videocdn.cdnpk.net/videos/2de7c1b4-26e4-41de-9d57-2c2325a70897/horizontal/previews/clear/large.mp4?token=exp=1743354518~hmac=2bbb1bcbb4eb23acc775b200e7044acea759b8e4bae9bc5410a2423d40d48164",
  },
];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeContent = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 500);
  };

  const prevContent = () => {
    changeContent(currentIndex === 0 ? content.length - 1 : currentIndex - 1);
  };

  const nextContent = () => {
    changeContent(currentIndex === content.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative flex items-start flex-col gap-12 mx-auto">
      <span className="flex w-full flex-col items-start gap-8">
        <h1 className="w-[40vw] font-semibold text-4xl">Discover How TEN AI Can Transform Your Workflows</h1>
        <hr className=" bg-black w-full"/>
      </span>
      <div className="relative flex flex-col md:flex-row justify-between w-full max-w-6xl mx-auto gap-12">
        <div className={`md:w-1/2 mt-4 text-left transition-opacity duration-700 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}> 
          <h2 className="text-2xl font-bold mb-4">{content[currentIndex].heading}</h2>
          <p className="text-gray-700">{content[currentIndex].text}</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
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
        <div className="absolute bottom-0 left-0 flex items-center gap-4 p-4">
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
      </div>
    </div>
  );
}
