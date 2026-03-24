
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast.js';
import pb from '@/lib/pocketbaseClient.js';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    project_description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await pb.collection('contact_inquiries').create(formData, { $autoCancel: false });
      
      toast({
        title: "Žinutė sėkmingai išsiųsta",
        description: "Susisieksime su jumis per 24 valandas.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service_type: '',
        project_description: ''
      });
    } catch (error) {
      toast({
        title: "Nepavyko išsiųsti žinutės",
        description: error.message || "Bandykite dar kartą vėliau.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Vardas *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
          placeholder="Jūsų vardas"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          El. paštas *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
          placeholder="jusu.pastas@pavyzdys.lt"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Telefonas
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
          placeholder="+370 611 56182"
        />
      </div>

      <div>
        <label htmlFor="service_type" className="block text-sm font-medium text-foreground mb-2">
          Paslaugos tipas
        </label>
        <select
          id="service_type"
          name="service_type"
          value={formData.service_type}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
        >
          <option value="">Pasirinkite paslaugą</option>
          <option value="gypsum">Gipso montavimas</option>
          <option value="tiles">Plytelių klojimas</option>
          <option value="plastering">Spakliavimas</option>
          <option value="painting">Dažymas</option>
          <option value="roofs">Stogai ir fasadai</option>
          <option value="terraces">Terasos ir karkasas</option>
          <option value="renovation">Renovacija ir kompleksiniai darbai</option>
        </select>
      </div>

      <div>
        <label htmlFor="project_description" className="block text-sm font-medium text-foreground mb-2">
          Žinutė
        </label>
        <textarea
          id="project_description"
          name="project_description"
          value={formData.project_description}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Papasakokite apie savo projektą..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>Siunčiama...</>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Siųsti žinutę
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
