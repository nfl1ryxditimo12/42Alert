import { EntityRepository, Repository } from "typeorm";
import { Exams } from "@entities/exams";
import { eventType } from "eventType";

@EntityRepository(Exams)
export class ExamRepo extends Repository<Exams> {
    findOneExam = () => {
        return this.createQueryBuilder("exams").select().orderBy("exams.id", "DESC").limit(1).getOne();
    };

    createExam = async (exam: eventType) => {
        await this.createQueryBuilder("exams")
            .insert()
            .into(Exams)
            .values({
                id: exam.id,
                name: exam.name,
                location: exam.location.length > 0 ? exam.location : null,
                max_people: exam.max_people !== null ? exam.max_people : null,
                begin_at: exam.begin_at,
                end_at: exam.end_at,
                created_at: exam.created_at,
            })
            .execute();
    };

    deleteExam = (id: number) => {
        this.createQueryBuilder("exams").delete().where("exams.id = :id", { id: id }).execute();
    };
}
