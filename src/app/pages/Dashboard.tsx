import { BackgroundBlobs } from "@/app/components/BackgroundBlobs";
import { Navigation } from "@/app/components/Navigation";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Search, TrendingUp, DollarSign, Activity } from "lucide-react";
import { motion } from "motion/react";
import { PageTransition } from "@/app/components/PageTransition";
import { Footer } from "@/app/components/Footer";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
} from "recharts";

const priceTrendData = [
    { month: "Jan", avg: 12000, low: 8000, high: 16000 },
    { month: "Feb", avg: 12500, low: 8500, high: 17000 },
    { month: "Mar", avg: 11800, low: 7900, high: 15500 },
    { month: "Apr", avg: 13000, low: 9000, high: 18000 },
    { month: "May", avg: 12200, low: 8100, high: 16200 },
    { month: "Jun", avg: 11500, low: 7800, high: 15000 },
];

const procedureData = [
    { name: "MRI Scan", hospital: 25000, clinic: 8000, savings: 17000 },
    { name: "CT Scan", hospital: 18000, clinic: 4500, savings: 13500 },
    { name: "X-Ray", hospital: 4000, clinic: 800, savings: 3200 },
    { name: "Blood Panel", hospital: 6000, clinic: 1200, savings: 4800 },
    { name: "Ultrasound", hospital: 9000, clinic: 2500, savings: 6500 },
];

const formatRupees = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
};

export function Dashboard() {
    return (
        <PageTransition className="min-h-screen bg-background pb-32 relative overflow-hidden">
            <BackgroundBlobs />
            <Navigation />

            <main className="pt-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto space-y-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-4"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Medical Price <span className="text-primary">Dashboard</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Compare prices across hospitals and clinics to ensure you're paying a fair rate.
                        </p>

                        <div className="max-w-xl mx-auto mt-8 relative group">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <Input
                                type="text"
                                placeholder="Search procedures (e.g., MRI, X-Ray)..."
                                className="pl-10 h-14 bg-white/60 backdrop-blur-md border-white/40 shadow-sm rounded-full text-lg focus:shadow-lg focus:border-primary/50 transition-all"
                            />
                            <Button className="absolute right-1 top-1 h-12 rounded-full px-8 shadow-md">
                                Search
                            </Button>
                        </div>
                    </motion.div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: "Average Savings", value: "₹45,000", icon: TrendingUp, color: "text-emerald-500" },
                            { label: "Price Variations", value: "3.5x", icon: DollarSign, color: "text-primary" },
                            { label: "Procedures Tracked", value: "1,200+", icon: Activity, color: "text-blue-500" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.4 }}
                                whileHover={{ y: -5 }}
                                className="bg-white/60 backdrop-blur-md border border-white/40 rounded-[20px] p-6 shadow-sm flex items-center gap-4 group cursor-default"
                            >
                                <div className={`w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm ${stat.color} group-hover:scale-110 transition-transform`}>
                                    <stat.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Price Trend Chart */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/60 backdrop-blur-md border border-white/40 rounded-[28px] p-8 shadow-sm"
                        >
                            <h3 className="text-xl font-semibold mb-6">Price Trends (2024)</h3>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={priceTrendData}>
                                        <defs>
                                            <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#A92655" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#A92655" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.1)" />
                                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                        <YAxis axisLine={false} tickLine={false} />
                                        <Tooltip
                                            formatter={(value: number) => formatRupees(value)}
                                            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="avg"
                                            stroke="#A92655"
                                            strokeWidth={3}
                                            fillOpacity={1}
                                            fill="url(#colorAvg)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>

                        {/* Hospital vs Clinic Savings */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/60 backdrop-blur-md border border-white/40 rounded-[28px] p-8 shadow-sm"
                        >
                            <h3 className="text-xl font-semibold mb-6">Hospital vs. Clinic Costs</h3>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={procedureData} layout="vertical">
                                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="rgba(0,0,0,0.1)" />
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} />
                                        <Tooltip
                                            formatter={(value: number) => formatRupees(value)}
                                            cursor={{ fill: 'transparent' }}
                                            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                                        />
                                        <Bar dataKey="hospital" name="Hospital Cost" fill="#A92655" radius={[0, 4, 4, 0]} barSize={20} />
                                        <Bar dataKey="clinic" name="Clinic Cost" fill="#FD8D67" radius={[0, 4, 4, 0]} barSize={20} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>
                    </div>

                    {/* Glass Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/60 backdrop-blur-md border border-white/40 rounded-[28px] overflow-hidden shadow-sm"
                    >
                        <div className="p-6 border-b border-white/20">
                            <h3 className="text-xl font-semibold">Procedure Pricing Index</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-primary/5 text-left">
                                        <th className="p-4 font-semibold text-primary">Procedure</th>
                                        <th className="p-4 font-semibold text-primary">Fair Price</th>
                                        <th className="p-4 font-semibold text-primary">Avg. Hospital</th>
                                        <th className="p-4 font-semibold text-primary">Potential Savings</th>
                                        <th className="p-4 font-semibold text-primary">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/40">
                                    {procedureData.map((item, i) => (
                                        <tr key={i} className="hover:bg-white/40 transition-colors">
                                            <td className="p-4 font-medium">{item.name}</td>
                                            <td className="p-4">{formatRupees(item.clinic)} - {formatRupees(item.clinic * 1.2)}</td>
                                            <td className="p-4 text-destructive">{formatRupees(item.hospital)}</td>
                                            <td className="p-4 text-emerald-600 font-bold">{formatRupees(item.savings)}</td>
                                            <td className="p-4">
                                                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                                                    Verified
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </PageTransition>
    );
}
