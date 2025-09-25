import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to join TBBC or have questions about our services? 
              We're here to help you take the next step in your business journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">Our Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    123 Business District<br />
                    Postmasburg, Northern Cape<br />
                    8420, South Africa
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">Call Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    +27 (0)53 123 4567<br />
                    +27 (0)82 123 4567
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">Email Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    info@tbbc.co.za<br />
                    membership@tbbc.co.za
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">Office Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-foreground">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          First Name *
                        </label>
                        <Input 
                          required
                          placeholder="Your first name"
                          className="transition-all duration-300 focus:shadow-card"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Last Name *
                        </label>
                        <Input 
                          required
                          placeholder="Your last name"
                          className="transition-all duration-300 focus:shadow-card"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        className="transition-all duration-300 focus:shadow-card"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </label>
                      <Input 
                        type="tel"
                        placeholder="+27 (0)82 123 4567"
                        className="transition-all duration-300 focus:shadow-card"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Business/Organization
                      </label>
                      <Input 
                        placeholder="Your business or organization name"
                        className="transition-all duration-300 focus:shadow-card"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea 
                        required
                        placeholder="Tell us about your business goals and how TBBC can help you..."
                        rows={5}
                        className="transition-all duration-300 focus:shadow-card"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Social Media & Additional Info */}
          <div className="bg-gradient-secondary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Connect With Us on Social Media
            </h3>
            <p className="text-muted-foreground mb-6">
              Stay updated with the latest news, events, and business opportunities.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#" 
                className="p-3 bg-primary rounded-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-primary rounded-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <Twitter className="h-5 w-5 text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-primary rounded-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5 text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-primary rounded-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;