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
  admin?: boolean
  photo?: string
};

export type ejercicioPropertys = {
  exercise: number
  dayId: string
  name: string;
  series: string;
  reps: string;
  link?: string
};

export type exercisesPropertys = {
  name: string;
  series: string;
  reps: string;
  link: string
}[];

export type OneDayrutinaPropertys = {
  routineId: UUID;
  day: {
    day: number,
    exercises: {
      series: string,
      reps: string,
      name: string
      link: string
    }[]
  }
};

export type RoutinePropertys = {
  userId: UUID;
  days: {
    day: number
    exercises: {
      name: string
      series: string,
      reps: string,
      link: string
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
    day: number
    exercises: {
      series: string,
      reps: string,
      name: string
      link: string
    }[]
  }
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
  ban?: boolean
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
  GymId: UUID
  day: string,
  hour: string
}

export type updateGymProps = {
  id: UUID,
  name?: string
  linkMp?: string
}

export type createPaymentProps = {
  UserId: UUID
  GymId: UUID
  date: string
  hour: string
  amount: number
}

export type updatePaymentProps = {
  id: UUID,
  date?: string
  hour?: string
  amount?: string
}