import Counts from "@/components/home/Counts"
import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import Strategy from "@/components/home/Strategy"

const page = () => {
    return (
        <main>
            <Hero />
            <Counts />
            <Strategy />
            <Services />
        </main>
    )
}

export default page