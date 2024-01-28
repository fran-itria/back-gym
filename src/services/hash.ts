import bcrypt from "bcrypt";

export default function hash(password: string) {
    const passwordHash = bcrypt.hashSync(password, 10)
    return passwordHash
}