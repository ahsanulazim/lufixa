import ServiceMarquee from "../ServiceMarquee"

const Hero = () => {
    return (
        <section className="max-w-360 mx-auto px-5">
            <div className="grid grid-cols-3 gap-5  font-roboto-flex">
                <div className="col-span-2 bg-silent-200 rounded-xl p-5">
                    <div className="p-10">
                        <h1 className="text-6xl mb-6 leading-20">DIGITAL SOLUTIONS <br /> THAT DRIVE SUCCESS</h1>
                        <p className="opacity-50 font-extralight text-sm">At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.</p>
                    </div>
                    <div className="bg-silent-300 py-5 rounded-box">
                        <ServiceMarquee />
                    </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                    <img src="/assets/image.jpg" alt="Hero Image" className="scale-102" />
                    <div className="bg-silent-200 p-5">
                        <h3 className="uppercase">Estatein Real Estate</h3>
                        <p className="opacity-50 font-extralight text-sm">Web development</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero