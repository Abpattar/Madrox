import { BackgroundBlobs } from "@/app/components/BackgroundBlobs";
import { useState } from "react";
import { Navigation } from "@/app/components/Navigation";
import { FloatingSearchBar } from "@/app/components/FloatingSearchBar";
import { Upload, AlertTriangle, FileText, Download } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { motion } from "motion/react";
import { PageTransition } from "@/app/components/PageTransition";
import { Footer } from "@/app/components/Footer";

interface BillItem {
  id: string;
  description: string;
  charged: number;
  average: number;
  overcharged: boolean;
}

const mockBillItems: BillItem[] = [
  {
    id: "1",
    description: "Emergency Room Visit",
    charged: 180000,
    average: 125000,
    overcharged: true,
  },
  {
    id: "2",
    description: "Blood Test - Complete Panel",
    charged: 4500,
    average: 2800,
    overcharged: true,
  },
  {
    id: "3",
    description: "X-Ray - Chest",
    charged: 2500,
    average: 1800,
    overcharged: false,
  },
  {
    id: "4",
    description: "Doctor Consultation",
    charged: 5000,
    average: 2500,
    overcharged: true,
  },
  {
    id: "5",
    description: "IV Fluids",
    charged: 3000,
    average: 2500,
    overcharged: false,
  },
];

export function BillAudit() {
  const [billUploaded, setBillUploaded] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate file upload
      setTimeout(() => {
        setBillUploaded(true);
      }, 500);
    }
  };

  const totalCharged = mockBillItems.reduce((sum, item) => sum + item.charged, 0);
  const totalAverage = mockBillItems.reduce((sum, item) => sum + item.average, 0);
  const overchargedAmount = totalCharged - totalAverage;

  const formatRupees = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <PageTransition className="min-h-screen bg-background pb-32 relative overflow-hidden">
      <BackgroundBlobs />
      <Navigation />

      <main className="pt-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-semibold text-foreground mb-2">
              Bill Audit
            </h1>
            <p className="text-muted-foreground">
              Upload your medical bill for AI-powered analysis
            </p>
          </div>

          {!billUploaded ? (
            /* Upload Zone */
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <label htmlFor="bill-upload" className="cursor-pointer block group">
                <div className="border-2 border-dashed border-border rounded-[24px] p-12 text-center hover:border-primary hover:bg-primary/5 transition-all bg-white/50 backdrop-blur-sm shadow-sm group-hover:shadow-md">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Upload Your Bill
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Click to browse or drag and drop your medical bill
                  </p>
                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                    Supports PDF, JPG, PNG (Max 10MB)
                  </span>
                </div>
                <input
                  id="bill-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                />
              </label>
            </motion.div>
          ) : (
            /* Bill Analysis */
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Left: Scanned Bill */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="p-6 rounded-[24px] shadow-lg border-white/40 bg-white/80 backdrop-blur-md h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold">Scanned Bill</h2>
                  </div>
                  <div className="aspect-[3/4] bg-muted/30 rounded-2xl flex items-center justify-center border-2 border-dashed border-border/50">
                    <div className="text-center space-y-3">
                      <FileText className="w-16 h-16 mx-auto text-muted-foreground/30" />
                      <p className="text-sm text-muted-foreground">Preview Unavailable</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Right: Line Items */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="p-6 rounded-[24px] shadow-lg border-white/40 bg-white/80 backdrop-blur-md">
                  <h2 className="text-lg font-semibold mb-6">Line-Item Breakdown</h2>

                  <div className="space-y-4">
                    {mockBillItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                        className={`p-4 rounded-xl border transition-colors ${item.overcharged
                          ? "border-destructive/20 bg-destructive/5 hover:bg-destructive/10"
                          : "border-border bg-white/50 hover:bg-white/80"
                          }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {item.overcharged && (
                                <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0" />
                              )}
                              <p className="font-medium text-sm">{item.description}</p>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Avg: {formatRupees(item.average)}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`font-semibold ${item.overcharged ? "text-destructive" : "text-foreground"
                              }`}>
                              {formatRupees(item.charged)}
                            </div>
                            {item.overcharged && (
                              <div className="text-xs text-destructive font-medium">
                                +{formatRupees(item.charged - item.average)}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="mt-8 pt-6 border-t border-dashed border-border space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Average Market Rate:</span>
                      <span className="font-medium">{formatRupees(totalAverage)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Your Bill Total:</span>
                      <span className="font-semibold text-foreground">{formatRupees(totalCharged)}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-destructive/10 rounded-xl mt-4">
                      <span className="font-semibold text-destructive">Overcharged Amount:</span>
                      <span className="text-xl font-bold text-destructive">
                        {formatRupees(overchargedAmount)}
                      </span>
                    </div>
                  </div>
                </Card>

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Button className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                    <Download className="w-5 h-5 mr-2" />
                    Generate Dispute Letter
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </main>

      <FloatingSearchBar />
      <Footer />
    </PageTransition>
  );
}