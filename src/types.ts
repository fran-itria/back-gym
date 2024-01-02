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
  age: number;
  email: string;
  phone: number;
  user: string;
  password: string
};

export type ejercicioPropertys = {
  name: string;
  series: string;
  reps: string;
};

export type exercisesPropertys = {
  name: string;
  series: string;
  reps: string;
}[];

export type OneDayrutinaPropertys = {
  routineId: UUID;
  day: {
    series: string,
    reps: string,
    name: string
  }[]
};

export type RoutinePropertys = {
  userId: UUID;
  days: {
    exercises: {
      name: string
      series: string,
      reps: string,
    }[]
  }[]
}

export type changeEjercicioPropertys = {
  id: UUID,
  name?: string,
  series?: number,
  reps?: string,
  loads?: string
}

export type CalentamientoPropertys = RoutinePropertys

export type createOneDayCalentamientoProps = {
  warmUpId: UUID;
  day: {
    series: string,
    reps: string,
    name: string
  }[]
};

type Moment = 'Desayuno' | 'Media mañana' | 'Almuerzo' | 'Merienda' | 'Cena'

export type createMeal = {
  userId: UUID
  date: string
  hour: string
  moment: Moment
  food: string
}

export type updateMealProps = {
  id: UUID
  date: string
  time: string
  moment: Moment
  food: string
}

export type changeUserProps = {
  id: UUID,
  name?: string,
  surname?: string,
  dni?: number,
  age?: number,
  email?: string,
  user?: string,
  phone?: number,
  contactEmergency?: number,
  admin?: boolean,
  pay?: boolean,
  password?: string,
  login?: boolean
}

export type createTraining = {
  userId: UUID
  date: string,
  hour: string,
  exercise: string,
  duration?: string,
  distance?: number
}

export type updateTraining = {
  trainingId: UUID
  date?: string,
  hour?: string,
  exercise?: string,
  duration?: string,
  distance?: number
}

export type createShiftProps = {
  userId: string
  day: string,
  hour: string
}