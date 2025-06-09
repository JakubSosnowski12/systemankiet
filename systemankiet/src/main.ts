import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- KONFIGURACJA SWAGGERA ---
  const config = new DocumentBuilder()
    .setTitle('Survey & Voting API')
    .setDescription('API do tworzenia ankiet i zbierania głosów')
    .setVersion('1.0')
    // jeżeli używasz JWT, odkomentuj linię:
    // .addBearerAuth()  
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // --------------------------------

  await app.listen(3000);
  console.log('Server: http://localhost:3000');
  console.log('Swagger: http://localhost:3000/api');
}
bootstrap();
