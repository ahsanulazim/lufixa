import { FaPenRuler } from "react-icons/fa6"
import Avatar from "./Avatar"
import Button from "./Button"

const ServiceCard = () => {
    return (
        <div className="card bg-silent-200">
            <div className="card-body md:p-10">
                <div className="flex justify-between mb-5">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <FaPenRuler />
                        </Avatar>
                        <h2 className="text-2xl font-medium text-heading">Premium</h2>
                    </div>
                    <Button name="BOOK A CALL" arrowCls="!bg-silent-200" className="max-sm:hidden" />
                </div>
                <p className="opacity-50">Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.</p>
                <div className="card-actions justify-end">
                    <p className="uppercase grow-0 text-2xl">Starts From $1,500</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard