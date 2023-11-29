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
  userId: string;
  dias: {
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
