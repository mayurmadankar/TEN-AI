


export default function Experts() {
  return (
    <section className="pt-20 pb-20">
        <div className="w-full pr-10 pl-10">
            <div className="z-1 text-center flex flex-col flex-nowrap items-center relative">
                <h2 className="text-4xl sm:text-5xl md:text-6xl text-black mt-0 mb-0 font-serif font-semibold leading-[140%] ">Led by Experts and <br /> Backed by Top Investors</h2>
                <div className="w-[50%] max-md:w-[80%] text-center mb-8 text-sm sm:text-base text-[#0009] font-serif leading-[150%]">At TEN AI, our team is composed of engineers from the world’s leading tech companies and top educational institutions. These experts drive the innovative capabilities of our agents, ensuring we deliver cutting-edge AI solutions.</div>
                <div className="flex gap-x-8 gap-y-8 justify-center mt-4 mr-auto mb-6 ml-auto">
                    <img src="https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/66913098d0aa065b20c64512_General%20Catalyst%20Logo.svg" className="h-[2rem] align-middle max-w-full max-md:w-[25%] inline-block" />
                    <div className="border-l-2"></div>
                    <img src="https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/669130989c67d1028935aaf6_Accel%20Logo.svg" className="h-[2rem] align-middle max-w-full inline-block max-md:w-[25%]" />
                    <div className="border-l-2"></div>
                    <img src="https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/66913098bd75e9011141f6d4_MerakiLabs%20Logo.png" className="h-[2rem] align-middle max-w-full inline-block max-md:w-[25%] " />
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-9 has-[>svg]:px-3 z-50 cursor-pointer p-5 mt-6 text-sm text-white hover:text-white bg-[#245ae2] hover:bg-black rounded-full">
                Meet the team →
                </button>
            </div>
        </div>
    </section>
  )
}
