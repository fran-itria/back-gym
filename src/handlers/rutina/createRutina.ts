import { Rutina } from "../../db";
import { RutinaPropertys } from "../../types";
import { createDay } from "../day/createDay"
import { createEjercicios } from "../ejercicio/createEjercicios";
import { getOneUserId } from "../user/getOneUserId";

export const createRutina = async ({ userId, dias }: RutinaPropertys) => {
    const user: any = await getOneUserId(userId)
    if (!user) throw new Error('Usuario no encontrado')
    const newRutina: any = await Rutina.create()
    dias.forEach(async (dia) => {
        const newDay: any = await createDay()
        const ejercicios = await createEjercicios(dia.ejercicios)
        newDay.addEjercicio(ejercicios)
        await newRutina.addDay(newDay);
    });
    await user.addRutina(newRutina)
    return newRutina
}