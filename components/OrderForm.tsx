'use state'

import { useState } from "react";

export default function OrderForm() {

    const [name, setName] = useState("");

    return (
        <div>
            <div>
                <input
                    type="text"
                    required
                    placeholder="Enter order name"
                    className="border p-2 w-full mb-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit Order
                </button>
            </div>

        </div >
    )
}