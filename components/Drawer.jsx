import FollowMarquee from "./FollowMarquee"
import Footer from "./Footer"
import Navbar from "./Navbar"
import NavItems from "./NavItems"

const Drawer = ({ children }) => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <Navbar />
                {/* Page content here */}
                {children}
                <FollowMarquee />
                <Footer />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-silent-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <NavItems />
                </ul>
            </div>
        </div>
    )
}

export default Drawer