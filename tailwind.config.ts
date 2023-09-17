import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    // https://stackoverflow.com/questions/74997445/why-do-only-a-very-small-subset-of-tailwind-colours-render-in-my-app
    safelist: [
        {
            pattern: /^bg-/,
        },
    ],
    theme: {
        extend: {
            colors: {
                "dark-purple": "rgb(24, 0, 35)",
            },
        },
    },
    plugins: [],
};

export default config;
