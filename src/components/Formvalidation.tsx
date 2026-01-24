import { use, useState } from "react"
export default function Formvalidation() {
    const [formdata, setformdata] = useState({ name: "", lname: "", email: "", password: "" })


    const handleSumbit = (e)=> {
        e.preventDefault()
        console.log(setformdata)

    }
    const handleChage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setformdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <>
            <div className=" flex justify-center items-center py-20">
                <form onSubmit={handleSumbit} >
                    <label >first name</label>

                    <input name="name" type="text" placeholder="enter your name" className="border-1" value={formdata.name} onChange={handleChage} />
                    <label >last name</label>
                    <input name="lname" type="text" placeholder="enter yourllast name" className="border-1" value={formdata.lname} onChange={handleChage} />
                    <br /><br />
                    <label >email</label>
                    <input name="email" type="text" placeholder="enter your email" className="border-1" value={formdata.email} onChange={handleChage} />
                    <label >password</label>
                    <input name="password" type="password" placeholder="enter your pasword" className="border-1" value={formdata.password} onChange={handleChage} />
                    <br />
                    <button className="bg-amber-400 py-3 px-6 mt-4 rounded-[16px] cursor-pointer" >sumbit here</button>
                </form>
            </div>


        </>
    )
}