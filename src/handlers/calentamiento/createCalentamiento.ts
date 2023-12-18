import { Calentamiento } from "../../db";
import { RutinaPropertys } from "../../types";
import { createDay } from "../day/createDay";
import { createEjercicios } from "../ejercicio/createEjercicios";
import { getOneUserId } from "../user/getOneUserId";

export const createCalentamiento = async (props: RutinaPropertys) => {
    const { userId, dias } = props
    const user: any = await getOneUserId(userId)
    if (!user) throw new Error('Usuario no encontrado')
    const newCalentamiento: any = await Calentamiento.create()
    dias.forEach(async (dia) => {
        const newDay: any = await createDay()
        const ejercicios = await createEjercicios(dia.ejercicios)
        newDay.addEjercicio(ejercicios)
        await newCalentamiento.addDay(newDay);
    });
    await user.addCalentamiento(newCalentamiento)
    return newCalentamiento
}