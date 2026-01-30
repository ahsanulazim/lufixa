import Link from "next/link"
import Arrowbtn from "./Arrowbtn"

const Button = ({ name, arrowCls, className }) => {
    return (
        <Link href="#" className={`flex gap-3 items-center ${className ? className : ""}`}>
            <Arrowbtn className={`bg-silent-300 border-silent-50 ${arrowCls ? arrowCls : ""}`} />{name || "Learn More"}
        </Link>
    )
}

export default Button