export default function Contact() {
    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-16 px-4 sm:px-6 lg:px-12 selection:bg-brand-red selection:text-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 relative">
                    <h1 className="text-5xl md:text-6xl font-black text-brand-blue mb-4 tracking-tight">
                        Get in Touch
                    </h1>
                    <div className="w-24 h-1.5 bg-brand-red rounded-full mx-auto"></div>
                    <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
                        Whether you want to volunteer, ask a question, or support the campaign, we would love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                                Campaign Office
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-1">Address</h3>
                                    <p className="text-slate-600">12 Constitution Avenue<br />Central Business District<br />Abuja, Nigeria</p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-1">Email</h3>
                                    <a href="mailto:info@nigeria2027.org" className="text-brand-blue font-semibold hover:underline">
                                        info@nigeria2027.org
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-1">Phone</h3>
                                    <a href="tel:+2348000000000" className="text-slate-600 hover:text-brand-blue transition-colors">
                                        +234 800 000 0000
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dummy Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-slate-100">
                        <h2 className="text-2xl font-bold text-brand-blue mb-6">Send a Message</h2>
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-colors"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-red text-white font-bold py-3.5 px-4 rounded-xl hover:bg-red-700 transition-colors shadow-md hover:shadow-lg active:scale-[0.98]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
