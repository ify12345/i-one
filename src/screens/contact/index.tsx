import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Send } from 'lucide-react';
import { showToast } from '@/components/Toast';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pitch: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Contact form submitted:', formData);
        onClose();
        showToast({ type: 'success', msg: 'Message sent successfully' })
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                  
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    >
                        <motion.div
                            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl relative"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                                        <p className="text-muted-foreground">
                                            Need help organizing your squad or setting up a match? We've got you.
                                        </p>
                                    </div>
                                    <button
                                
                                        onClick={onClose}
                                        className="p-2 rounded-full hover:bg-muted duration-500 text-primary hover:scale-90 transition-all"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="text-primary mt-1" size={20} />
                                            <div>
                                                <h3 className="font-medium text-foreground">Address</h3>
                                                <a
                                                    href="https://maps.google.com/?q=19+Ogbatai+Road,+Woji,+Port+Harcourt,+Nigeria"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground text-sm text-primary transition-colors cursor-pointer hover:text-green-300 animate-pulse"
                                                >
                                                    Eletu Street, Osapa Lekki, Lagos, Nigeria
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Mail className="text-primary mt-1" size={20} />
                                            <div>
                                                <h3 className="font-medium text-foreground">Email</h3>
                                                <a
                                                    href="mailto:info@beaverint.com"
                                                    className="text-muted-foreground text-sm text-primary transition-colors hover:text-green-300 animate-pulse"
                                                >
                                                    ifeanyi.nwakodo@i-one-sports.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Phone className="text-primary mt-1" size={20} />
                                            <div>
                                                <h3 className="font-medium text-foreground">Phone</h3>
                                                <a
                                                    href="tel:+2348038911478"
                                                    className="text-muted-foreground text-sm text-primary transition-colors hover:text-green-300 animate-pulse"
                                                >
                                                    +234 (0) 9072516736
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                name="pitch"
                                                placeholder="Pitch location"
                                                value={formData.pitch}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                        </div>


                                        <div>
                                            <textarea
                                                name="message"
                                                placeholder="Your Message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                                required
                                            />
                                        </div>

                                        <button type="submit" className="w-full bg-primary flex items-center justify-center text-white rounded-lg text-primary-foreground hover:bg-primary/90 px-4 py-2">
                                            <Send size={16} className="mr-2" />
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;