import Section from "../layout/Section";
import ServiceMarquee from "../ServiceMarquee"
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
    return (
        <Section>
            <div className="flex flex-col md:flex-row gap-5 font-roboto-flex">
                <div className="lg:basis-2/3 bg-silent-200 rounded-xl p-5 overflow-hidden flex flex-col justify-between max-sm:gap-5">
                    <div className="p-0 sm:p-6 xl:p-10">
                        <h1 className="text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl sm:leading-10 xl:leading-12 2xl:leading-16 font-semibold text-heading">DIGITAL SOLUTIONS <br /> THAT DRIVE SUCCESS</h1>
                        <p className="opacity-50 font-extralight my-3 xl:my-5 text-sm">At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.</p>
                        <button className="btn uppercase p-0 h-auto btn-ghost hover:bg-transparent hover:shadow-none group text-heading hover:text-white"><span className="size-8 xl:size-10 bg-main group-hover:bg-main-light flex justify-center items-center rounded-full shine relative overflow-hidden before:w-10"><GoArrowUpRight className="text-silent-300 text-lg" /></span> Start A Project</button>
                    </div>
                    <div className="bg-silent-300 py-5 rounded-box">
                        <ServiceMarquee />
                    </div>
                </div>
                <div className="hidden lg:block lg:basis-1/3 rounded-xl overflow-hidden">
                    <img src="/assets/hero.jpg" alt="Hero Image" className="scale-102" />
                    <div className="bg-silent-200 p-5">
                        <h3 className="uppercase">Estatein Real Estate</h3>
                        <p className="opacity-50 font-extralight text-sm">Web development</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Hero