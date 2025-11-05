import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, StarOff } from "lucide-react";

export default function Testimonial() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    role: "",
    company: "",
    rating: 0,
    title: "",
    testimonial: ""
  });

  const [hoverRating, setHoverRating] = React.useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('https://discordtrolls.app.n8n.cloud/webhook-test/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'testimonial' }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit testimonial');
      }

      // reset form locally
      setFormData({ fullName: '', email: '', role: '', company: '', rating: 0, title: '', testimonial: '' });
      // minimal user feedback
      alert('Thank you — your testimonial was submitted.');
    } catch (err) {
      // minimal error feedback
      // keep original form data so user can retry
      // eslint-disable-next-line no-console
      console.error(err);
      alert('There was an error submitting your testimonial. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card className="border shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Submit Your Testimonial</CardTitle>
            <CardDescription>
              Share your experience with us. Required fields are marked with an asterisk (*).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {/* Full Name - Required */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>

                {/* Email - Required */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>

                {/* Role - Required */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-2">
                    Role/Position *
                  </label>
                  <Input
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    placeholder="Senior Developer"
                    required
                    className="w-full"
                  />
                </div>

                {/* Company - Required */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Acme Inc"
                    required
                    className="w-full"
                  />
                </div>

                {/* Rating - Required */}
                <div>
                  <label className="block text-sm font-medium mb-2">Rating *</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        {(hoverRating || formData.rating) >= star ? (
                          <Star className="w-8 h-8 text-yellow-400" />
                        ) : (
                          <StarOff className="w-8 h-8 text-muted-foreground" />
                        )}
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {formData.rating ? `${formData.rating} out of 5` : "Select a rating"}
                    </span>
                  </div>
                </div>

                {/* Title/Headline - Required */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-2">
                    Title/Headline *
                  </label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Summarize your experience"
                    required
                    className="w-full"
                  />
                </div>

                {/* Testimonial - Required */}
                <div>
                  <label htmlFor="testimonial" className="block text-sm font-medium mb-2">
                    Your Testimonial *
                  </label>
                  <Textarea
                    id="testimonial"
                    name="testimonial"
                    value={formData.testimonial}
                    onChange={handleInputChange}
                    placeholder="Share your detailed experience with our services..."
                    required
                    className="min-h-[150px] w-full"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Submit Testimonial
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}