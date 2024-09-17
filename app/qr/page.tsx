import {RedirectType} from "next/dist/client/components/redirect";
import {redirect} from "next/navigation";

export default function QR() {
    redirect("/links", RedirectType.replace);
}
