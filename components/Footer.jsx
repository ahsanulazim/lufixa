import Link from "next/link"
import Section from "./layout/Section"
import SocialCard from "./ui/SocialCard"
import Arrowbtn from "./ui/Arrowbtn"
import footMenus from "@/json/footMenus.json"
import { LuMail } from "react-icons/lu";

const Footer = () => {

    const links = "link link-hover opacity-50"

    return (
        <Section className="w-full">
            <footer className="grid grid-cols-4 lg:grid-cols-5 grid-rows-5 md:grid-rows-6 gap-5 *:rounded-xl *:p-4 *:md:p-6">
                <SocialCard className="bg-silent-200 md:row-span-3" />
                <SocialCard className="bg-silent-200 md:row-span-3" />
                <SocialCard className="bg-silent-200 md:row-span-3 lg:order-6" />
                <SocialCard className="bg-silent-200 md:row-span-3 lg:order-7" />
                <div className="bg-silent-200 col-span-4 lg:col-span-3 row-span-4 md:row-span-3 grid grid-cols-2 md:grid-cols-4 md:gap-5 *:gap-3 *:md:gap-5">
                    {footMenus.map((menu) =>
                        <nav className="menu font-roboto-flex" key={menu.id}>
                            <h3 className="font-roboto-mono text-lg text-heading font-semibold">{menu.title}</h3>
                            {menu.submenus.map((sub) =>
                                <Link href="#" key={sub} className={links}>{sub}</Link>
                            )}
                        </nav>
                    )}
                </div>
                <div className="bg-silent-200 col-span-4 lg:col-span-3 row-span-2 lg:order-8 flex max-md:flex-col md:items-center md:justify-between gap-5">
                    <div>
                        <h6 className="text-sm opacity-50">NEWSLETTER</h6>
                        <h2 className="font-roboto-flex text-xl">SUBSCRIBE TO OUR NEWSLETTER</h2>
                    </div>
                    <form className="flex-1 flex items-center gap-5 font-roboto-flex">
                        <div className="flex-1">
                            <label className="input validator w-full border-0 border-b rounded-none bg-transparent shadow-none focus-within:outline-0" htmlFor="email">
                                <LuMail className="text-base opacity-50" />
                                <input className="w-full" type="email" placeholder="Enter your email" name="email" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <button type="submit"><Arrowbtn className="bg-silent-100 border-silent-50" /></button>
                    </form>
                </div>
                <div className="bg-silent-200 col-span-4 lg:col-span-3 lg:order-9">
                    <footer className="footer max-md:justify-center md:footer-horizontal max-sm:gap-3 items-center opacity-50">
                        <aside className="grid-flow-col items-center">
                            <p>© {new Date().getFullYear()} NextGen. All right reserved</p>
                        </aside>
                        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                            <Link href="#">Terms & Conditions</Link>
                            <Link href="#">Privacy Policy</Link>
                        </nav>
                    </footer>
                </div>
            </footer>
        </Section>
    )
}

export default Footer