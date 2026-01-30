import Marquee from "react-fast-marquee"
import Section from "./layout/Section"

const FollowMarquee = () => {
    return (
        <Section className="py-0 overflow-hidden w-full">
            <Marquee autoFill={true} className="bg-silent-200 p-5 rounded-xl">
                <p className="uppercase">Follow us on social media</p>
                <span className="text-main mx-5">•</span>
                <p className="uppercase">Follow us on social media</p>
                <span className="text-main mx-5">•</span>

            </Marquee>
        </Section>
    )
}

export default FollowMarquee