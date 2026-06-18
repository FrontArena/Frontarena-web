import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}