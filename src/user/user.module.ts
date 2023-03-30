import { CacheModule, Module } from '@nestjs/common';
import { FeishuService } from './feishu/feishu.service';
import { FeishuController } from './feishu/feishu.controller';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    CacheModule.register(),
  ],
  controllers: [
    FeishuController,
    UserController
  ],
  providers: [FeishuService, UserService],
})
export class UserModule { }