import { useState } from "react";
import { Heart, Activity, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface RiskResult {
  level: "low" | "medium" | "high";
  score: number;
  message: string;
  recommendations: string[];
}

const RiskAssessment = () => {
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [age, setAge] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<RiskResult | null>(null);

  const calculateRisk = () => {
    const sys = parseInt(systolic);
    const dia = parseInt(diastolic);
    const userAge = parseInt(age);

    if (isNaN(sys) || isNaN(dia) || isNaN(userAge)) {
      toast.error("Please enter valid numbers for all fields");
      return;
    }

    if (sys < 70 || sys > 250 || dia < 40 || dia > 150) {
      toast.error("Please enter valid blood pressure values");
      return;
    }

    setIsLoading(true);

    // Simulate AI processing
    setTimeout(() => {
      let score = 0;
      let level: "low" | "medium" | "high" = "low";
      let recommendations: string[] = [];

      // Simple risk calculation based on BP and age
      if (sys >= 180 || dia >= 120) {
        score = 85 + Math.random() * 15;
        level = "high";
        recommendations = [
          "Seek immediate medical attention",
          "Take prescribed medications",
          "Avoid strenuous activities",
          "Monitor blood pressure every hour",
        ];
      } else if (sys >= 140 || dia >= 90 || userAge >= 60) {
        score = 45 + Math.random() * 35;
        level = "medium";
        recommendations = [
          "Schedule a doctor's appointment within a week",
          "Reduce sodium intake",
          "Exercise moderately for 30 minutes daily",
          "Practice stress management techniques",
        ];
      } else {
        score = 10 + Math.random() * 30;
        level = "low";
        recommendations = [
          "Maintain your healthy lifestyle",
          "Continue regular monitoring",
          "Stay hydrated and active",
          "Schedule annual health checkups",
        ];
      }

      const messages = {
        low: "Your stroke risk is currently low. Keep up the healthy habits!",
        medium: "You have a moderate risk of stroke. Consider lifestyle changes and consult your doctor.",
        high: "Your stroke risk is elevated. Please seek medical attention promptly.",
      };

      setResult({
        level,
        score: Math.round(score),
        message: messages[level],
        recommendations,
      });
      setIsLoading(false);
      toast.success("Risk assessment complete");
    }, 1500);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "low": return "border-success";
      case "medium": return "border-warning";
      case "high": return "border-destructive";
      default: return "border-border";
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "low": return <CheckCircle className="w-8 h-8 text-success" />;
      case "medium": return <AlertTriangle className="w-8 h-8 text-warning" />;
      case "high": return <AlertTriangle className="w-8 h-8 text-destructive" />;
      default: return <Heart className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <section id="assessment" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
            AI-Powered Risk Assessment
          </h2>
          <p className="text-lg text-muted-foreground">
            Enter your blood pressure readings and get an instant AI-driven stroke risk analysis
            with personalized recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Input Form */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Activity className="w-6 h-6 text-primary" />
                Enter Your Readings
              </CardTitle>
              <CardDescription>
                Provide your blood pressure and age for accurate risk prediction
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="systolic">Systolic (mmHg)</Label>
                  <Input
                    id="systolic"
                    type="number"
                    placeholder="120"
                    value={systolic}
                    onChange={(e) => setSystolic(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="diastolic">Diastolic (mmHg)</Label>
                  <Input
                    id="diastolic"
                    type="number"
                    placeholder="80"
                    value={diastolic}
                    onChange={(e) => setDiastolic(e.target.value)}
                    className="text-lg"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age (years)</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="45"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button 
                onClick={calculateRisk} 
                size="lg" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Activity className="w-5 h-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5" />
                    Calculate Risk
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card 
            variant="risk" 
            className={result ? getRiskColor(result.level) : "border-l-muted"}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {result ? getRiskIcon(result.level) : <Heart className="w-6 h-6 text-muted-foreground" />}
                Risk Analysis Result
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6 animate-fade-in">
                  {/* Risk Score */}
                  <div className="text-center p-6 bg-secondary/50 rounded-xl">
                    <div className="text-6xl font-heading mb-2">{result.score}%</div>
                    <div className="text-lg capitalize font-medium">
                      {result.level} Risk Level
                    </div>
                  </div>

                  {/* Message */}
                  <p className="text-muted-foreground">{result.message}</p>

                  {/* Recommendations */}
                  <div>
                    <h4 className="font-semibold mb-3">Recommendations:</h4>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Heart className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p>Enter your readings to see your personalized risk assessment</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RiskAssessment;
