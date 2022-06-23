import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HitsModule } from './hits/hits.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mongo-user:MongoPass@cluster0.oaqjf.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    HitsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
