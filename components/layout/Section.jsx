const Section = ({ children, className }) => {
    return (
        <section className={`max-w-360 mx-auto p-5 ${className ? className : ""}`}>{children}</section>
    )
}

export default Section