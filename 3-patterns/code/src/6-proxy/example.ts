// real object || secure info
class APIService {
  private userInfo: Map<string, string> = new Map();

  setUserInfo(userName: string): void {
    this.userInfo.set(userName, userName + "some info");
  }

  getUserData(key: string) {
    return this.userInfo.get(key);
  }
}

class ProxyService {
  private userCache: Map<string, string> = new Map();
  private apiService: APIService = new APIService();

  getUserData(key: string) {
    console.log("user info is being asked");
    if (!this.userCache.get(key)) {
      console.log("cache miss");
      const data = this.apiService.getUserData(key);
      this.userCache.set(key, data);
    }
    console.log("user info read");
    return this.userCache.get(key);
  }
}

// client
const proxyObject = new ProxyService();
proxyObject.getUserData("harshit");
