import { ModeToggler } from "@/shared/ui/modeToggler"
  
export function HomePage () {
    return (
        <main>
            <section className="w-full min-h-[100vh] firstBaner flex flex-col   items-center justify-center pr-[72px] pl-4 text-white">
                <h1 className="linearText text-[38px] font-600 text-left leading-11 mb-5 pl-0">Car as a Service <br />
                (CaaS)</h1>
                <p className="pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia, voluptate non itaque consectetur aut, nisi perferendis tenetur voluptas quis soluta molestiae facere dolor eius nulla laboriosam aperiam vero tempora?</p>
            </section>
            <ModeToggler />
            <p className="dark:text-white text-[#333]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos mollitia nihil laboriosam totam? Esse itaque, aperiam pariatur quia facere dignissimos minima ad suscipit cupiditate, doloribus libero minus nostrum! Similique.</p>
            <div className="bg-black dark:bg-white dark:text-black text-white h-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur esse, atque eos unde dolore iste ipsum dolorum quis voluptatum labore nostrum aut repudiandae veniam blanditiis neque ipsa sapiente obcaecati.</div>
            <div className="bg-white dark:bg-black dark:text-white h-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur esse, atque eos unde dolore iste ipsum dolorum quis voluptatum labore nostrum aut repudiandae veniam blanditiis neque ipsa sapiente obcaecati.</div>
            <div className="bg-black dark:bg-white dark:text-black text-white h-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur esse, atque eos unde dolore iste ipsum dolorum quis voluptatum labore nostrum aut repudiandae veniam blanditiis neque ipsa sapiente obcaecati.</div>
            <div className="bg-white dark:bg-black dark:text-white h-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur esse, atque eos unde dolore iste ipsum dolorum quis voluptatum labore nostrum aut repudiandae veniam blanditiis neque ipsa sapiente obcaecati.</div>
            <div className="bg-black dark:bg-white dark:text-black text-white h-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur esse, atque eos unde dolore iste ipsum dolorum quis voluptatum labore nostrum aut repudiandae veniam blanditiis neque ipsa sapiente obcaecati.</div>
            <div className="bg-white dark:bg-black dark:text-white h-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur esse, atque eos unde dolore iste ipsum dolorum quis voluptatum labore nostrum aut repudiandae veniam blanditiis neque ipsa sapiente obcaecati.</div>
            
        </main>
        

    )
}