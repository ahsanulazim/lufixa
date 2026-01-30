import Link from "next/link"
import Section from "./layout/Section"
import SocialCard from "./ui/SocialCard"

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
                <div className="bg-silent-200 col-span-3 row-span-2 order-8">6</div>
                <div className="bg-silent-200 col-span-3 order-9">7</div>
            </footer>
        </Section>
    )
}

export default Footer