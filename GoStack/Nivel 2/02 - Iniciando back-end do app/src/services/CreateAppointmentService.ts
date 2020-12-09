import { startOfHour } from 'date-fns'
import { getCustomRepository } from "typeorm";
import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository';
/**
 * [x] Recebendo das informações
 * [/] Tratativa de erros/excecções
 * [/] Acesso ao repositório
 */

interface Request {
  provider: string;
  date: Date
}

/**
 * Separation of Concerns
 * Dependenccy Inversion
 */

class CreateAppointmentService {

  public async execute({ date, provider }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    appointmentsRepository.create()
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate)

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked')
    }

    const appointment = appointmentsRepository.create({ provider, date: appointmentDate })

    await appointmentsRepository.save(appointment)
    return appointment;
  }
}

export default CreateAppointmentService