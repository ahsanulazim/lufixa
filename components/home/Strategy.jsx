import Section from "../layout/Section"
import SecTitle from "../ui/SecTitle"
import StrategyCard from "../ui/StrategyCard"
import strategies from "@/json/strategies.json"

const Strategy = () => {
    return (
        <Section>
            <div className="p-2 rounded-2xl border-2 border-silent-100 font-roboto-flex">
                <SecTitle button={false} />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
                    {strategies.map((strategy) => <StrategyCard key={strategy.id} strategy={strategy} />)}
                </div>
            </div>
        </Section>
    )
}

export default Strategy