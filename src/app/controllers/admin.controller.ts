import { Request, Response } from "express";
import { eErrorMessage } from "../enum/error-message.enum";
import { eStatusCode } from "../enum/status-code.enum";
import { AdminBLL } from "../domain/admin";

export const addAstrologicalDictionary = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const result = await new AdminBLL().addAstrologicalDictionary(req.body);
    if (result) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res
        .status(eStatusCode.BAD_REQUEST)
        .send(eErrorMessage.FieldContent);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const deleteAstrologicalTermByID = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id: any = req.params["id"];
    const result = await new AdminBLL().deleteAstrologicalTermByID(id);
    if (result) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const updateAstrologicalTermByID = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id: any = req.params["id"];
    const result = await new AdminBLL().updateAstrologicalTermByID(
      id,
      req.body
    );
    if (result) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const fetchAstrologicalDictionary = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const result = await new AdminBLL().fetchAstrologicalDictionary();
    if (result.length) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const fetchAstrologicalTermById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id: any = req.params["id"];
    const result = await new AdminBLL().fetchAstrologicalTermById(id);
    if (result) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const addDreamDictionary = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const result = await new AdminBLL().addDreamDictionary(req.body);
    if (result) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res
        .status(eStatusCode.BAD_REQUEST)
        .send(eErrorMessage.FieldContent);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const deleteDreamTermByID = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id: any = req.params["id"];
    const result = await new AdminBLL().deleteDreamTermByID(id);
    if (result) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const updateDreamTermByID = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id: any = req.params["id"];
    const result = await new AdminBLL().updateDreamTermByID(id, req.body);
    if (result) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const fetchDreamDictionary = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const result = await new AdminBLL().fetchDreamDictionary();
    if (result.length) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const fetchDreamTermById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id: any = req.params["id"];
    const result = await new AdminBLL().fetchDreamTermById(id);
    if (result) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const addZodiacSign = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const result = await new AdminBLL().addZodiacSign(req.body);
    if (result) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res
        .status(eStatusCode.BAD_REQUEST)
        .send(eErrorMessage.FieldContent);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const deleteZodiacSignByID = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id: any = req.params["id"];
    const result = await new AdminBLL().deleteZodiacSignByID(id);
    if (result) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const updateZodiacSignByID = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id: any = req.params["id"];
    const result = await new AdminBLL().updateZodiacSignByID(id, req.body);
    if (result) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const fetchZodiacSign = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const result = await new AdminBLL().fetchZodiacSign();
    if (result.length) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};

export const fetchZodiacSignById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id: any = req.params["id"];
    const result = await new AdminBLL().fetchZodiacSignById(id);
    if (result) {
      return res.status(eStatusCode.OK).send(result);
    } else {
      return res.status(eStatusCode.NOT_FOUND).send(eErrorMessage.NoRecord);
    }
  } catch (error) {
    res.status(eStatusCode.INTERNAL_SERVER_ERROR).send(`${error}`);
  }
};
