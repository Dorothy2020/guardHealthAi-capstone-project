import { Activity, Bell, Shield, Users, Smartphone, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Activity,
    title: "Blood Pressure Monitoring",
    description: "Track your blood pressure continuously via smart devices or manual input with instant analysis.",
  },
  {
    icon: Brain,
    title: "AI Risk Prediction",
    description: "Advanced machine learning models analyze your data to predict stroke risk with high accuracy.",
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Receive immediate notifications when risk levels change, keeping you and caregivers informed.",
  },
  {
    icon: Shield,
    title: "Personalized Recommendations",
    description: "Get tailored lifestyle and medication advice based on your unique health profile.",
  },
  {
    icon: Users,
    title: "Remote Care Support",
    description: "Connect with healthcare providers and community health workers for timely interventions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Accessibility",
    description: "Access your health data anywhere with our mobile-responsive platform designed for Africa.",
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
            Comprehensive Stroke Prevention
          </h2>
          <p className="text-lg text-muted-foreground">
            HealthGuardAI combines cutting-edge AI technology with accessible healthcare 
            to protect communities across Africa from stroke.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              variant="interactive"
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
