import { Activity, Shield, Bell, Users, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-health.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-primary-foreground space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm border border-primary-foreground/20">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Stroke Prevention</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight">
              Protect Your Heart,<br />
              <span className="text-accent">Prevent Stroke</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              HealthGuardAI uses advanced artificial intelligence to monitor your blood pressure, 
              predict stroke risk, and deliver life-saving recommendations in real-time.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="heroOutline" size="xl">
                <Activity className="w-5 h-5" />
                Start Monitoring
              </Button>
              <Button variant="heroOutline" size="xl">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div>
                <div className="text-3xl font-heading">40+</div>
                <div className="text-sm text-primary-foreground/70">Million at risk in Africa</div>
              </div>
              <div>
                <div className="text-3xl font-heading">85%</div>
                <div className="text-sm text-primary-foreground/70">Prevention possible</div>
              </div>
              <div>
                <div className="text-3xl font-heading">24/7</div>
                <div className="text-sm text-primary-foreground/70">Real-time monitoring</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI-powered heart health monitoring visualization" 
                className="w-full rounded-2xl shadow-2xl animate-float"
              />
              
              {/* Floating cards */}
              <div className="absolute -left-4 top-1/4 bg-card/95 backdrop-blur-lg rounded-xl p-4 shadow-lg animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Blood Pressure</div>
                    <div className="font-semibold text-foreground">120/80 mmHg</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 bg-card/95 backdrop-blur-lg rounded-xl p-4 shadow-lg animate-slide-up" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Risk Level</div>
                    <div className="font-semibold text-success">Low Risk</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
