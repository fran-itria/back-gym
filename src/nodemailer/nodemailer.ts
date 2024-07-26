import { PASSWORD_APLICATION, USER_APLICATION } from "../config";
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: USER_APLICATION,
        pass: PASSWORD_APLICATION
    }
});

export default transporter;