import { WebClient } from "@slack/web-api";
import { getCustomRepository } from "typeorm";

import env from "@modules/env";
import content from "@modules/content";
import { EventRepo } from "@repository/event.repository";
import { ExamRepo } from "@repository/exam.repository";
import { eventType } from "eventType";

const slack = (event: eventType, flag: string) => {
    const web = new WebClient(env.slackConfig.token);
    const channelName = env.slackConfig.channel;
    const eventRepo = getCustomRepository(EventRepo);
    const examRepo = getCustomRepository(ExamRepo);

    web.chat
        .postMessage({
            username: "42Alert",
            channel: channelName,
            text: content(event, flag),
        })
        .then(() =>
            console.log(
                flag === "event"
                    ? `\x1b[31m[Slack || Event] - ${event.name}\x1b[0m`
                    : `\x1b[31m[Slack || Exam] - ${event.name}\x1b[0m`
            )
        )
        .catch((err) => {
            flag === "event" ? eventRepo.deleteEvent(event.id) : examRepo.deleteExam(event.id);
            console.log(err);
            console.log(`\x1b[31m[Slack] - ${event.id} 이벤트 등록 실패\x1b[0m`);
        });
};

export default slack;
