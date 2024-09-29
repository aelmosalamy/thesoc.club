"use client";

import { useActionState, useState } from "react";
import { gameDecrypt } from "./actions";

import members from "@/app/members";
import { toTitleCase } from "@/app/utils";
import { useEffect, useRef } from "react";

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
    .reduce((acc, val) => acc + val.charCodeAt(0) + index * 2, 0);
  return COLORS[hash % COLORS.length];
}

export default function Home() {
  const dateEnd = Date.parse("02 Oct 2024 18:00:00 GMT");

  const [state, formAction] = useActionState(gameDecrypt, { decrypted: false });
  const [time, setTime] = useState("");
  const drootRef = useRef();
  const updateTime = () => {
    let left = (dateEnd - new Date()) / 1000;
    // let left = (dateEnd - Date.parse("02 Oct 2024 16:00:00 GMT") - count) / 1000;
    setTime(
      `${Math.floor(left / 3600)
        .toString()
        .padStart(2, "0")}:${Math.floor((left % 3600) / 60)
        .toString()
        .padStart(2, "0")}:${Math.floor(left % 60)
        .toString()
        .padStart(2, "0")}`
    );
  };

  useEffect(() => {
    updateTime();

    const iid = setInterval(() => {
      updateTime();
    }, 1000);

    return () => {
      clearInterval(iid);
    };
  }, []);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style = "position: absolute; left: 0; top: 0";

    if (drootRef.current) {
      drootRef.current.appendChild(canvas);

      matrix(canvas, {
        chars: matrix
          .range(0x30a1, 0x30f6)
          .concat(matrix.range(0x0030, 0x0039)),
        font_size: 34,
        unmount: () => {
          canvas.remove();
        },
      });
    }
  }, [drootRef]);

  if (!state.decrypted) {
    return (
      <div
        id="droot"
        ref={drootRef}
        className="w-full h-full absolute top-0 left-0 bg-gray-900 flex flex-col flex-wrap justify-center items-center"
      >
        <form
          className="flex flex-col items-center gap-6 text-2xl z-10"
          action={formAction}
        >
          <p className="text-8xl font-mono font-extrabold">{time}</p>
          <label
            style={{ padding: "3rem", width: 1000 }}
            className="text-center"
            htmlFor="decryptionKey"
          >
            The SOC Database has been AES-256 Encrypted.
            <br /> Only way to get your data back is paying the ransom.
            <br />
            <br />
            1. Be late and you never getting your data back.
            <br />
            2. Do something stupid and you never getting your data back.
            <br />
            3. Contact authorities and you never getting your data back.
            <br />
            <br />
            Wallet (BTC) Address:
            8b97bca79750847558d488e2ea4de79903c9c71c9af27ecf1b3dff5dba2abdd9
          </label>
          <p>Decryption Key (Once you pay!):</p>
          <input
            className="text-green-900 rounded-sm px-8 py-2 text-center text-2xl"
            id="decryptionKey"
            name="decryptionKey"
            type="text"
            placeholder="**************"
          />
        </form>
      </div>
    );
  }

  return (
    <main className="flex-col flex-wrap items-center">
      <header className="mb-14 max-w-full">
        This is the official site for the SOC: a cyber security community @
        American University of Sharjah 🔐✨
      </header>
      <section className="self-start w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mx-1 pb-12">
        {members.map((member, i) => (
          <div
            title={member.name}
            key={i}
            className="w-full flex flex-row gap-3 items-center transition-transform hover:-translate-y-1"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center text-2xl bg-${getRandomColor(
                member.initials,
                i
              )}-500 text-gray-200 overflow-hidden whitespace-nowrap rounded-full border-2 border-gray-200`}
            >
              {member.initials}
            </div>
            <div>
              <p>{member.name}</p>
              <span className="text-gray-100">{toTitleCase(member.major)}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
