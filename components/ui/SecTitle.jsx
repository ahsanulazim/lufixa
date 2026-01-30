import Link from "next/link"
import Arrowbtn from "./Arrowbtn"

const SecTitle = ({ button }) => {
    return (
        <div className="flex items-center justify-between gap-5 p-7 bg-silent-200 rounded-xl">
            <div>
                <h2 className="text-2xl xs:text-3xl font-medium text-heading uppercase">Reasons to Choose NexGen for Your Digital Journey</h2>
            </div>
            {button && <Link href="#" className="flex gap-3 items-center uppercase max-sm:hidden">
                <Arrowbtn className="bg-silent-100 border-silent-50" /> All Testimonials
            </Link>}

        </div>
    )
}

export default SecTitle