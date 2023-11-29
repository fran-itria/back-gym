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
  series: number;
  repeticiones: string;
};

export type rutinaPropertys = {
  userId: string;
  dias: {
    series: string,
    repeticiones: string,
    ejercicioName: string
  }[]
};
