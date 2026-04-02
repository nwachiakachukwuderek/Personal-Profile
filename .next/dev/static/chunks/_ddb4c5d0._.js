(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useCountdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCountdown",
    ()=>useCountdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useCountdown(targetDate) {
    _s();
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountdown.useEffect": ()=>{
            // Determine the target date time
            const target = new Date(targetDate).getTime();
            // Setup the interval to run every 1 second
            const intervalId = setInterval({
                "useCountdown.useEffect.intervalId": ()=>{
                    const now = new Date().getTime();
                    const difference = target - now;
                    if (difference <= 0) {
                        clearInterval(intervalId);
                        setTimeLeft({
                            days: 0,
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        });
                    } else {
                        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                        const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                        const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
                        const seconds = Math.floor(difference % (1000 * 60) / 1000);
                        setTimeLeft({
                            days,
                            hours,
                            minutes,
                            seconds
                        });
                    }
                }
            }["useCountdown.useEffect.intervalId"], 1000);
            // Initial call right away, then cleanup on unmount
            return ({
                "useCountdown.useEffect": ()=>clearInterval(intervalId)
            })["useCountdown.useEffect"];
        }
    }["useCountdown.useEffect"], [
        targetDate
    ]);
    return timeLeft;
}
_s(useCountdown, "d2ElubK02PRHUzxynWojtwvCMRM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Countdown.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Countdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCountdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCountdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Countdown() {
    _s();
    const targetDate = "2027-01-16T00:00:00.000Z"; // Nigerian Presidential Election
    const timeLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCountdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountdown"])(targetDate);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Countdown.useEffect": ()=>{
            setMounted(true);
        }
    }["Countdown.useEffect"], []);
    // Pad numbers with leading zero
    const formatTime = (time)=>String(time || 0).padStart(2, "0");
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-32 flex items-center justify-center opacity-50",
            children: "Loading countdown..."
        }, void 0, false, {
            fileName: "[project]/src/components/Countdown.jsx",
            lineNumber: 19,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2 sm:gap-4 text-center justify-center lg:justify-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-white text-brand-red px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg min-w-[3rem] sm:min-w-[4rem] lg:min-w-[5rem]",
                        children: formatTime(timeLeft.days)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Countdown.jsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] sm:text-xs lg:text-sm font-medium mt-2 uppercase tracking-wider text-slate-100",
                        children: "Days"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Countdown.jsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Countdown.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl sm:text-3xl lg:text-5xl font-bold text-white py-2 sm:py-3",
                children: ":"
            }, void 0, false, {
                fileName: "[project]/src/components/Countdown.jsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-white text-brand-red px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg min-w-[3rem] sm:min-w-[4rem] lg:min-w-[5rem]",
                        children: formatTime(timeLeft.hours)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Countdown.jsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] sm:text-xs lg:text-sm font-medium mt-2 uppercase tracking-wider text-slate-100",
                        children: "Hours"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Countdown.jsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Countdown.jsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl sm:text-3xl lg:text-5xl font-bold text-white py-2 sm:py-3",
                children: ":"
            }, void 0, false, {
                fileName: "[project]/src/components/Countdown.jsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-white text-brand-red px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg min-w-[3rem] sm:min-w-[4rem] lg:min-w-[5rem]",
                        children: formatTime(timeLeft.minutes)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Countdown.jsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] sm:text-xs lg:text-sm font-medium mt-2 uppercase tracking-wider text-slate-100",
                        children: "Mins"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Countdown.jsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Countdown.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl sm:text-3xl lg:text-5xl font-bold text-white py-2 sm:py-3",
                children: ":"
            }, void 0, false, {
                fileName: "[project]/src/components/Countdown.jsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-white text-brand-red px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg min-w-[3rem] sm:min-w-[4rem] lg:min-w-[5rem]",
                        children: formatTime(timeLeft.seconds)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Countdown.jsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] sm:text-xs lg:text-sm font-medium mt-2 uppercase tracking-wider text-slate-100",
                        children: "Secs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Countdown.jsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Countdown.jsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Countdown.jsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_s(Countdown, "bCgpFsJckolXk5LAIeIGwHAt+WU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCountdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCountdown"]
    ];
});
_c = Countdown;
var _c;
__turbopack_context__.k.register(_c, "Countdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Feed.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Feed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Mock Data
const MOCK_DATA = [
    {
        id: 1,
        title: "A CHAT WITH PRINCE ADEWOLE ADEBAYO",
        category: "Talk",
        context: " The discussion focuses on the state of democracy in Nigeria, the role of the opposition, and the path forward for the country ahead of the 2027 elections.",
        link: "https://youtu.be/KdKQy0yI-dM?si=EXyZFbH4tKpVHDOe"
    },
    {
        id: 2,
        title: "Prince Adewole Adebayo's Full Speech at J9C 13th Anniversary Lecture",
        category: "Speech",
        context: "Prince Adewole Adebayo discusses the nature of economic reform in Nigeria",
        link: "https://youtu.be/SsHkcJbVNRg?si=0C-A_TdXdjngsAOJ"
    },
    {
        id: 3,
        title: "THE PRESS ENGAGES PRINCE ADEWOLE ADEBAYO IN ILORIN, KWARA STATE",
        category: "Interview",
        context: "Prince Adewole Adebayo, the SDP presidential candidate in the 2023 general election, engages with journalists in Ilorin, Kwara State to discuss pressing national issues. He emphasizes that the movement of politicians between political parties is less important than addressing the suffering and hunger of the masses",
        link: "https://youtu.be/gfTJhm2O-uU?si=358M1AceIdkEHKm2"
    },
    {
        id: 4,
        title: "Alleged Coup: Nothing Good Can Come Out Of Military Rule",
        category: "Interview",
        context: " Prince Adewole Adebayo, the 2023 presidential candidate for the Social Democratic Party (SDP), discussing the current state of Nigeria under the administration of President Bola Tinubu.",
        link: "https://www.youtube.com/watch?v=dESO9j7d0RI"
    },
    {
        id: 5,
        title: "How to register for your PVC",
        category: "Talk",
        context: "A step-by-step video guide making sure you are eligible to vote before the deadline.",
        link: "https://youtube.com/watch?v=mock2"
    },
    {
        id: 6,
        title: "I Have Informed The SDP That I Will Be Running For the Presidency Again in 2027 – Adebayo",
        category: "Interview",
        context: "Prince Adewole Adebayo, the 2023 presidential candidate for the Social Democratic Party (SDP), discusses his plans for the 2027 election and his vision for Nigeria..",
        link: "https://www.youtube.com/watch?v=EDsaiPhwLUw"
    },
    {
        id: 7,
        title: "Unraveling the Enigma of Adewole Adebayo @ 50",
        category: "Article",
        context: "The piece celebrates Adewole Adebayo’s 50th birthday by highlighting his mentorship, philanthropy, media initiatives, and enduring commitment to uplifting others.",
        link: "https://www.vanguardngr.com/2022/01/unraveling-the-enigma-of-adewole-adebayo-50/"
    },
    {
        id: 8,
        title: "Impact positively on Nigerians before leaving office, Adewole tells Buhari",
        category: "Article",
        context: "This piece essentially combines criticism of Buhari’s governance with Adebayo’s vision for Nigeria’s future, positioning him as a reform-minded leader.",
        link: "https://blueprint.ng/impact-positively-on-nigerians-before-leaving-office-adewole-tells-buhari/"
    },
    {
        id: 9,
        title: "Nigeria @ 61: Adebayo proffers solution to nation’s electoral challenges at National Political Summit",
        category: "Article",
        context: "Adebayo’s solution emphasizes citizen involvement, trust-building, and reducing reliance on technical quick fixes as the path to credible elections.",
        link: "https://www.vanguardngr.com/2021/10/nigeria-61-adebayo-proffers-solution-to-nations-electoral-challenges-at-national-political-summit/"
    },
    {
        id: 10,
        title: "Adewole Adebayo, Segun Mimiko, others speak at Tanko Yinusa’s 50th birthday lecture",
        category: "Article",
        context: "The article covers a public lecture held in Abuja to celebrate Dr. Tanko Yinusa’s 50th birthday, where prominent figures including Adewole Adebayo, Segun Mimiko, Senator Ben Obi, and others spoke.",
        link: "https://www.vanguardngr.com/2021/10/adewole-adebayo-segun-mimiko-others-speak-at-tanko-yinusas-50th-birthday-lecture/"
    },
    {
        id: 11,
        title: "SDP's Adebayo Condemns Tinubu's Handling Of Insecurity In Nigeria",
        category: "Interview",
        context: "This edition of Politics Today on Channels Television provides a comprehensive update on the rising insecurity in Nigeria",
        link: "https://www.youtube.com/live/4m0jExZ9XQ4"
    },
    {
        id: 12,
        title: "NCF ‘ll offer viable solutions to get Nigeria out of the woods, says Adewole Adebayo",
        category: "Article",
        context: "The article from Vanguard News reports on Adewole Adebayo, a member of the National Consultative Front (NCF), who emphasized that the group aims to provide viable solutions to Nigeria’s challenges rather than just engage in politics.",
        link: "https://www.vanguardngr.com/2021/12/ncf-ll-offer-viable-solutions-to-get-nigeria-out-of-the-woods-says-adewole-adebayo/"
    },
    {
        id: 13,
        title: "2023: Jega, Moghalu, Agbakoba, Ezekwesili, Utomi, Other Prominent Nigerians Launch Political Coalition",
        category: "Article",
        context: "The page you’re viewing reports on the launch of a major political coalition in Nigeria ahead of the 2023 elections.",
        link: "https://www.channelstv.com/2021/10/07/jega-moghalu-agbakoba-ezekwesili-utomi-other-prominent-nigerians-launch-political-coalition/"
    },
    {
        id: 14,
        title: "Barrister Adewole Adebayo charges Nigerians for collective fulfillment as key solution to challenges",
        category: "Article",
        context: "The article highlights Barrister Adewole Adebayo’s call for Nigerians to embrace collective fulfillment as a solution to the country’s pressing challenges.",
        link: "https://web.archive.org/web/20230209130036/https://www.empiregist.com/barrister-adewole-adebayo-charges-nigerians-for-collective-fulfillment-as-key-solution-to-challenges/"
    },
    {
        id: 15,
        title: "Ondo-Born Prince Adewole Adebayo Declares Ambition For President",
        category: "Article",
        context: "Prince Adewole Adebayo, an Ondo-born lawyer, publicly declared his ambition to run for Nigeria’s presidency in the 2023 elections during a visit to the Alaafin of Oyo, Oba Lamidi Adeyemi III, at his coronation anniversary.",
        link: "https://penangle.com/2023-build-up-ondo-born-prince-adewole-adebayo-declares-ambition-for-president/"
    },
    {
        id: 16,
        title: "Petrol Price Will Still Go Up, Conserve Your Energy', Adewole Tells Angry Nigerians",
        category: "Talk",
        context: "The 2023 presidential candidate for the Social Democratic Party (SDP), analyzes the current state of petrol pricing in Nigeria following the removal of fuel subsidies.",
        link: "https://www.youtube.com/watch?v=BwfnFrr9oS4"
    },
    {
        id: 17,
        title: "Abuja-based TV CEO declares for Presidency",
        category: "Article",
        context: "Adebayo criticized the political elite’s portrayal of Muhammadu Buhari as a “messiah,” saying Buhari’s poor performance revealed those promises as propaganda.",
        link: "https://punchng.com/2023-abuja-based-tv-ceo-declares-for-presidency/?amp"
    },
    {
        id: 18,
        title: "Lawyer Faults Falana over Alleged Diversion of Remittance on CERPAC Project",
        category: "Article",
        context: "Adebayo criticized the political elite’s portrayal of Muhammadu Buhari as a “messiah,” saying Buhari’s poor performance revealed those promises as propaganda.",
        link: "https://punchng.com/2023-abuja-based-tv-ceo-declares-for-presidency/?amp"
    }
];
function Feed() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredData = MOCK_DATA.filter((item)=>item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase()) || item.context.toLowerCase().includes(searchQuery.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-12 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-20 bg-slate-50/90 backdrop-blur-md pt-4 pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12 border-b border-slate-200 mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-2xl mx-auto w-full group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "h-5 w-5 text-slate-400 group-focus-within:text-brand-blue transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Feed.jsx",
                                lineNumber: 152,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Feed.jsx",
                            lineNumber: 151,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: "block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent shadow-sm transition-all duration-200",
                            placeholder: "Search articles, talks, or keywords...",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Feed.jsx",
                            lineNumber: 154,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Feed.jsx",
                    lineNumber: 150,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Feed.jsx",
                lineNumber: 149,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 max-w-2xl mx-auto w-full pb-20",
                children: filteredData.length > 0 ? filteredData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute left-0 top-0 bottom-0 w-1 ${item.category === "Article" ? "bg-brand-red" : "bg-brand-blue"}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Feed.jsx",
                                lineNumber: 173,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${("TURBOPACK compile-time truthy", 1) ? "bg-red-50 text-brand-red" : "TURBOPACK unreachable"}`,
                                        children: item.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Feed.jsx",
                                        lineNumber: 179,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.link,
                                        className: "text-slate-400 hover:text-brand-blue transition-colors duration-200 bg-slate-50 p-2 rounded-full hover:bg-slate-100",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Open link",
                                        children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Feed.jsx",
                                            lineNumber: 196,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ "TURBOPACK unreachable"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Feed.jsx",
                                        lineNumber: 188,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Feed.jsx",
                                lineNumber: 178,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Feed.jsx",
                                lineNumber: 203,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 text-sm leading-relaxed mb-5",
                                children: item.context
                            }, void 0, false, {
                                fileName: "[project]/src/components/Feed.jsx",
                                lineNumber: 206,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.link,
                                className: "inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors group-hover:underline",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    ("TURBOPACK compile-time truthy", 1) ? "Watch Video" : "TURBOPACK unreachable",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "ml-1 w-4 h-4 transition-transform group-hover:translate-x-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 5l7 7-7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Feed.jsx",
                                            lineNumber: 218,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Feed.jsx",
                                        lineNumber: 217,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Feed.jsx",
                                lineNumber: 210,
                                columnNumber: 29
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/components/Feed.jsx",
                        lineNumber: 168,
                        columnNumber: 25
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-16 bg-white rounded-2xl border border-slate-100 border-dashed",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "h-8 w-8 text-slate-300"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Feed.jsx",
                                lineNumber: 226,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Feed.jsx",
                            lineNumber: 225,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-slate-900 mb-2",
                            children: "No results found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Feed.jsx",
                            lineNumber: 228,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 max-w-sm mx-auto",
                            children: [
                                "We couldn't find anything matching \"",
                                searchQuery,
                                '". Try adjusting your keywords.'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Feed.jsx",
                            lineNumber: 229,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Feed.jsx",
                    lineNumber: 224,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Feed.jsx",
                lineNumber: 165,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Feed.jsx",
        lineNumber: 147,
        columnNumber: 9
    }, this);
}
_s(Feed, "4/Qdl0R3tQNJqUS4eMrvY/uMU/4=");
_c = Feed;
var _c;
__turbopack_context__.k.register(_c, "Feed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Video
]);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
            key: "ftymec"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "14",
            height: "12",
            rx: "2",
            key: "158x01"
        }
    ]
];
const Video = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("video", __iconNode);
;
 //# sourceMappingURL=video.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Video",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_ddb4c5d0._.js.map