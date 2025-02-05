import { USER_APLICATION } from "../../config";
import { User } from "../../db";
import transporter from "../../nodemailer/nodemailer";
import { team } from "../../routes/mail";

const calentamiento = 'calentamiento'

export default async function createRoutineMail(email: string, routine: string) {
    await transporter.verify()
    const user: any = await User.findOne({
        where: {
            email
        }
    })

    let mail = null
    if (routine == calentamiento) {
        mail = {
            from: USER_APLICATION,
            to: email,
            subject: 'Calentamiento creado',
            html: `
                <h3> Hola ${user.name} ${user.surname} </h3>
                <p>
                    Espero que estés teniendo un excelente día.
                </p>
                <p>
                ¡Tenemos grandes noticias!
                </p>
                <p>
                 Hemos creado una nueva rutina de calentamiento especialmente diseñada para ti. 
                 Esta rutina ha sido pensada para ayudarte a preparar tu cuerpo de la mejor manera 
                 antes de comenzar tus entrenamientos, mejorando tu rendimiento y reduciendo el riesgo de lesiones.
                </p>
                <p>
                    Puedes acceder a tu nueva rutina de calentamiento a través de tu cuenta en nuestra plataforma.
                </p>
                <a 
                    href="https://pro-active-center.vercel.app"
                    style="
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: fit-content;
                        padding-left: 3px;
                        padding-right: 3px;
                        font-size: 1em;
                        font-weight: 500;
                        font-family: inherit;
                        background-color: #d1d5db;
                        color: #1f2937;
                        border: solid 2px black;
                        cursor: pointer;
                        transition: ease-in-out 500ms;
                        text-decoration: none;
                    "
                >
                    <b> Iniciar sesión </b>    
                </a>
                <p>
                    Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Estamos aquí para apoyarte en tu camino hacia tus objetivos.</p>
                <p>
                    ¡Disfruta de tu entrenamiento y sigue con ese gran trabajo!
                </p>
                <footer style="margin-top: 20px; color: #777;"> 
                    Saludos, <b>${team}</b> 
                </footer>`
        }
    } else {
        mail = {
            from: USER_APLICATION,
            to: email,
            subject: 'Rutina creada',
            html: `
            <h3> Hola ${user.name} ${user.surname} </h3>
            <p>
                Espero que estés teniendo un excelente día.
            </p>
            <p>
                ¡Tenemos grandes noticias!
            </p>
            <p>
                Hemos creado una nueva rutina de ejercicios especialmente diseñada para ti!
                Esta rutina ha sido personalizada para ayudarte a alcanzar tus objetivos de manera efectiva,
                combinando diferentes tipos de ejercicios que se adaptan a tus necesidades y nivel de condición física.
            </p>
            <p>
                Puedes acceder a tu nueva rutina de ejercicios a través de tu cuenta en nuestra plataforma.
            </p>
            <a 
                href="https://proactivecenter.com.ar"
                style="
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: fit-content;
                    padding-left: 3px;
                    padding-right: 3px;
                    font-size: 1em;
                    font-weight: 500;
                    font-family: inherit;
                    background-color: #d1d5db;
                    color: #1f2937;
                    border: solid 2px black;
                    cursor: pointer;
                    transition: ease-in-out 500ms;
                    text-decoration: none;
                    "
                >
                <b> Iniciar sesión </b>    
            </a>
            <p>
                Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Estamos aquí para apoyarte en tu camino hacia tus objetivos.
            </p>
            <p>
                ¡Disfruta de tu entrenamiento y sigue con ese gran trabajo!
            </p>
            <footer style="margin-top: 20px; color: #777;"> 
                Saludos, <b>${team}</b> 
            </footer>`
        }
    }

    await transporter.sendMail(mail);
    return true
}