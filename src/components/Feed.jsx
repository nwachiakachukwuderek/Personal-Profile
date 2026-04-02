"use client";

import { useState } from "react";
import { Search, Link as LinkIcon, Video } from "lucide-react";

// Mock Data
const MOCK_DATA = [
    {
        id: 1,
        title: "A CHAT WITH PRINCE ADEWOLE ADEBAYO",
        category: "Talk",
        context: " The discussion focuses on the state of democracy in Nigeria, the role of the opposition, and the path forward for the country ahead of the 2027 elections.",
        link: "https://youtu.be/KdKQy0yI-dM?si=EXyZFbH4tKpVHDOe",
    },
    {
        id: 2,
        title: "Prince Adewole Adebayo's Full Speech at J9C 13th Anniversary Lecture",
        category: "Speech",
        context: "Prince Adewole Adebayo discusses the nature of economic reform in Nigeria",
        link: "https://youtu.be/SsHkcJbVNRg?si=0C-A_TdXdjngsAOJ",
    },
    {
        id: 3,
        title: "THE PRESS ENGAGES PRINCE ADEWOLE ADEBAYO IN ILORIN, KWARA STATE",
        category: "Interview",
        context: "Prince Adewole Adebayo, the SDP presidential candidate in the 2023 general election, engages with journalists in Ilorin, Kwara State to discuss pressing national issues. He emphasizes that the movement of politicians between political parties is less important than addressing the suffering and hunger of the masses",
        link: "https://youtu.be/gfTJhm2O-uU?si=358M1AceIdkEHKm2",
    },
    {
        id: 4,
        title: "Alleged Coup: Nothing Good Can Come Out Of Military Rule",
        category: "Interview",
        context: " Prince Adewole Adebayo, the 2023 presidential candidate for the Social Democratic Party (SDP), discussing the current state of Nigeria under the administration of President Bola Tinubu.",
        link: "https://www.youtube.com/watch?v=dESO9j7d0RI",
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
        title: "I Have Informed The SDP That I Will Be Running For the Presidency Again in 2027 – Adebayo",
        category: "Interview",
        context: "Prince Adewole Adebayo, the 2023 presidential candidate for the Social Democratic Party (SDP), discusses his plans for the 2027 election and his vision for Nigeria..",
        link: "https://www.youtube.com/watch?v=EDsaiPhwLUw",
    },
    {
        id: 7,
        title: "Unraveling the Enigma of Adewole Adebayo @ 50",
        category: "Article",
        context: "The piece celebrates Adewole Adebayo’s 50th birthday by highlighting his mentorship, philanthropy, media initiatives, and enduring commitment to uplifting others.",
        link: "https://www.vanguardngr.com/2022/01/unraveling-the-enigma-of-adewole-adebayo-50/",
    },
    {
        id: 8,
        title: "Impact positively on Nigerians before leaving office, Adewole tells Buhari",
        category: "Article",
        context: "This piece essentially combines criticism of Buhari’s governance with Adebayo’s vision for Nigeria’s future, positioning him as a reform-minded leader.",
        link: "https://blueprint.ng/impact-positively-on-nigerians-before-leaving-office-adewole-tells-buhari/",
    },
    {
        id: 9,
        title: "Nigeria @ 61: Adebayo proffers solution to nation’s electoral challenges at National Political Summit",
        category: "Article",
        context: "Adebayo’s solution emphasizes citizen involvement, trust-building, and reducing reliance on technical quick fixes as the path to credible elections.",
        link: "https://www.vanguardngr.com/2021/10/nigeria-61-adebayo-proffers-solution-to-nations-electoral-challenges-at-national-political-summit/",
    },
    {
        id: 10,
        title: "Adewole Adebayo, Segun Mimiko, others speak at Tanko Yinusa’s 50th birthday lecture",
        category: "Article",
        context: "The article covers a public lecture held in Abuja to celebrate Dr. Tanko Yinusa’s 50th birthday, where prominent figures including Adewole Adebayo, Segun Mimiko, Senator Ben Obi, and others spoke.",
        link: "https://www.vanguardngr.com/2021/10/adewole-adebayo-segun-mimiko-others-speak-at-tanko-yinusas-50th-birthday-lecture/",
    },
    {
        id: 11,
        title: "SDP's Adebayo Condemns Tinubu's Handling Of Insecurity In Nigeria",
        category: "Interview",
        context: "This edition of Politics Today on Channels Television provides a comprehensive update on the rising insecurity in Nigeria",
        link: "https://www.youtube.com/live/4m0jExZ9XQ4",
    },
    {
        id: 12,
        title: "NCF ‘ll offer viable solutions to get Nigeria out of the woods, says Adewole Adebayo",
        category: "Article",
        context: "The article from Vanguard News reports on Adewole Adebayo, a member of the National Consultative Front (NCF), who emphasized that the group aims to provide viable solutions to Nigeria’s challenges rather than just engage in politics.",
        link: "https://www.vanguardngr.com/2021/12/ncf-ll-offer-viable-solutions-to-get-nigeria-out-of-the-woods-says-adewole-adebayo/",
    },
    {
        id: 13,
        title: "2023: Jega, Moghalu, Agbakoba, Ezekwesili, Utomi, Other Prominent Nigerians Launch Political Coalition",
        category: "Article",
        context: "The page you’re viewing reports on the launch of a major political coalition in Nigeria ahead of the 2023 elections.",
        link: "https://www.channelstv.com/2021/10/07/jega-moghalu-agbakoba-ezekwesili-utomi-other-prominent-nigerians-launch-political-coalition/",
    },
    {
        id: 14,
        title: "Barrister Adewole Adebayo charges Nigerians for collective fulfillment as key solution to challenges",
        category: "Article",
        context: "The article highlights Barrister Adewole Adebayo’s call for Nigerians to embrace collective fulfillment as a solution to the country’s pressing challenges.",
        link: "https://web.archive.org/web/20230209130036/https://www.empiregist.com/barrister-adewole-adebayo-charges-nigerians-for-collective-fulfillment-as-key-solution-to-challenges/",
    },
    {
        id: 15,
        title: "Ondo-Born Prince Adewole Adebayo Declares Ambition For President",
        category: "Article",
        context: "Prince Adewole Adebayo, an Ondo-born lawyer, publicly declared his ambition to run for Nigeria’s presidency in the 2023 elections during a visit to the Alaafin of Oyo, Oba Lamidi Adeyemi III, at his coronation anniversary.",
        link: "https://penangle.com/2023-build-up-ondo-born-prince-adewole-adebayo-declares-ambition-for-president/",
    },
    {
        id: 16,
        title: "Petrol Price Will Still Go Up, Conserve Your Energy', Adewole Tells Angry Nigerians",
        category: "Talk",
        context: "The 2023 presidential candidate for the Social Democratic Party (SDP), analyzes the current state of petrol pricing in Nigeria following the removal of fuel subsidies.",
        link: "https://www.youtube.com/watch?v=BwfnFrr9oS4",
    },
    {
        id: 17,
        title: "Abuja-based TV CEO declares for Presidency",
        category: "Article",
        context: "Adebayo criticized the political elite’s portrayal of Muhammadu Buhari as a “messiah,” saying Buhari’s poor performance revealed those promises as propaganda.",
        link: "https://punchng.com/2023-abuja-based-tv-ceo-declares-for-presidency/?amp",
    },
    {
        id: 18,
        title: "Lawyer Faults Falana over Alleged Diversion of Remittance on CERPAC Project",
        category: "Article",
        context: "Adebayo criticized the political elite’s portrayal of Muhammadu Buhari as a “messiah,” saying Buhari’s poor performance revealed those promises as propaganda.",
        link: "https://punchng.com/2023-abuja-based-tv-ceo-declares-for-presidency/?amp",
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
                                className={`absolute left-0 top-0 bottom-0 w-1 ${item.category === "Talk" || 'Interview' || 'Speech' ? "bg-brand-red" : "bg-brand-blue"
                                    }`}
                            ></div>

                            <div className="flex justify-between items-start mb-3">
                                <span
                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${item.category === "Talk" || 'Interview' || 'Speech'
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
                                    {item.category === "Talk" || 'Interview' || 'Speech' ? (
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
                                {item.category === "Talk" || 'Interview' || 'Speech' ? "Watch Video" : "Read Article"}
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
