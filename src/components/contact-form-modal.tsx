"use client";

import * as React from "react";
import { ArrowRight, CheckCircle, Send, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactFormModal({ open, onOpenChange }: ContactFormModalProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit enquiry');
      }

      setIsSubmitted(true);

      // Start closing animation after showing success
      setTimeout(() => {
        setIsClosing(true);
      }, 1800);

      // Close modal after animation completes
      setTimeout(() => {
        onOpenChange(false);
        // Reset state after modal is closed
        setTimeout(() => {
          setIsSubmitted(false);
          setIsClosing(false);
          setFormData({ name: "", email: "", phone: "", projectDetails: "" });
        }, 300);
      }, 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Reset state when modal is closed externally
  React.useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setIsSubmitted(false);
        setIsClosing(false);
        setError(null);
      }, 300);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-obsidian border border-carbon p-0 max-w-md w-[calc(100%-2rem)] sm:w-full mx-auto rounded-none sm:rounded-sm overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-signal to-orange-400" />

          {/* Success State with Exit Animation */}
          {isSubmitted ? (
            <div
              className={`p-6 sm:p-8 pt-8 sm:pt-10 flex flex-col items-center justify-center min-h-[400px] transition-all duration-700 ${
                isClosing ? "opacity-0 scale-95 translate-y-4" : "opacity-100 scale-100 translate-y-0"
              }`}
            >
              {/* Animated checkmark container */}
              <div className="relative mb-6">
                {/* Pulse rings */}
                <div className="absolute inset-0 animate-ping rounded-full bg-signal/20" style={{ animationDuration: "1.5s" }} />
                <div className="absolute inset-0 animate-ping rounded-full bg-signal/10" style={{ animationDuration: "2s", animationDelay: "0.5s" }} />

                {/* Icon container */}
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-signal to-orange-400 flex items-center justify-center animate-[bounceIn_0.6s_ease-out]">
                  <CheckCircle className="w-10 h-10 text-obsidian" strokeWidth={2.5} />
                </div>
              </div>

              {/* Success text */}
              <div className="text-center space-y-3 animate-[fadeInUp_0.5s_ease-out_0.3s_both]">
                <h3 className="typo-headline text-2xl sm:text-3xl text-platinum">
                  Enquiry Sent!
                </h3>
                <p className="typo-body text-tungsten text-sm sm:text-base max-w-xs">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>

              {/* Animated send icon flying away */}
              <div className={`mt-8 transition-all duration-700 ${
                isClosing ? "opacity-0 -translate-y-8 scale-50" : "opacity-100 translate-y-0 scale-100"
              }`}>
                <Send className="w-6 h-6 text-signal animate-[float_2s_ease-in-out_infinite]" />
              </div>
            </div>
          ) : (
            /* Form State */
            <div className="p-6 sm:p-8 pt-8 sm:pt-10">
              <DialogHeader className="space-y-3 mb-6">
                <DialogTitle className="typo-headline text-2xl sm:text-3xl text-platinum">
                  Let's Build Together
                </DialogTitle>
                <DialogDescription className="typo-body text-tungsten text-sm sm:text-base">
                  Tell us about your project and we'll get back to you within 24 hours.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="typo-tech text-xs text-tungsten">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-carbon border-tungsten/20 text-platinum placeholder:text-tungsten/50 focus:border-signal focus:ring-signal/20 rounded-none h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="typo-tech text-xs text-tungsten">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-carbon border-tungsten/20 text-platinum placeholder:text-tungsten/50 focus:border-signal focus:ring-signal/20 rounded-none h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="typo-tech text-xs text-tungsten">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-carbon border-tungsten/20 text-platinum placeholder:text-tungsten/50 focus:border-signal focus:ring-signal/20 rounded-none h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectDetails" className="typo-tech text-xs text-tungsten">
                    Project Details
                  </label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    placeholder="Tell us about your project..."
                    value={formData.projectDetails}
                    onChange={handleChange}
                    rows={4}
                    className="bg-carbon border-tungsten/20 text-platinum placeholder:text-tungsten/50 focus:border-signal focus:ring-signal/20 rounded-none resize-none"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 text-sm rounded-sm mt-4">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-signal text-obsidian px-8 py-4 typo-headline text-sm hover:bg-white hover:text-obsidian transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,79,0,0.4)] mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-signal"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="typo-body text-tungsten/60 text-xs text-center mt-4">
                By submitting, you agree to our{" "}
                <a href="/privacy-policy" className="text-signal hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
