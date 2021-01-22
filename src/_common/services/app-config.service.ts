import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

@Injectable()
export class AppConfigService {
  private _database: Partial<SqlServerConnectionOptions>;

  constructor(private configService: ConfigService) {
    this._database = {
      type: 'mssql',
      host: this.configService.get<string>('MSSQL_HOST', ''),
      port: parseInt(this.configService.get<string>('MSSQL_PORT', ''), 10),
      username: this.configService.get<string>('MSSQL_USER', ''),
      password: this.configService.get<string>('MSSQL_PASSWORD', ''),
      database: this.configService.get<string>('MSSQL_DBNAME', '')
    } as unknown as Partial<SqlServerConnectionOptions>;
  }

  get database(): Partial<SqlServerConnectionOptions> {
    return this._database;
  }
}
