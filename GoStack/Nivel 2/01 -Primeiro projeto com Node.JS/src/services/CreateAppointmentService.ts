import { startOfHour } from 'date-fns'
import Appointment from '../models/Appointment'
import AppointmentRepository from '../repositories/AppointmentsRepository';

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

  private appointmentsRepository: AppointmentRepository;

  constructor(appointmentsRepository: AppointmentRepository) {
    this.appointmentsRepository = appointmentsRepository
  }

  public execute({ date, provider }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(appointmentDate)

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked')
    }

    const appointment = this.appointmentsRepository.create({ provider, date: appointmentDate })

    return appointment;
  }
}

export default CreateAppointmentService