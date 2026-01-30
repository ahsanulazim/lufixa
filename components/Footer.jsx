import Link from "next/link"
import Section from "./layout/Section"
import SocialCard from "./ui/SocialCard"
import Arrowbtn from "./ui/Arrowbtn"

const Footer = () => {

    const links = "link link-hover opacity-50"

    return (
        <Section className="w-full">
            <footer className="grid grid-cols-5 grid-rows-6 gap-5 *:rounded-xl *:p-6">
                <SocialCard className="bg-silent-200 row-span-3" />
                <SocialCard className="bg-silent-200 row-span-3" />
                <SocialCard className="bg-silent-200 row-span-3 order-6" />
                <SocialCard className="bg-silent-200 row-span-3 order-7" />
                <div className="bg-silent-200 col-span-3 row-span-3 grid grid-cols-4 gap-5">
                    <nav className="menu font-roboto-flex gap-5">
                        <h3 className="font-roboto-mono text-lg text-heading font-semibold">Home</h3>
                        <Link href="#" className={links}>Why us</Link>
                        <Link href="#" className={links}>About us</Link>
                        <Link href="#" className={links}>Testimonials</Link>
                        <Link href="#" className={links}>FAQ&apos;s</Link>
                    </nav>
                    <nav className="menu font-roboto-flex gap-5">
                        <h3 className="font-roboto-mono text-lg text-heading font-semibold">Services</h3>
                        <Link href="#" className={links}>Web Development</Link>
                        <Link href="#" className={links}>App Development</Link>
                        <Link href="#" className={links}>Web Design</Link>
                        <Link href="#" className={links}>Digital Marketing</Link>
                    </nav>
                    <nav className="menu font-roboto-flex gap-5">
                        <h3 className="font-roboto-mono text-lg text-heading font-semibold">Projects</h3>
                        <Link href="#" className={links}>Shajidint</Link>
                        <Link href="#" className={links}>Nexoro</Link>
                        <Link href="#" className={links}>Innovist</Link>
                        <Link href="#" className={links}>Finpay</Link>
                    </nav>
                    <nav className="menu font-roboto-flex gap-5">
                        <h3 className="font-roboto-mono text-lg text-heading font-semibold">Blogs</h3>
                        <Link href="#" className={links}>Business</Link>
                        <Link href="#" className={links}>Design <div className="badge bg-silent-50">Soon</div></Link>
                        <Link href="#" className={links}>Development <div className="badge bg-silent-50">Soon</div></Link>
                    </nav>
                </div>
                <div className="bg-silent-200 col-span-3 row-span-2 order-8 flex items-center justify-between gap-5">
                    <div>
                        <h6 className="text-sm opacity-50">NEWSLETTER</h6>
                        <h2 className="font-roboto-flex text-xl">SUBSCRIBE TO OUR NEWSLETTER</h2>
                    </div>
                    <form className="flex-1 flex gap-5 font-roboto-flex">
                        <div className="flex-1">
                            <label className="input validator w-full border-0 border-b rounded-none bg-transparent shadow-none focus-within:outline-0" htmlFor="email">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input className="w-full" type="email" placeholder="Enter your email" name="email" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <button type="submit"><Arrowbtn className="bg-silent-100 border-silent-50" /></button>
                    </form>
                </div>
                <div className="bg-silent-200 col-span-3 order-9">
                    <footer className="footer sm:footer-horizontal items-center opacity-50">
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