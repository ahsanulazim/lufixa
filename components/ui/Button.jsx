import Link from "next/link"
import Arrowbtn from "./Arrowbtn"

const Button = () => {
    return (
        <Link href="#" className="flex gap-3 items-center">
            <Arrowbtn className="bg-silent-300 border-silent-50" /> Learn More
        </Link>
    )
}

export default Button