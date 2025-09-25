import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional business meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Black
            <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text">
              Business Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Tsantsabane Black Business Chambers is your gateway to business growth, 
            networking, and economic empowerment in the Northern Cape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('membership')}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
            >
              Become a Member
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">200+</div>
              <div className="text-white/80">Active Members</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Building className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">150+</div>
              <div className="text-white/80">Partner Businesses</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">85%</div>
              <div className="text-white/80">Growth Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;