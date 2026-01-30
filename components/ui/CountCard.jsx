const CountCard = ({ count }) => {
    return (
        <div className="p-5 flex-1 bg-silent-200 rounded-xl text-center">
            <h4 className="uppercase text-xs whitespace-nowrap">{count.countItem}</h4>
            <h2 className="text-main-light font-roboto-flex text-4xl font-semibold">{count.totalCount}</h2>
        </div>
    )
}

export default CountCard