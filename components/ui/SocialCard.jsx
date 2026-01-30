import { FaInstagram } from "react-icons/fa6";
import Arrowbtn from "./Arrowbtn";

const SocialCard = ({ className, children }) => {
    return (
        <div className={`flex flex-col justify-center md:justify-between ${className ? className : ""}`}>
            <div className="flex gap-5 justify-center md:justify-between items-center">
                <div className="md:avatar">
                    <div className="md:ring-silent-100 md:w-12 md:rounded-lg md:ring-2 md:shadow-lg flex items-center justify-center *:text-2xl *:text-main">
                        <FaInstagram />
                    </div>
                </div>
                <Arrowbtn className="bg-silent-100 border-silent-50 max-md:hidden" />
            </div>
            <div className="font-roboto-flex max-md:hidden">
                <h2 className="uppercase text-xl text-heading mb-3">Instagram</h2>
                <p className="text-sm opacity-50">Share visually appealing snippets of our latest web projects.</p>
            </div>
        </div>
    )
}

export default SocialCard