import axios from "axios";

export const BRAND_COLOR = "#180023";

export const ISSUES_URL = "https://github.com/aelmosalamy/thesoc.club/issues/new";
export const WHATSAPP_INVITE = "https://chat.whatsapp.com/LJaENxqIyZeJ2qkAewHmYV";


export const jsonHTTPClient = new axios.Axios({
    baseURL: process.env.URL,
    withCredentials: false, // Convert to true if frontend/backend are no longer running on the same host

    transformRequest: (data, headers) => {
        headers.setContentType("application/json");
        return JSON.stringify(data);
    },
    transformResponse: (data, _headers, status) => {
        if (!data) return null;

        /* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment */
        try {
            return JSON.parse(data);
        } catch {
            if ((status || 0) / 100 !== 2) {
                return {"error": data};
            }

            return data;
        }
        /* eslint-enable */
    },
});
