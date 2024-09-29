"use server";

const KEY = "the_secret_key_1337";

export async function gameDecrypt(currentState: any, formData: FormData) {
  const decryptionKey = formData.get("decryptionKey");

  return { decrypted: decryptionKey === KEY };
}
