import Button from "./Button"

const StrategyCard = ({ strategy }) => {
    return (
        <div className="card bg-silent-200 shadow-sm">
            <div className="card-body">
                <h2 className="card-title uppercase text-heading">{strategy.heading}</h2>
                <p className="opacity-50 text-sm font-light">{strategy.description}</p>
                <div className="card-actions mt-2">
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default StrategyCard