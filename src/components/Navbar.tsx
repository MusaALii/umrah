import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-[#f1f4f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-3">
                    <h2 className="text-lg font-bold text-black">Umrah Travel</h2>
                    {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-40 lg:hidden"></div>}
                    <nav className={`fixed top-0 right-0 z-50 h-screen w-[280px] bg-white px-6 pt-24 pb-5 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:flex lg:flex-row lg:items-center lg:gap-8 lg:p-0`}>
                        <Link to="/" onClick={() => setOpen(false)} className="text-sm font-medium hover:text-primary">Home</Link>
                        <Link to="/packages" onClick={() => setOpen(false)} className="text-sm font-medium hover:text-primary">Packages</Link>
                        <Link to="/services" onClick={() => setOpen(false)} className="text-sm font-medium hover:text-primary">Services</Link>
                        <Link to="/about" onClick={() => setOpen(false)} className="text-sm font-medium hover:text-primary">About Us</Link>
                        <Link to="/contact" onClick={() => setOpen(false)} className="text-sm font-medium hover:text-primary">Contact</Link>
                        <Button text="Book Now" bgColor="greeny" padding="10px 14px" />
                    </nav>
                    <button onClick={() => setOpen(!open)} className="lg:hidden relative z-50 cursor-pointer">
                        {open ? (
                            <img src="./cross-menu.svg" alt="close menu" className="w-7" />
                        ) : (
                            <img src="./menu.svg" alt="menu" className="w-7" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
