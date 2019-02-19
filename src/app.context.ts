import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let context: NestApplication = null;
export const ApplicationContext = async () => {
  if (!context) {
    context = await NestFactory.create(AppModule) as NestApplication;
  }
  return context;
};
