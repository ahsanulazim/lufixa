import Link from "next/link"
import Section from "../layout/Section"
import CountCard from "../ui/CountCard"
import counts from "@/json/counts.json"
import { GoArrowUpRight } from "react-icons/go"

const Counts = () => {
    return (
        <Section>
            <div className="flex gap-3 p-2 rounded-2xl border-2 border-silent-100 flex-wrap">
                {counts.map((count) => <CountCard key={count.id} count={count} />)}
                <Link href="#" className="p-5 flex-1 flex items-center justify-center bg-silent-200 rounded-xl text-center gap-3">
                    <span className="size-8 xl:size-10 bg-silent-300 flex justify-center items-center rounded-full border-2 border-silent-100"><GoArrowUpRight className="text-main-light text-lg" /></span><h4 className="uppercase text-xs whitespace-nowrap"> Know More</h4>
                </Link>
            </div>
        </Section>
    )
}

export default Counts