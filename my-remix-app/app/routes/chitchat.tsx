// app/routes/index.tsx

// import styles from "../app/styles/tailwind.css"; // Adjust the path as per your actual file structure

import { Link } from "@remix-run/react";

import banner from "./app/images/pepe.jpeg";

export default function ChitChat() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12" src={banner} alt="ChitChat Logo"/>
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}
