import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Handshake, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  FileText, 
  Calendar,
  Megaphone,
  Building2
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Handshake,
      title: "Business Networking",
      description: "Connect with fellow entrepreneurs and business leaders through our exclusive networking events and forums."
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Access professional development programs, workshops, and skills training to enhance your business capabilities."
    },
    {
      icon: TrendingUp,
      title: "Business Consulting",
      description: "Get expert advice and guidance to scale your business and navigate market challenges effectively."
    },
    {
      icon: FileText,
      title: "Contract Opportunities",
      description: "Access to tender information, procurement opportunities, and business partnerships with established companies."
    },
    {
      icon: Megaphone,
      title: "Business Advocacy",
      description: "Representation and advocacy for black business interests at local, provincial, and national levels."
    },
    {
      icon: Calendar,
      title: "Events & Forums",
      description: "Regular business forums, seminars, and conferences to share knowledge and best practices."
    },
    {
      icon: Building2,
      title: "Market Access",
      description: "Facilitation of market entry and expansion opportunities for member businesses."
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "Connect with experienced business mentors who can guide your entrepreneurial journey."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support services designed to accelerate your business growth 
              and ensure sustainable success in today's competitive market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-card transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-primary rounded-full group-hover:shadow-glow transition-all duration-300">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Grow Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join TBBC today and gain access to all our services, networking opportunities, 
              and business development programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('membership');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg hover:shadow-glow transition-all duration-300 font-medium"
              >
                Explore Membership
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;