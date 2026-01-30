import { useState } from "react";
import { Navigation } from "@/app/components/Navigation";
import { FloatingSearchBar } from "@/app/components/FloatingSearchBar";
import { Upload, AlertTriangle, FileText, Download } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { motion } from "motion/react";

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
    charged: 2500,
    average: 1800,
    overcharged: true,
  },
  {
    id: "2",
    description: "Blood Test - Complete Panel",
    charged: 450,
    average: 350,
    overcharged: true,
  },
  {
    id: "3",
    description: "X-Ray - Chest",
    charged: 200,
    average: 180,
    overcharged: false,
  },
  {
    id: "4",
    description: "Doctor Consultation",
    charged: 300,
    average: 250,
    overcharged: true,
  },
  {
    id: "5",
    description: "IV Fluids",
    charged: 150,
    average: 120,
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

  return (
    <div className="min-h-screen bg-background pb-32">
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="bill-upload" className="cursor-pointer block">
                <div className="border-2 border-dashed border-border rounded-[12px] p-12 text-center hover:border-primary hover:bg-primary/5 transition-all">
                  <Upload className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Upload Your Bill
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Click to browse or drag and drop your medical bill
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Supports PDF, JPG, PNG (Max 10MB)
                  </p>
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
              transition={{ duration: 0.3 }}
            >
              {/* Left: Scanned Bill */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card className="p-6 rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold">Scanned Bill</h2>
                  </div>
                  <div className="aspect-[8.5/11] bg-muted rounded-lg flex items-center justify-center border border-border">
                    <div className="text-center space-y-2">
                      <FileText className="w-12 h-12 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Bill Preview</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Right: Line Items */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card className="p-6 rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <h2 className="text-lg font-semibold mb-4">Line-Item Breakdown</h2>
                  
                  <div className="space-y-3">
                    {mockBillItems.map((item) => (
                      <div
                        key={item.id}
                        className={`p-4 rounded-lg border ${
                          item.overcharged
                            ? "border-destructive/30 bg-destructive/5"
                            : "border-border bg-card"
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
                              Average: ${item.average.toFixed(2)}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`font-semibold ${
                              item.overcharged ? "text-destructive" : "text-foreground"
                            }`}>
                              ${item.charged.toFixed(2)}
                            </div>
                            {item.overcharged && (
                              <div className="text-xs text-destructive">
                                +${(item.charged - item.average).toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="mt-6 pt-6 border-t border-border space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Average Market Rate:</span>
                      <span className="font-medium">${totalAverage.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Your Bill Total:</span>
                      <span className="font-semibold">${totalCharged.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-destructive">Overcharged:</span>
                      <span className="font-semibold text-destructive">
                        ${overchargedAmount.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Card>

                {/* Action Button */}
                <Button className="w-full h-12">
                  <Download className="w-4 h-4 mr-2" />
                  Generate Dispute Letter
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </main>

      <FloatingSearchBar />
    </div>
  );
}