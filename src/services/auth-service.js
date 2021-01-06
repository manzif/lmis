import * as jwt from "jsonwebtoken";
import * as moment from "moment";

class AuthService {
    saveObject(object) {
        localStorage.setItem("object", JSON.stringify(object));
    }

    getObject() {
        return JSON.parse(localStorage.getItem("object"));
    }

    checkSession() {
        return this.getObject() === null ? false : true;
    }

    getToken() {
        if (this.checkSession()) {
            return this.getObject().tokens;
        }
    }

    decode(token) {
        return jwt.decode(token);
    }

    invalidateUser() {
        localStorage.removeItem("object");
    }

    getExpiration(token) {
        const exp = this.decode(token).exp;
        return moment.unix(exp);
    }

    isValid(token) {
        return moment().isBefore(this.getExpiration(token));
    }

    isAuthenticated() {
        if (this.checkSession()) {
            const token = this.getToken().access_token;
            return token && this.isValid(token) ? true : false;
        }
    }
}

export default new AuthService();