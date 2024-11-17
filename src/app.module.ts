import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

import { AllConfigType } from './config/config.type';
import { AuthAppleModule } from './auth-apple/auth-apple.module';
import { AuthFacebookModule } from './auth-facebook/auth-facebook.module';
import { AuthGoogleModule } from './auth-google/auth-google.module';
import { AuthModule } from './auth/auth.module';
import { AuthTwitterModule } from './auth-twitter/auth-twitter.module';
import { ClientModule } from './client/client.module';
import { FilesModule } from './files/files.module';
import { HeaderResolver } from 'nestjs-i18n';
import { HomeModule } from './home/home.module';
import { I18nModule } from 'nestjs-i18n/dist/i18n.module';
import { InvoiceModule } from './invoice/invoice.module';
import { MailModule } from './mail/mail.module';
import { MailerModule } from './mailer/mailer.module';
import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { SessionModule } from './session/session.module';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { InvoiceItemModule } from './invoice-item/invoice-item.module';
import { CountryModule } from './country/country.module';
import { CompanyModule } from './company/company.module';
import appConfig from './config/app.config';
import appleConfig from './auth-apple/config/apple.config';
import authConfig from './auth/config/auth.config';
import databaseConfig from './database/config/database.config';
import facebookConfig from './auth-facebook/config/facebook.config';
import fileConfig from './files/config/file.config';
import googleConfig from './auth-google/config/google.config';
import mailConfig from './mail/config/mail.config';
import path from 'path';
import twitterConfig from './auth-twitter/config/twitter.config';

const infrastructureDatabaseModule = TypeOrmModule.forRootAsync({
  useClass: TypeOrmConfigService,
  dataSourceFactory: async (options: DataSourceOptions) => {
    return new DataSource(options).initialize();
  },
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        databaseConfig,
        authConfig,
        appConfig,
        mailConfig,
        fileConfig,
        facebookConfig,
        googleConfig,
        twitterConfig,
        appleConfig,
      ],
      envFilePath: ['.env'],
    }),
    infrastructureDatabaseModule,
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService<AllConfigType>) => ({
        fallbackLanguage: configService.getOrThrow('app.fallbackLanguage', {
          infer: true,
        }),
        loaderOptions: { path: path.join(__dirname, '/i18n/'), watch: true },
      }),
      resolvers: [
        {
          use: HeaderResolver,
          useFactory: (configService: ConfigService<AllConfigType>) => {
            return [
              configService.get('app.headerLanguage', {
                infer: true,
              }),
            ];
          },
          inject: [ConfigService],
        },
      ],
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    UsersModule,
    FilesModule,
    AuthModule,
    AuthFacebookModule,
    AuthGoogleModule,
    AuthTwitterModule,
    AuthAppleModule,
    SessionModule,
    MailModule,
    MailerModule,
    HomeModule,
    InvoiceModule,
    ClientModule,
    ProductModule,
    InvoiceItemModule,
    CountryModule,
    CompanyModule,
  ],
})
export class AppModule {}
