'use client'

import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el envío del formulario
  };

  return (
    <div className="min-h-screen font-[var(--font-jetbrainsMono)]">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
          <div className="text-gray-600 dark:text-gray-400">Home / Contact</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario */}
          <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-purple-200 dark:border-purple-900 rounded-lg p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name..."
                  className="bg-white/70 dark:bg-black/70 border-purple-200 dark:border-purple-800"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  className="bg-white/70 dark:bg-black/70 border-purple-200 dark:border-purple-800"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="bg-white/70 dark:bg-black/70 border-purple-200 dark:border-purple-800"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message..."
                  className="bg-white/70 dark:bg-black/70 border-purple-200 dark:border-purple-800 min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-800 dark:hover:bg-purple-900">
                Send Message
              </Button>
            </form>
          </div>

          {/* Información de contacto */}

            <div className="grid gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-purple-200 dark:border-purple-900 rounded-lg">
                  <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone Number</h3>
                  <p className="text-gray-600 dark:text-gray-400">+57 3112127113</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-purple-200 dark:border-purple-900 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">juanjosecalvache944@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-purple-200 dark:border-purple-900 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-400">3112127113</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-purple-200 dark:border-purple-900 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-gray-600 dark:text-gray-400">2443 Oak Ridge Omaha, NE 45065</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactPage;