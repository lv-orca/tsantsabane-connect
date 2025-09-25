import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import aboutImage from "@/assets/about-partnership.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">TBBC</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Tsantsabane Black Business Chambers is a dynamic business forum organization 
              dedicated to fostering economic growth and empowerment in Postmasburg, Northern Cape.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={aboutImage} 
                alt="Business partnership and collaboration"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Building Bridges for Business Success
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our establishment, TBBC has been at the forefront of creating opportunities 
                for black-owned businesses in the Northern Cape. We serve as a catalyst for 
                economic transformation and sustainable business development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our chamber provides a platform where entrepreneurs, business owners, and 
                professionals can connect, collaborate, and grow together. We believe in the 
                power of collective action to drive meaningful economic change.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Our Mission</h4>
                <p className="text-muted-foreground">
                  To empower black businesses through networking, advocacy, and strategic partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Eye className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Our Vision</h4>
                <p className="text-muted-foreground">
                  A thriving, sustainable black business ecosystem in the Northern Cape.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Excellence</h4>
                <p className="text-muted-foreground">
                  Committed to the highest standards of business practice and integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Community</h4>
                <p className="text-muted-foreground">
                  Building strong networks that support business growth and development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;