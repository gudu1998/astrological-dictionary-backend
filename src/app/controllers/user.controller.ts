import { Request, Response } from "express";
import { eErrorMessage } from "../enum/error-message.enum";
import { eStatusCode } from "../enum/status-code.enum";
import { UserBLL } from "../domain/user";

export const signin = async (req: Request, res: Response): Promise<any> => {
  try {
    if (!Object.keys(req.body).length) {
      return res
        .status(eStatusCode.BAD_REQUEST)
        .send(eErrorMessage.FieldContent);
    }
    const result = await new UserBLL().signin(req.body);
    if (result.status) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.UNAUTHORIZED).send(result);
    }
  } catch (error) {
    return res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};
