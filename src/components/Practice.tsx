import React, { useState } from "react";
export default function Practice() {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 mt-10">
                <h1 className="text-[36px]">click here</h1>
                <button className="bg-amber-700 py-4 px-3" onClick={() => setOpen(!open)}>
                    {open ? "close div" : "open div"}
                </button>
                {open && (
                    <div className="bg-green-200 p-4 mt-2 rounded shadow">
                        <p>This is your toggled div content!</p>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-10">
                <p>click hereto count numbers</p>
                <button className="bg-amber-300 px-4 py-2" onClick={() => setCount((count => count + 1))}>{count}</button>
                <button className={active ? "bg-green-500 px-5 py-7" : "bg-gray-500"} onClick={() => setActive(!active)}> Click Me</button>
            </div>
        </>
    );
}
