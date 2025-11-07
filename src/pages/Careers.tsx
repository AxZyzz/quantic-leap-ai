import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    linkedin: "",
    github: "",
    whyJoin: "",
    employmentStatus: "",
    // Conditional fields
    university: "",
    course: "",
    company: "",
    position: "",
    freelanceWork: "",
    // Additional fields
    automationExperience: "",
    realWorldProblems: "",
    howDidYouHear: "",
    socialMediaPlatform: "",
    otherSource: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-muted-foreground">
                Help us build the future of AI automation and transform businesses worldwide
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          placeholder="Enter your country"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          placeholder="Enter your city"
                        />
                      </div>
                    </div>

                    {/* Employment status moved here (below Country/City) */}
                    <div className="space-y-2">
                      <Label htmlFor="employmentStatus">Current Employment Status *</Label>
                      <Select
                        name="employmentStatus"
                        value={formData.employmentStatus}
                        onValueChange={(value) => handleSelectChange(value, "employmentStatus")}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your current status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unemployed">Unemployed</SelectItem>
                          <SelectItem value="employed">Employed</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="freelancer">Freelancer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.employmentStatus === "student" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="university">University/College *</Label>
                          <Input
                            id="university"
                            name="university"
                            value={formData.university}
                            onChange={handleChange}
                            required
                            placeholder="Enter your university or college name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="course">Course/Degree *</Label>
                          <Input
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                            placeholder="Enter your course or degree name"
                          />
                        </div>
                      </>
                    )}

                    {formData.employmentStatus === "employed" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="company">Current Company *</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            placeholder="Enter your current company name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position">Current Position *</Label>
                          <Input
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            required
                            placeholder="Enter your current position"
                          />
                        </div>
                      </>
                    )}

                    {formData.employmentStatus === "freelancer" && (
                      <div className="space-y-2">
                        <Label htmlFor="freelanceWork">What type of freelancing work do you do? *</Label>
                        <Textarea
                          id="freelanceWork"
                          name="freelanceWork"
                          value={formData.freelanceWork || ""}
                          onChange={handleChange}
                          required
                          placeholder="Describe your freelance work, specialties, and areas of expertise..."
                          className="min-h-[100px]"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile *</Label>
                      <Input
                        id="linkedin"
                        name="linkedin"
                        type="url"
                        value={formData.linkedin}
                        onChange={handleChange}
                        required
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub Profile (Optional)</Label>
                      <Input
                        id="github"
                        name="github"
                        type="url"
                        value={formData.github}
                        onChange={handleChange}
                        placeholder="https://github.com/yourusername"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="realWorldProblems">Have you worked on real-world problems? *</Label>
                      <div className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="realWorldYes"
                            name="realWorldProblems"
                            value="yes"
                            checked={formData.realWorldProblems === "yes"}
                            onChange={handleChange}
                            required
                            className="h-4 w-4"
                          />
                          <Label htmlFor="realWorldYes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="realWorldNo"
                            name="realWorldProblems"
                            value="no"
                            checked={formData.realWorldProblems === "no"}
                            onChange={handleChange}
                            className="h-4 w-4"
                          />
                          <Label htmlFor="realWorldNo">No</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="automationExperience">What is your experience in automation? *</Label>
                      <Textarea
                        id="automationExperience"
                        name="automationExperience"
                        value={formData.automationExperience}
                        onChange={handleChange}
                        required
                        placeholder="Describe your experience with automation, including tools, technologies, and projects..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whyJoin">Why do you want to join our team? *</Label>
                      <Textarea
                        id="whyJoin"
                        name="whyJoin"
                        value={formData.whyJoin}
                        onChange={handleChange}
                        required
                        placeholder="Tell us why you'd like to join A2B and what you can bring to the team..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="howDidYouHear">How did you hear about this job opening? *</Label>
                      <Select
                        name="howDidYouHear"
                        value={formData.howDidYouHear}
                        onValueChange={(value) => handleSelectChange(value, "howDidYouHear")}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select how you heard about us" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="social-media">Social Media</SelectItem>
                          <SelectItem value="word-of-mouth">Word of Mouth</SelectItem>
                          <SelectItem value="friends">Through Friends</SelectItem>
                          <SelectItem value="others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.howDidYouHear === "social-media" && (
                      <div className="space-y-2">
                        <Label htmlFor="socialMediaPlatform">Which social media platform? *</Label>
                        <Select
                          name="socialMediaPlatform"
                          value={formData.socialMediaPlatform}
                          onValueChange={(value) => handleSelectChange(value, "socialMediaPlatform")}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select the platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="twitter">X (Twitter)</SelectItem>
                            <SelectItem value="instagram">Instagram</SelectItem>
                            <SelectItem value="linkedin">LinkedIn</SelectItem>
                            <SelectItem value="reddit">Reddit</SelectItem>
                            <SelectItem value="youtube">YouTube</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {formData.howDidYouHear === "others" && (
                      <div className="space-y-2">
                        <Label htmlFor="otherSource">Please specify *</Label>
                        <Input
                          id="otherSource"
                          name="otherSource"
                          value={formData.otherSource}
                          onChange={handleChange}
                          required
                          placeholder="Tell us how you heard about this position"
                        />
                      </div>
                    )}

                    <Button type="submit" size="lg" variant="default" className="w-full">
                      Submit Application
                    </Button>

                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
