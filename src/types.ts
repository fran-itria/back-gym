import { UUID } from "crypto";
import { Request, Response } from "express";

export type request = Request;
export type response = Response;

export type userPropertys = {
  gymName: string;
  name: string;
  surname: string;
  contactEmergency: number;
  dni: number;
  edad: number;
  email: string;
  phone: number;
  usuario: string;
};

export type ejercicioPropertys = {
  name: string;
  series: string;
  repeticiones: string;
};

export type ejerciciosPropertys = {
  name: string;
  series: string;
  repeticiones: string;
}[];

export type OneDayrutinaPropertys = {
  rutinaId: string;
  dia: {
    series: string,
    repeticiones: string,
    name: string
  }[]
};

export type RutinaPropertys = {
  userId: string;
  dias: {
    ejercicios: {
      name: string
      series: string,
      repeticiones: string,
    }[]
  }[]
}

export type changeEjercicioPropertys = {
  id: string,
  name?: string,
  series?: number,
  repeticiones?: string,
  cargas?: string
}

export type CalentamientoPropertys = RutinaPropertys

export type createOneDayCalentamientoProps = {
  calentamientoId: string;
  dia: {
    series: string,
    repeticiones: string,
    name: string
  }[]
};

type Moment = 'Desayuno' | 'Media mañana' | 'Almuerzo' | 'Merienda' | 'Cena'
export type createMeal = {
  userId: UUID
  fecha: string
  time: string
  moment: Moment
  food: string
}

export type updateMealProps = {
  id: UUID
  fecha: string
  time: string
  moment: Moment
  food: string
}

export type changeUserProps = {
  id: string,
  name?: string,
  surname?: string,
  dni?: number,
  edad?: number,
  email?: string,
  usuario?: string,
  phone?: number,
  contactEmergency?: number,
  admin?: boolean,
  pay?: boolean
}