import { Link } from "react-router-dom";
import Button from "./Button";
export default function Navbar() {
    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white border-b border-solid border-[#f1f4f0]  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] ">
                <div className="container flex justify-center w-full">
                    <div className="flex container items-center justify-between px-4 lg:px-5 py-3">
                        <div className="flex items-center gap-4 text-[#131811] dark:text-white">
                            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-black  ">Umrah Travel</h2>
                        </div>
                        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
                            <div className="flex items-center gap-9">
                                <Link className="text-[#131811] dark:text-back text-sm font-medium hover:text-primary transition-colors" to="/">Home</Link>
                                <Link className="text-[#131811] dark:text-back text-sm font-medium hover:text-primary transition-colors" to="/packages">Packages</Link>
                                <Link className="text-[#131811] dark:text-back text-sm font-medium hover:text-primary transition-colors" to="/services">Services</Link>
                                <Link className="text-[#131811] dark:text-back text-sm font-medium hover:text-primary transition-colors" to="/about">About Us</Link>
                                <Link className="text-[#131811] dark:text-back text-sm font-medium hover:text-primary transition-colors" to="/contact">Contact</Link>
                            </div>
                          <Button/>
                        </div>
                        <div className="lg:hidden text-[#131811]">
                          <img src="./menu.svg" alt="" className="w-7" />
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}