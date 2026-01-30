import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";

export function LoginPage() {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col font-sans">
            <div
                className={`relative bg-white rounded-lg shadow-2xl overflow-hidden w-[768px] max-w-full min-h-[480px] transition-all duration-600 ${isRightPanelActive ? "right-panel-active" : ""}`}
                id="container"
            >
                {/* Sign Up Container */}
                <div
                    className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 ${isRightPanelActive
                            ? "opacity-100 z-[5] translate-x-full"
                            : "opacity-0 z-[1]"
                        }`}
                >
                    <form className="bg-white flex flex-col items-center justify-center h-full px-12 text-center">
                        <h1 className="text-3xl font-bold mb-4">Create Account</h1>
                        <div className="flex gap-4 mb-4">
                            <a href="#" className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors">
                                <Facebook className="w-5 h-5 text-gray-700" />
                            </a>
                            <a href="#" className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors">
                                <Linkedin className="w-5 h-5 text-gray-700" />
                            </a>
                            <a href="#" className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors">
                                <Twitter className="w-5 h-5 text-gray-700" />
                            </a>
                        </div>
                        <span className="text-sm text-gray-500 mb-4">or use your email for registration</span>
                        <div className="flex flex-col gap-3 w-full mb-6">
                            <Input type="text" placeholder="Name" className="bg-gray-100 border-none" />
                            <Input type="email" placeholder="Email" className="bg-gray-100 border-none" />
                            <Input type="password" placeholder="Password" className="bg-gray-100 border-none" />
                        </div>
                        <Button size="lg" className="rounded-full px-12 py-3 uppercase tracking-wider font-bold">Sign Up</Button>
                    </form>
                </div>

                {/* Sign In Container */}
                <div
                    className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 z-[2] ${isRightPanelActive ? "translate-x-full" : ""
                        }`}
                >
                    <form className="bg-white flex flex-col items-center justify-center h-full px-12 text-center">
                        <h1 className="text-3xl font-bold mb-4">Sign in</h1>
                        <div className="flex gap-4 mb-4">
                            <a href="#" className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors">
                                <Facebook className="w-5 h-5 text-gray-700" />
                            </a>
                            <a href="#" className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors">
                                <Linkedin className="w-5 h-5 text-gray-700" />
                            </a>
                            <a href="#" className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors">
                                <Twitter className="w-5 h-5 text-gray-700" />
                            </a>
                        </div>
                        <span className="text-sm text-gray-500 mb-4">or use your account</span>
                        <div className="flex flex-col gap-3 w-full mb-4">
                            <Input type="email" placeholder="Email" className="bg-gray-100 border-none" />
                            <Input type="password" placeholder="Password" className="bg-gray-100 border-none" />
                        </div>
                        <a href="#" className="text-sm text-gray-800 mb-6 hover:underline">Forgot your password?</a>
                        <Button size="lg" className="rounded-full px-12 py-3 uppercase tracking-wider font-bold">Sign In</Button>
                    </form>
                </div>

                {/* Overlay Container */}
                <div
                    className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-[100] ${isRightPanelActive ? "-translate-x-full" : ""
                        }`}
                >
                    <div
                        className={`bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] bg-no-repeat bg-cover relative -left-full h-full w-[200%] transition-transform duration-600 ease-in-out ${isRightPanelActive ? "translate-x-1/2" : "translate-x-0"
                            }`}
                    >
                        {/* Left Overlay Panel (for Sign In view, shows when right panel is active) */}
                        <div
                            className={`absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 transition-transform duration-600 ease-in-out ${isRightPanelActive ? "translate-x-0" : "-translate-x-[20%]"
                                }`}
                        >
                            <h1 className="text-3xl font-bold text-white mb-4">Welcome Back!</h1>
                            <p className="text-white mb-8 text-sm leading-6">To keep connected with us please login with your personal info</p>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-white text-white rounded-full px-12 py-3 uppercase tracking-wider font-bold hover:bg-white hover:text-[#FF4B2B]"
                                onClick={() => setIsRightPanelActive(false)}
                            >
                                Sign In
                            </Button>
                        </div>

                        {/* Right Overlay Panel (for Sign Up view, shows when normal) */}
                        <div
                            className={`absolute right-0 flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 transition-transform duration-600 ease-in-out ${isRightPanelActive ? "translate-x-[20%]" : "translate-x-0"
                                }`}
                        >
                            <h1 className="text-3xl font-bold text-white mb-4">Hello, Friend!</h1>
                            <p className="text-white mb-8 text-sm leading-6">Enter your personal details and start journey with us</p>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-white text-white rounded-full px-12 py-3 uppercase tracking-wider font-bold hover:bg-white hover:text-[#FF416C]"
                                onClick={() => setIsRightPanelActive(true)}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <Link to="/" className="text-gray-500 hover:text-gray-800 transition-colors">
                    &larr; Back to Home
                </Link>
            </div>
        </div>
    );
}
