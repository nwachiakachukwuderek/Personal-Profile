export default function About() {
    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 sm:px-6 lg:px-12 selection:bg-brand-red selection:text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 relative">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-blue mb-4 tracking-tight">
                        Meet the Candidate
                    </h1>
                    <div className="w-24 h-1.5 bg-brand-red rounded-full mx-auto"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">

                    {/* Portrait Image Side */}
                    <div className="w-full lg:w-5/12 relative">
                        <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
                            <img
                                src="/candidate.png"
                                alt="Portrait of the Presidential Candidate in Agbada and Fila cap"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent"></div>

                            {/* Image Overlay Information */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-1">Presidential Candidate</p>
                                <h2 className="text-3xl font-black leading-tight">His Excellency</h2>
                            </div>
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-red/20 rounded-full blur-2xl z-0"></div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-blue/20 rounded-full blur-3xl z-0"></div>
                    </div>

                    {/* Biography Information Side */}
                    <div className="w-full lg:w-7/12 space-y-8">
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 relative">
                            <span className="absolute top-0 right-0 bg-brand-blue text-white px-4 py-1 rounded-bl-2xl rounded-tr-3xl text-xs font-bold uppercase tracking-wider">
                                Biography
                            </span>

                            <div className="grid grid-cols-2 gap-8 mb-8 border-b border-slate-100 pb-8">
                                <div>
                                    <dt className="text-sm uppercase tracking-widest font-semibold text-slate-400 mb-1">Origin</dt>
                                    <dd className="text-2xl font-bold text-slate-900">Kano State</dd>
                                </div>
                                <div>
                                    <dt className="text-sm uppercase tracking-widest font-semibold text-slate-400 mb-1">Age</dt>
                                    <dd className="text-2xl font-bold text-slate-900">54 Years</dd>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-brand-blue mb-3 flex items-center">
                                        <span className="w-2 h-2 bg-brand-red rounded-full mr-3 text-brand-red"></span>
                                        What He Stands For
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        A unified and prosperous Nigeria. We believe in strengthening the nation's core through
                                        sweeping economic reform, creating millions of jobs aligned with the modern digital age.
                                        Our vision guarantees robust security architectures prioritizing the safety of every citizen,
                                        urban or rural.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-brand-red">
                                    <p className="italic text-slate-700 font-medium">
                                        "The promise of tomorrow must be secured with the actions of today. Together, we build
                                        the Nigeria of our dreams, hand in hand, beyond any border or allegiance."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
