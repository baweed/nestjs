import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TaskService {

    private readonly logger = new Logger(TaskService.name);

    @Cron(CronExpression.EVERY_30_SECONDS)
    handleCron() {
        this.logger.log('Cron job executed every 30 sec');
    }

    @Interval(10000)
    handleInterval() {
        this.logger.log('Interval job executed every 10 sec');
    }


    @Timeout(5000)
    handleTimeout() {
        this.logger.log('Timeout job executed after 5 sec');
    }
}
