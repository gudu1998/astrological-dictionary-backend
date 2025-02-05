import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { eErrorMessage } from "../enum/error-message.enum";
import ASTROLOGICAL_USER from "../models/user";
dotenv.config();
export class UserBLL {
  /**
   * This method is used to login user
   *
   * @param {SigninUserRequest} signinUserRequest
   * @return {*}  {Promise<{ status: boolean; message: string; token?: string }>}
   * @memberof UserBLL
   */
  async signin(signinUserRequest): Promise<any> {
    try {
      let { email, password } = signinUserRequest;
      const existingUser = await ASTROLOGICAL_USER.findOne({
        where: { Email: email },
      });

      if (!!existingUser) {
        const payload = {
          userId: existingUser.UserID,
        };

        if (existingUser.Password === password) {
          const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "1d",
          });
          return {
            status: true,
            message: "Successfully logged in!!",
            token: token,
            userName: existingUser.UserName,
          };
        } else
          return {
            status: false,
            message: "Invalid password. Authentication failed.",
          };
      } else {
        return {
          status: false,
          message: "No such user found. Please check your email.",
        };
      }
    } catch (error) {
      throw eErrorMessage.ServerError;
    }
  }
}
