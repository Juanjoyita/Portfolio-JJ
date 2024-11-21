'use client'

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare } from "lucide-react"; 
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar si todos los campos están completos
    if (!name || !email || !subject || !message) {
      setWarning('Por favor, complete todos los campos antes de enviar el mensaje.');
      return;
    }

    setWarning(''); // Limpiar mensaje de advertencia si todos los campos están completos

    const emailData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await emailjs.send(
        'service_zsst2os', // ID del servicio de EmailJS
        'template_bmodx92', // ID de la plantilla
        emailData, // Datos del formulario
        'v7optSJ8mZ1L5SFHu' // ID de tu usuario
      );
      
      console.log('Correo enviado:', response.status, response.text);
      setIsSent(true);
      setError('');
      
      // Limpiar los campos del formulario
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      console.error('Error al enviar el correo:', err);
      setError('Hubo un error al enviar el mensaje. Intenta nuevamente.');
    }
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  className="bg-white/70 dark:bg-black/70 border-purple-200 dark:border-purple-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="bg-white/70 dark:bg-black/70 border-purple-200 dark:border-purple-800"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message..."
                  className="bg-white/70 dark:bg-black/70 border-purple-200 dark:border-purple-800 min-h-[120px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-800 dark:hover:bg-purple-900">
                Send Message
              </Button>

              {/* Mostrar mensaje de advertencia, éxito o error */}
              {warning && <p className="text-red-500 mt-4">{warning}</p>}
              {isSent && <p className="text-green-500 mt-4">¡Mensaje enviado con éxito!</p>}
              {error && <p className="text-red-500 mt-4">{error}</p>}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
