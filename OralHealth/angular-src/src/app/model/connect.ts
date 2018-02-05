export class Connect {
    private static hostUrl = 'https://bookhosting.000webhostapp.com';
    public static readonly USER_TOKEN = 'user_token';
    static getHostUrl():string {
      return this.hostUrl;
    }
  }