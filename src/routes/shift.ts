import { Router } from "express";
import getShiftsController from "../controllers/shift/getShifts";
import createShiftController from "../controllers/shift/createShift";
import updateShiftController from "../controllers/shift/updateShift";
import deleteShiftController from "../controllers/shift/deleteShift";
import getShiftDayController from "../controllers/shift/getShiftsDay";
import getShiftsMonthController from "../controllers/shift/getShiftsMonth";

const shift = Router()

shift.get("", getShiftsController)
shift.get("/:gymId/:day", getShiftDayController)
shift.get("/getShiftsMonth/:gymId/:month", getShiftsMonthController)
shift.post("", createShiftController)
shift.put("", updateShiftController)
shift.delete("/delete/:id", deleteShiftController)

export default shift