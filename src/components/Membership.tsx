import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Building } from "lucide-react";

const Membership = () => {
  const membershipTiers = [
    {
      icon: Building,
      name: "Startup Member",
      price: "R500",
      period: "/month",
      description: "Perfect for new businesses and emerging entrepreneurs",
      features: [
        "Access to networking events",
        "Monthly business forums",
        "Basic business directory listing",
        "Email newsletters and updates",
        "Online resource library access"
      ],
      popular: false,
      color: "border-muted"
    },
    {
      icon: Star,
      name: "Professional Member",
      price: "R1,200",
      period: "/month",
      description: "Ideal for established businesses looking to expand",
      features: [
        "All Startup Member benefits",
        "Priority event booking",
        "Advanced directory listing",
        "Quarterly one-on-one consultations",
        "Workshop and training discounts",
        "Mentorship program access",
        "Contract opportunity notifications"
      ],
      popular: true,
      color: "border-primary shadow-glow"
    },
    {
      icon: Crown,
      name: "Corporate Member",
      price: "R2,500",
      period: "/month",
      description: "Premium package for large businesses and corporations",
      features: [
        "All Professional Member benefits",
        "Exclusive corporate networking events",
        "Premium directory placement",
        "Monthly dedicated consultation",
        "Speaker opportunities at events",
        "Custom business development programs",
        "Direct advocacy representation",
        "Partnership facilitation services"
      ],
      popular: false,
      color: "border-accent"
    }
  ];

  const benefits = [
    "Access to exclusive business networking events",
    "Professional development and training programs",
    "Business advocacy and representation",
    "Contract and tender opportunity alerts",
    "Mentorship and business consulting services",
    "Market access and partnership facilitation"
  ];

  return (
    <section id="membership" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Membership <span className="text-primary">Plans</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the membership plan that best fits your business needs and unlock 
              the full potential of the TBBC network.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {membershipTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${tier.color} ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full ${tier.popular ? 'bg-gradient-primary' : 'bg-muted'}`}>
                      <tier.icon className={`h-8 w-8 ${tier.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-foreground mb-2">
                    {tier.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {tier.price}
                    <span className="text-lg text-muted-foreground font-normal">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {tier.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      tier.popular 
                        ? 'bg-gradient-primary hover:shadow-glow' 
                        : 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                    variant={tier.popular ? "default" : "outline"}
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Choose {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-card">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Why Join TBBC?
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Transform Your Business?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Join hundreds of successful businesses that have accelerated their 
                  growth through TBBC membership.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;