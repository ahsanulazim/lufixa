import Marquee from "react-fast-marquee"

const ServiceMarquee = () => {
    return (
        <Marquee autoFill={true}>
            <p className="uppercase">Web design</p>
            <p className="uppercase">Branding</p>
            <p className="uppercase">Website Development</p>
            <p className="uppercase">Mobile App Development</p>
            <p className="uppercase">Digital Marketing</p>
        </Marquee>
    )
}

export default ServiceMarquee