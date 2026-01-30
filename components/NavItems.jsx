import Link from "next/link"

const NavItems = () => {
    return (
        <>
            <li><Link href="/" className="menu-active">HOME</Link></li>
            <li><Link href="#">SERVICES</Link></li>
            <li><Link href="#">PROJECTS</Link></li>
            <li><Link href="#">BLOGS</Link></li>
            <li><Link href="#">ABOUT</Link></li>
            <li><Link href="#">CAREER</Link></li>
        </>
    )
}

export default NavItems