import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://localhost:9000/";
    public LoginUrl: string = "login/";
    public ServerWithLoginUrl = this.Server + this.LoginUrl;
}