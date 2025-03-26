import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://project_admin:%2Aproject_admin%40123@cluster0.nkrrf.mongodb.net/graduation_project',
    ),
    EventModule,
    MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
