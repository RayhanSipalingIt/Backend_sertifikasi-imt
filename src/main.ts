import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
const app = await NestFactory.create(AppModule);

// === ENABLE CORS ===
app.enableCors({
origin: '*',   // izinkan semua origin (bisa diganti jika perlu)
methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
allowedHeaders: '*',
});

app.useGlobalPipes(
new ValidationPipe({
whitelist: false,
transform: true,
forbidNonWhitelisted: true,
}),
);

await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
