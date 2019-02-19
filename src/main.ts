import { ApplicationContext } from './app.context';
import { ConfigService } from './modules/config/config.service';

async function bootstrap() {
  const app = await ApplicationContext();
  await app.listen(app.get(ConfigService).getInt('APP_PORT'));
}

bootstrap();
