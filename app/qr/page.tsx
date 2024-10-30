import {RedirectType} from "next/dist/client/components/redirect";
import {redirect} from "next/navigation";

export default function QR() {
    redirect("https://forms.gle/o7opp6XioLSbLKPr9", RedirectType.replace);
}
