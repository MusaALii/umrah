
import { useState } from "react";
import Button from "../Button";
export default function Accordians() {
    const Accordians = [
        {
            title: "What documents are required for an Umrah Visa?",
            icon: "./direction.svg",
            content: "To apply for an Umrah visa, you generally need a passport valid for at least 6 months from the date of travel, a recent passport-sized photograph with a white background, and proof of meningitis vaccination (ACWY). Depending on your country of residence, additional biometric data might be required.",
            catogery: "health"
        },
        {
            title: "How long does visa processing take?",
            icon: "./direction.svg",
            content: "Electronic visas (e-Visas) are typically processed within 24 to 48 hours. However, we recommend applying at least 2 weeks in advance, especially during peak seasons like Ramadan, to account for any unexpected delays from the Ministry.",
            catogery: "travel"
        },
        {
            title: "What is the cancellation and refund policy?",
            icon: "./direction.svg",
            content: "We offer flexible cancellation policies for early bookings. Cancellations made more than 30 days before departure are eligible for a full refund (minus visa fees). Cancellations within 14-29 days incur a 20% fee. Please check specific package terms as hotel policies during Ramadan may be non-refundable.",
            catogery: "health"
        },
        {
            title: "Is there a deadline for booking Ramadan packages?",
            icon: "./direction.svg",
            content: "Due to extremely high demand for hotels near the Haram, we strongly advise booking Ramadan packages at least 3 months in advance. Last-minute availability is rare and often comes at a premium price.",
            catogery: "health"
        },
        {
            title: "Do you offer installment plans?",
            icon: "./direction.svg",
            content: "Yes, select packages are eligible for our Pay in 3 installment plan. You can secure your booking with a 35% deposit, with the remaining balance due 30 days before your departure date.",
            catogery: "travel"
        },
        {
            title: "Are there current COVID-19 or vaccination requirements?",
            icon: "./direction.svg",
            content: "Currently, the Kingdom has lifted most COVID-19 restrictions. Proof of vaccination is generally not required for entry, but we always recommend carrying your vaccination record. Wearing masks in the Grand Mosque is optional but encouraged during crowded times.",
            catogery: "travel"
        },
        {
            title: "What documents are required for an Umrah Visa?",
            icon: "./direction.svg",
            content: "To apply for an Umrah visa, you generally need a passport valid for at least 6 months from the date of travel, a recent passport-sized photograph with a white background, and proof of meningitis vaccination (ACWY). Depending on your country of residence, additional biometric data might be required.",
            catogery: "travel"
        },
        {
            title: "How long does visa processing take?",
            icon: "./direction.svg",
            content: "Electronic visas (e-Visas) are typically processed within 24 to 48 hours. However, we recommend applying at least 2 weeks in advance, especially during peak seasons like Ramadan, to account for any unexpected delays from the Ministry.",
            catogery: "travel"
        },
        {
            title: "What is the cancellation and refund policy?",
            icon: "./direction.svg",
            content: "We offer flexible cancellation policies for early bookings. Cancellations made more than 30 days before departure are eligible for a full refund (minus visa fees). Cancellations within 14-29 days incur a 20% fee. Please check specific package terms as hotel policies during Ramadan may be non-refundable.",
            catogery: "visa"
        },
        {
            title: "Is there a deadline for booking Ramadan packages?",
            icon: "./direction.svg",
            content: "Due to extremely high demand for hotels near the Haram, we strongly advise booking Ramadan packages at least 3 months in advance. Last-minute availability is rare and often comes at a premium price.",
            catogery: "visa"
        },
        {
            title: "Do you offer installment plans?",
            icon: "./direction.svg",
            content: "Yes, select packages are eligible for our Pay in 3 installment plan. You can secure your booking with a 35% deposit, with the remaining balance due 30 days before your departure date.",
            catogery: "visa"
        },
        {
            title: "Are there current COVID-19 or vaccination requirements?",
            icon: "./direction.svg",
            content: "Currently, the Kingdom has lifted most COVID-19 restrictions. Proof of vaccination is generally not required for entry, but we always recommend carrying your vaccination record. Wearing masks in the Grand Mosque is optional but encouraged during crowded times.",
            catogery: "visa"
        },
        {
            title: "Are there current COVID-19 or vaccination requirements?",
            icon: "./direction.svg",
            content: "Currently, the Kingdom has lifted most COVID-19 restrictions. Proof of vaccination is generally not required for entry, but we always recommend carrying your vaccination record. Wearing masks in the Grand Mosque is optional but encouraged during crowded times.",
            catogery: "booking"
        },

        {
            title: "Are there current COVID-19 or vaccination requirements?",
            icon: "./direction.svg",
            content: "Currently, the Kingdom has lifted most COVID-19 restrictions. Proof of vaccination is generally not required for entry, but we always recommend carrying your vaccination record. Wearing masks in the Grand Mosque is optional but encouraged during crowded times.",
            catogery: "booking"
        },

        {
            title: "Are there current COVID-19 or vaccination requirements?",
            icon: "./direction.svg",
            content: "Currently, the Kingdom has lifted most COVID-19 restrictions. Proof of vaccination is generally not required for entry, but we always recommend carrying your vaccination record. Wearing masks in the Grand Mosque is optional but encouraged during crowded times.",
            catogery: "booking"
        },

        {
            title: "Are there current COVID-19 or vaccination requirements?",
            icon: "./direction.svg",
            content: "Currently, the Kingdom has lifted most COVID-19 restrictions. Proof of vaccination is generally not required for entry, but we always recommend carrying your vaccination record. Wearing masks in the Grand Mosque is optional but encouraged during crowded times.",
            catogery: "booking"
        },


    ];
    const [active, setActive] = useState("all");

    const filteredAccordians = active === "all" ? Accordians : Accordians.filter(Accordians => Accordians.catogery === active);

    return (
        <>
             <div className="bg-[#e8e8e8] py-10">
                <div className="flex flex-col gap-6 px-5 container mx-auto">
                    <h3 className="text-xl font-bold text-[#131811] ">Browse by Category</h3>
                    <div className="flex gap-3 flex-wrap mb-5">
                        <Button text="All" padding="7px 10px" onClick={() => setActive("all")} />
                        <Button text="Visa & Docs" bgColor="greeny" padding="7px 10px" onClick={() => setActive("visa")} />
                        <Button text="Booking & payments" bgColor="greeny" padding="7px 10px" onClick={() => setActive("booking")} />
                        <Button text="Health & safety" bgColor="greeny" padding="7px 10px" onClick={() => setActive("health")} />
                        <Button text="Travel Logistics" bgColor="greeny" padding="7px 10px" onClick={() => setActive("travel")} />
                    </div>
                </div>
                <div className="bg-[#e8e8e8] p">
                    <div className="container flex flex-col p-4 gap-4 mt-2 pb-5">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm uppercase tracking-wider text-black font-bold mt-2 mb-1">Visa &amp; Documentation</h4>
                            {filteredAccordians.map(Accordians =>
                                <details className="flex flex-col rounded-xl border border-[#dee6db] dark:border-[#2a3c26] text-black dark:bg-[#ffffff] overflow-hidden group shadow-sm">
                                    <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 bg-white  hover:bg-gray-50 dark:hover:bg-[#23351d] hover:text-white transition-colors">
                                        <p className="text-[#131811] text-base font-semibold">{Accordians.title}</p>
                                        <span className="material-symbols-outlined text-[#131811] dark:text-white group-open:rotate-180 group-open:text-primary transition-transform duration-300"><img src={Accordians.icon} alt="" className="w-5 h-5 rotate-90" /></span>
                                    </summary>
                                    <div className="px-6 pb-6 pt-2">
                                        <p className="text-black text-sm leading-relaxed">
                                            {Accordians.content}
                                        </p>
                                    </div>
                             </details>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}