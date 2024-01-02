import crypto from "crypto";

export default function hash(password: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const passwordHash = crypto.createHash("sha256").update(data).digest("hex");
    return passwordHash
}