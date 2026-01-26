import Link from "next/link"
import NavItems from "./NavItems"
import { TbAlignRight } from "react-icons/tb";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar max-w-360 mx-auto px-5">
                <div className="flex-1">
                    <Link href="/" className="w-fit block"><img src="/assets/logo.svg" alt="logo" /></Link>
                </div>
                <div className="flex-none">
                    <div className="max-lg:hidden">
                        <ul className="menu menu-horizontal px-1">
                            <NavItems />
                        </ul>
                        <button className="btn btn-main">CONTACT US</button>
                    </div>
                    <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-main lg:hidden">
                        <TbAlignRight className="inline-block size-6" />
                    </label>
                </div>
            </nav>
        </header>
    )
}

export default Navbar