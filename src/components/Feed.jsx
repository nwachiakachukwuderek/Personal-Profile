"use client";

import { useState } from "react";
import { Search, Link as LinkIcon, Video } from "lucide-react";

// Mock Data
const MOCK_DATA = [
    {
        id: 1,
        title: "Understanding the Electoral Process in Nigeria",
        category: "Article",
        context: "A comprehensive guide to how voting works and what to expect during the Presidential election.",
        link: "https://example.com/article-1",
    },
    {
        id: 2,
        title: "Key Candidates Debate: Economic Policies",
        category: "Talk",
        context: "Watch the top candidates discuss their plans to revitalize the nation's economy.",
        link: "https://youtube.com/watch?v=mock1",
    },
    {
        id: 3,
        title: "Youth Participation in 2027 Elections",
        category: "Article",
        context: "Analyzing the potential impact of youth voter turnout on the upcoming election results.",
        link: "https://example.com/article-2",
    },
    {
        id: 4,
        title: "Security Measures for Polling Units",
        category: "Article",
        context: "INEC outlines the security protocols that will be deployed across nationwide polling stations.",
        link: "https://example.com/article-3",
    },
    {
        id: 5,
        title: "How to register for your PVC",
        category: "Talk",
        context: "A step-by-step video guide making sure you are eligible to vote before the deadline.",
        link: "https://youtube.com/watch?v=mock2",
    },
    {
        id: 6,
        title: "Historical Analysis of Past Elections",
        category: "Article",
        context: "An overview of voting patterns and historical trends in previous Nigerian presidential elections.",
        link: "https://example.com/article-4",
    },
];

export default function Feed() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = MOCK_DATA.filter(
        (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.context.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-12 w-full">
            {/* Search Bar */}
            <div className="sticky top-0 z-20 bg-slate-50/90 backdrop-blur-md pt-4 pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12 border-b border-slate-200 mb-8">
                <div className="relative max-w-2xl mx-auto w-full group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent shadow-sm transition-all duration-200"
                        placeholder="Search articles, talks, or keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Feed List */}
            <div className="space-y-6 max-w-2xl mx-auto w-full pb-20">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                        >
                            {/* Decorative side border */}
                            <div
                                className={`absolute left-0 top-0 bottom-0 w-1 ${item.category === "Talk" ? "bg-brand-red" : "bg-brand-blue"
                                    }`}
                            ></div>

                            <div className="flex justify-between items-start mb-3">
                                <span
                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${item.category === "Talk"
                                            ? "bg-red-50 text-brand-red"
                                            : "bg-blue-50 text-brand-blue"
                                        }`}
                                >
                                    {item.category}
                                </span>

                                <a
                                    href={item.link}
                                    className="text-slate-400 hover:text-brand-blue transition-colors duration-200 bg-slate-50 p-2 rounded-full hover:bg-slate-100"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open link"
                                >
                                    {item.category === "Talk" ? (
                                        <Video className="w-4 h-4" />
                                    ) : (
                                        <LinkIcon className="w-4 h-4" />
                                    )}
                                </a>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-5">
                                {item.context}
                            </p>

                            <a
                                href={item.link}
                                className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors group-hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.category === "Talk" ? "Watch Video" : "Read Article"}
                                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 border-dashed">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
                            <Search className="h-8 w-8 text-slate-300" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">No results found</h3>
                        <p className="text-slate-500 max-w-sm mx-auto">
                            We couldn't find anything matching "{searchQuery}". Try adjusting your keywords.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
