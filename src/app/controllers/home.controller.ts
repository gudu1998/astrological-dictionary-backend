import { Request, Response } from "express";
import { HomeBLL } from "../domain/home";
import { eErrorMessage } from "../enum/error-message.enum";
import { eStatusCode } from "../enum/status-code.enum";

export const fetchAstrologicalTermByLetter = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const letter: any = req.params["letter"];
    const result = await new HomeBLL().fetchAstrologicalTermByLetter(letter);
    if (result.length) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const fetchDictionaryTermByLetter = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const letter: any = req.params["letter"];
    const result = await new HomeBLL().fetchDictionaryTermByLetter(letter);
    if (result.length) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};
