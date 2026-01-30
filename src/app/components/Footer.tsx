import { motion } from "motion/react";
import { Link } from "react-router";
import { Activity, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    }
};

export function Footer() {
    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={footerVariants}
            className="relative z-10 mt-20"
        >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="bg-white/40 backdrop-blur-xl border-t border-white/40 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                        {/* Brand Section */}
                        <div className="space-y-4">
                            <Link to="/" className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-primary/90 text-white rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                    Medrox
                                </span>
                            </Link>
                            <p className="text-muted-foreground leading-relaxed">
                                Empowering patients with AI-driven transparency. Audit bills, find fair prices, and join a community fighting for healthcare justice.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-semibold text-foreground mb-6 text-lg">Platform</h3>
                            <ul className="space-y-3">
                                <li><Link to="/bill-audit" className="text-muted-foreground hover:text-primary transition-colors">Audit Bill</Link></li>
                                <li><Link to="/doctor-search" className="text-muted-foreground hover:text-primary transition-colors">Find Doctors</Link></li>
                                <li><Link to="/price-db" className="text-muted-foreground hover:text-primary transition-colors">Price Database</Link></li>
                                <li><Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">Community Hub</Link></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-semibold text-foreground mb-6 text-lg">Company</h3>
                            <ul className="space-y-3">
                                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                                <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                                <li><Link to="/press" className="text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
                                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="font-semibold text-foreground mb-6 text-lg">Contact</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span>123 Innovation Drive,<br />Tech City, Bangalore 560001</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <Phone className="w-5 h-5 text-primary shrink-0" />
                                    <span>+91 98765 43210</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <Mail className="w-5 h-5 text-primary shrink-0" />
                                    <span>support@medrox.ai</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                            © 2024 Medrox AI. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        <div className="flex gap-6 text-sm">
                            <Link to="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                            <Link to="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
