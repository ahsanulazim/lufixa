import Marquee from "react-fast-marquee"

const ServiceMarquee = () => {
    return (
        <Marquee autoFill={true}>
            <p className="uppercase">Web design</p>
            <span className="text-main mx-5">•</span>
            <p className="uppercase">Branding</p>
            <span className="text-main mx-5">•</span>
            <p className="uppercase">Website Development</p>
            <span className="text-main mx-5">•</span>
            <p className="uppercase">Mobile App Development</p>
            <span className="text-main mx-5">•</span>
            <p className="uppercase">Digital Marketing</p>
        </Marquee>
    )
}

export default ServiceMarquee