import Countdown from "@/components/Countdown";
import Feed from "@/components/Feed";

export default function Home() {
    return (
        <main className="flex flex-col lg:flex-row min-h-screen selection:bg-brand-red selection:text-white">
            {/* Sticky Hero (Desktop) / Stacked Hero (Mobile) */}
            <section className="w-full lg:w-[40%] bg-brand-blue text-white lg:sticky lg:top-0 lg:h-screen p-8 sm:p-12 lg:p-14 xl:p-20 flex flex-col justify-center relative overflow-hidden shrink-0 shadow-2xl z-10">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
                <div className="relative z-10 w-full text-center lg:text-left transition-all duration-500">
                    <div className="inline-flex items-center justify-center lg:justify-start space-x-3 mb-8">
                        <span className="w-10 h-1 bg-brand-red rounded-full"></span>
                        <span className="text-sm uppercase tracking-widest font-bold text-slate-200">The Future Is Near</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black mb-6 leading-[1.1] text-white tracking-tight">
                        Nigerian<br className="hidden lg:block" /> Presidential<br className="hidden lg:block" /> Election
                    </h1>

                    <div className="mb-12 lg:mb-16">
                        <p className="text-xl sm:text-2xl font-medium text-slate-300">
                            January 16, 2027
                        </p>
                    </div>

                    <div className="pt-8 lg:pt-10 border-t border-white/20">
                        <h2 className="text-sm uppercase tracking-widest text-slate-300 font-bold mb-6 flex items-center justify-center lg:justify-start">
                            <span className="w-2.5 h-2.5 rounded-full bg-brand-red mr-3 shadow-[0_0_10px_rgba(200,16,46,0.8)] animate-pulse"></span>
                            Countdown to the polls
                        </h2>
                        <Countdown />
                    </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-brand-red/20 rounded-full blur-[100px] pointer-events-none"></div>
            </section>

            {/* Filterable Feed Section */}
            <section className="w-full lg:w-[60%] bg-slate-50 min-h-screen relative">
                <Feed />
            </section>
        </main>
    );
}
