import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'blog',
      entities: [__dirname + '/**/*.entity.ts'],
      synchronize: true,
    }),
  ],
  exports: [TypeOrmModule],
})
export class DBModule {}
