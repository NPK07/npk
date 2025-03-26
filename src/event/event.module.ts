import { Module } from '@nestjs/common';
import { MongoDBModule } from 'src/mongodb/mongodb.module';

import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  imports: [MongoDBModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
