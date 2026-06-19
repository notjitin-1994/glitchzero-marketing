"use client";

import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', company: '', agreed: false });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.agreed) setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-zinc-300 font-sans selection:bg-orange-600 selection:text-white">
      <div className="max-w-4xl mx-auto py-12 px-6">
        
        {/* Header */}
        <header className="mb-12 border-b border-zinc-800 pb-8">
          <h1 className="text-5xl font-black text-white tracking-tighter uppercase mb-2">GlitchZero<span className="text-orange-600"> Labs</span></h1>
          <p className="text-sm tracking-[0.3em] text-zinc-500 uppercase">Service Agreement // Digital Storefront</p>
        </header>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Agreement Body */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <Section title="01. Project Scope & Deliverables">
                  <p className="text-sm leading-relaxed mb-4">GlitchZero Labs agrees to design, develop, and deploy a comprehensive digital storefront. Architecture includes:</p>
                  <ul className="space-y-2 text-xs text-zinc-400 font-mono list-disc pl-4">
                    <li>Landing Page (Mobile Optimized)</li>
                    <li>Products/Services/Offers Page</li>
                    <li>Contact Details Page</li>
                    <li>Direct Booking & WhatsApp Integration</li>
                    <li>SEO & GEO Foundation Setup</li>
                    <li>Google Maps Integration</li>
                    <li>Standard Data Collection</li>
                  </ul>
                </Section>
                
                <Section title="02. Financial Terms & Setup">
                  <p className="text-sm mb-2 font-bold text-white">Setup Fee: 4,000</p>
                  <p className="text-xs text-zinc-500 mb-4">2,000 Build Fee + 2,000 Hosting/SSL/Domain (1 Year).</p>
                  <p className="text-xs text-zinc-400 italic">Annual renewal of 2,000 required after year one.</p>
                </Section>
              </div>

              <div className="space-y-8">
                <Section title="03. Delivery Timeline">
                  <p className="text-sm"><strong className="text-orange-500">24-Hour Guarantee:</strong> Functional delivery within 24 hours of asset receipt and payment clearing.</p>
                </Section>

                <Section title="04. Revisions & Development Policy">
                  <p className="text-sm text-zinc-400 border-l-2 border-orange-600 pl-4 py-2">
                    <strong className="text-white block mb-1">No Rework Policy:</strong> This is a streamlined, 'done-for-you' product. We do not engage in iterative back-and-forth design cycles or structural rework.
                  </p>
                </Section>

                <Section title="05. Client Responsibilities">
                  <p className="text-sm text-zinc-400">Client warrants ownership of all provided media and assets. Accuracy of provided copy is the sole responsibility of the Client.</p>
                </Section>
              </div>
            </div>

            {/* Input Zone */}
            <div className="bg-[#161616] p-8 border border-zinc-800">
              <h3 className="text-white font-bold uppercase mb-6 tracking-widest">Client Credentials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="FULL NAME" className="bg-[#0a0a0a] border border-zinc-700 p-4 w-full focus:border-orange-600 outline-none transition-colors text-white" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setFormData({...formData, name: e.target.value})} />
                <input required placeholder="BUSINESS NAME" className="bg-[#0a0a0a] border border-zinc-700 p-4 w-full focus:border-orange-600 outline-none transition-colors text-white" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setFormData({...formData, company: e.target.value})} />
                <input required placeholder="WHATSAPP NUMBER" className="bg-[#0a0a0a] border border-zinc-700 p-4 w-full md:col-span-2 focus:border-orange-600 outline-none transition-colors text-white" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setFormData({...formData, phone: e.target.value})} />
              </div>

              <label className="flex items-center gap-4 mt-8 cursor-pointer group">
                <input type="checkbox" required className="w-5 h-5 accent-orange-600" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setFormData({...formData, agreed: e.target.checked})} />
                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">By clicking "Accept & Agree", the Client acknowledges and agrees to the finalized scope, pricing, and the strict 24-hour, zero-rework delivery policy.</span>
              </label>

              <button disabled={!formData.agreed} className="w-full mt-8 py-5 bg-orange-600 text-white font-black uppercase tracking-[0.2em] hover:bg-orange-700 disabled:bg-zinc-800 transition-all">
                Accept Agreement & Proceed
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-24 border border-dashed border-zinc-800">
            <h2 className="text-2xl font-black text-white uppercase mb-4">Payment Pending</h2>
            <p className="text-zinc-500 mb-8">Scan the code below to initiate project build.</p>
            <div className="w-40 h-40 bg-white mx-auto mb-6 flex items-center justify-center font-bold text-black text-[10px]">PAYMENT_QR</div>
            <button onClick={() => window.location.reload()} className="text-orange-600 underline uppercase text-xs tracking-widest">Reset Form</button>
          </div>
        )}
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div>
    <h2 className="text-white font-bold uppercase tracking-widest text-xs mb-4 border-b border-zinc-800 pb-2">{title}</h2>
    {children}
  </div>
);

export default App;
