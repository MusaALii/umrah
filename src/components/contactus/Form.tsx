import { useState } from "react";
import Button from "../Button";
export default function ContactForm() {
  const [formData, setFormData] = useState({ fullName: "", phone: "", email: "", package: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.package.trim()) newErrors.package = "Please select a package";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    console.log(formData);
    setFormData({ fullName: "", phone: "", email: "", package: "", message: "" });
    setErrors({});
  };
  return (
    <section className="flex-grow bg-white py-16 px-4 sm:px-10">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-[#131811] text-3xl font-bold mb-3 tracking-tight">Send an Inquiry</h2>
            <p className="text-[#000000]">Fill out the form below and our team will get back to you within 24 hours.</p>
          </div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-5">
              <label className="flex flex-col flex-1 gap-2">
                <span className="text-[#131811] text-sm font-semibold">Full Name</span>
                <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Ahmed Ali" type="text"
                  className={`w-full h-12 px-4 rounded-lg border outline-none ${errors.fullName ? "border-red-500" : "border-[#d4e9f2]"}`} />
                {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
              </label>
              <label className="flex flex-col flex-1 gap-2">
                <span className="text-[#131811] text-sm font-semibold">Phone Number</span>
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" type="tel"
                  className={`w-full h-12 px-4 rounded-lg border outline-none ${errors.phone ? "border-red-500" : "border-[#d4e9f2]"}`} />
                {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-[#131811] text-sm font-semibold">Email Address</span>
              <input name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" type="email"
                className={`w-full h-12 px-4 rounded-lg border outline-none ${errors.email ? "border-red-500" : "border-[#d4e9f2]"}`} />
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[#131811] text-sm font-semibold">Package Interest</span>
              <select name="package" value={formData.package} onChange={handleChange}
                className={`w-full h-12 px-4 rounded-lg border outline-none ${errors.package ? "border-red-500" : "border-[#d4e9f2]"}`}>
                <option value="">Select Package</option>
                <option value="Standard">Standard Umrah Package</option>
                <option value="Premium">Premium Umrah Package</option>
                <option value="Family">Family Group Package</option>
                <option value="Custom">Custom Itinerary</option>
              </select>
              {errors.package && <span className="text-red-500 text-xs">{errors.package}</span>}
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[#131811] text-sm font-semibold">Message</span>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Please provide any specific requirements or questions..."
                className={`w-full min-h-[140px] p-4 rounded-lg border outline-none : "border-[#d4e9f2]"}`} />
            </label>
            <button type="submit" className="bg-[#162711] hover:bg-[#25a000] transition-all duration-300 ease-in-out hover:text-white px-4 py-3 text-white font-bold rounded-[8px]">
              Submit
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-[#dee6db] shadow-inner">
            <iframe className="absolute inset-0 w-full h-full" src="https://www.google.com/maps?q=Mecca&output=embed"></iframe>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#dee6db] flex gap-3">
              <img src="greentime.svg" alt="" className="w-6 h-6" />
              <div>
                <h4 className="font-bold text-black mb-1">Office Hours</h4>
                <p className="text-xs text-black">Mon - Fri: 09:00 - 18:00</p>
                <p className="text-xs text-black">Sat: 10:00 - 14:00</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#dee6db] flex gap-3">
              <img src="greenverified.svg" alt="" className="w-6 h-6" />
              <div>
                <h4 className="font-bold text-black mb-1">Trust & Safety</h4>
                <p className="text-xs text-black">Certified Travel Agency</p>
                <p className="text-xs text-black">Licensed for Umrah Services</p>
              </div>
            </div>
          </div>
          <Button text="Open in Map" href="https://www.google.com/maps" bgColor="greeny" padding="8px 10px" />
        </div>
      </div>
    </section>
  );
}
