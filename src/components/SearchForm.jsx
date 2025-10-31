import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchForm({ onSearch }) {
    const [form, setForm] = useState({
        referenceNo: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(form);
    };

  return (
    <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-3 bg-white p-4 rounded-xl shadow border border-gray-200 mb-6"
    >
        <input
            name="referenceNo"
            placeholder="Reference No"
            value={form.referenceNo}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md flex-1 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
            <Search size={16} /> Cari
        </button>
    </form>
  );
}
