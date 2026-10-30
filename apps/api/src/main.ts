import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { configureApp } from './configure-app'

const app = configureApp(await NestFactory.create(AppModule))
await app.listen(Number(process.env.API_PORT ?? 3000))
