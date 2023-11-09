import members from "@/app/constants/members";
import {toTitleCase} from "@/app/utils";

const COLORS = [
    "red",
    "orange",
    "indigo",
    "sky",
    "cyan",
    "violet",
    "purple",
    "rose",
    "teal",
    "emerald",
    "yellow",
    "lime",
    "green",
    "amber",
];

/**
 * Select a deterministically random color for a given user.
 *
 * @param initials The user's initials.
 * @param index The position of the user in the list.
 * @author Adham Elmosalamy
 */
function getRandomColor(initials: string, index: number): string {
    const hash = initials
        .split("")
        .reduce((acc, val) => acc + val.charCodeAt(0) + index * 2, 0)
    ;

    return COLORS[hash % COLORS.length];
}


export default function Home() {
    return (
        <main className="flex-col flex-wrap items-center">
            <header className="mb-14 max-w-full">
                This is the official site for the SOC: a cyber security community @ American University of Sharjah 🔐✨
            </header>
            <section className="self-start w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mx-1 pb-12">
                {
                    members.map((member, i) => (
                        <div title={ member.name } key={i} className="w-full flex flex-row gap-3 items-center transition-transform hover:-translate-y-1">
                            <div className={`
                                w-14 h-14 flex items-center justify-center text-2xl bg-${getRandomColor(member.initials, i)}-500
                                text-gray-200 overflow-hidden whitespace-nowrap rounded-full border-2 border-gray-200
                            `}>
                                { member.initials }
                            </div>
                            <div>
                                <p>{ member.name }</p>
                                <span className="text-gray-100">{ toTitleCase(member.major) }</span>
                            </div>
                        </div>
                    ))
                }
            </section>
        </main>
    );
}
