import { FaInstagram } from "react-icons/fa6";
import Arrowbtn from "./Arrowbtn";

const SocialCard = ({ className, children }) => {
    return (
        <div className={`flex flex-col justify-between ${className ? className : ""}`}>
            <div className="flex gap-5 justify-between items-center">
                <div className="avatar">
                    <div className="ring-silent-100 w-12 rounded-lg ring-2 shadow-lg flex items-center justify-center *:text-2xl *:text-main">
                        <FaInstagram />
                    </div>
                </div>
                <Arrowbtn className="bg-silent-100 border-silent-50" />
            </div>
            <div className="font-roboto-flex">
                <h2 className="uppercase text-xl text-heading mb-3">Instagram</h2>
                <p className="text-sm opacity-50">Share visually appealing snippets of our latest web projects.</p>
            </div>
        </div>
    )
}

export default SocialCard