export class AuthService {
  loggedIn = true;

  isAuthenticated() {
    console.log(`TRACER AuthService checking auth... mock delay`);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1200);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
