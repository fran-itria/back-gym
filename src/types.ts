import { Request, Response } from "express";

export type request = Request
export type response = Response

export type userPrpertys = {
    gymName: string,
    name: string,
    surname: string,
    contactEmergency: number,
    dni: number,
    edad: number,
    email: string,
    phone: number,
    usuario: string
}