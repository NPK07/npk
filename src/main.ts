import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { EventModule } from './event/event.module';
import { MemberModule } from './member/member.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Events API')
    .setDescription('The Events API description')
    .setVersion('1.0')
    .addTag('Events')
    .addTag('Members')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    include: [EventModule, MemberModule],
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
