import Section from "../layout/Section"
import SecTitle from "../ui/SecTitle"
import ServiceCard from "../ui/ServiceCard"

const Services = () => {
    return (
        <Section>
            <div className="p-2 rounded-2xl border-2 border-silent-100 font-roboto-flex">
                <SecTitle title="Our Services" button={false} />
                <div className="grid lg:grid-cols-2 gap-2 mt-2">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
        </Section>
    )
}

export default Services