import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import Survey from "../models/Survey";

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey> {
  public execute() {
    const survey = getCustomRepository(Survey);
  }
}

export { SurveysRepository };
