import { GoArrowUpRight } from "react-icons/go"

const Arrowbtn = ({ className }) => {
    return (
        <span className={`size-8 xl:size-10  flex justify-center items-center rounded-full border-2 ${className ? className : ""}`}><GoArrowUpRight className="text-main-light text-lg" /></span>
    )
}

export default Arrowbtn