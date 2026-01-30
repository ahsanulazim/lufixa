const Avatar = ({ children }) => {
    return (
        <div className="avatar">
            <div className="ring-silent-100 w-12 rounded-lg ring-2 flex items-center justify-center *:text-2xl *:text-main">
                {children}
            </div>
        </div>
    )
}

export default Avatar