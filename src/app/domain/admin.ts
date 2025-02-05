import * as dotenv from "dotenv";
import { AstrologicalTermResponse } from "../interfaces/home";
import ASTROLOGICAL_DICTIONARY from "../models/astrology";
import { Op } from "sequelize";
import DREAM_DICTIONARY from "../models/dream";
import ZODIAC_SIGN from "../models/zodiac-sign";
dotenv.config();

export class AdminBLL {
  /**
   * This method is used to Add Astrological Term
   *
   * @return {*}  List of Astrological Term
   * @memberof AdminBLL
   */
  async addAstrologicalDictionary(req): Promise<AstrologicalTermResponse[]> {
    try {
      const astrologicalTerm: any = await ASTROLOGICAL_DICTIONARY.create({
        TermName: req.title,
        Description: req.desc,
      });
      return astrologicalTerm;
    } catch (error) {
      throw new Error(
        `method : addAstrologicalDictionary class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to delete Astrological Term by ID
   *
   * @return {*}  List of Astrological Term
   * @memberof AdminBLL
   */
  async deleteAstrologicalTermByID(
    termId: string
  ): Promise<AstrologicalTermResponse[]> {
    try {
      const astrologicalTerm: any = await ASTROLOGICAL_DICTIONARY.update(
        { DeletedAt: new Date(), IsActive: 0 },
        { where: { TermID: termId } }
      );
      return astrologicalTerm;
    } catch (error) {
      throw new Error(
        `method : deleteAstrologicalTermByID class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to update Astrological Term by ID
   *
   * @return {*}  List of Astrological Term
   * @memberof AdminBLL
   */
  async updateAstrologicalTermByID(
    termId: string,
    req: any
  ): Promise<AstrologicalTermResponse[]> {
    try {
      const astrologicalTerm: any = await ASTROLOGICAL_DICTIONARY.update(
        { UpdatedAt: new Date(), TermName: req.title, Description: req.desc },
        { where: { TermID: termId } }
      );
      return astrologicalTerm;
    } catch (error) {
      throw new Error(
        `method : updateAstrologicalTermByID class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to Fetch Astrological Term
   *
   * @return {*}  List of Astrological Term
   * @memberof AdminBLL
   */
  async fetchAstrologicalDictionary(): Promise<AstrologicalTermResponse[]> {
    try {
      const astrologicalTerms: any = await ASTROLOGICAL_DICTIONARY.findAll({
        raw: true,
        attributes: [
          ["TermID", "id"],
          ["TermName", "name"],
          ["Description", "desc"],
          ["CreatedAt", "dateAdded"],
        ],
        where: {
          IsActive: {
            [Op.eq]: 1,
          },
        },
      });
      return astrologicalTerms;
    } catch (error) {
      throw new Error(
        `method : fetchAstrologicalDictionary class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to Fetch Astrological Term by ID
   *
   * @return {*}  List of Astrological Term
   * @memberof AdminBLL
   */
  async fetchAstrologicalTermById(
    termId: string
  ): Promise<AstrologicalTermResponse> {
    try {
      const astrologicalTerm: any = await ASTROLOGICAL_DICTIONARY.findOne({
        raw: true,
        attributes: [
          ["TermName", "name"],
          ["Description", "desc"],
        ],
        where: {
          TermID: {
            [Op.eq]: termId,
          },
        },
      });
      return astrologicalTerm;
    } catch (error) {
      throw new Error(
        `method : fetchAstrologicalTermById class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to Add Dream Term
   *
   * @return {*}  List of Astrological Term
   * @memberof AdminBLL
   */
  async addDreamDictionary(req): Promise<AstrologicalTermResponse[]> {
    try {
      const dreamTerm: any = await DREAM_DICTIONARY.create({
        TermName: req.title,
        Description: req.desc,
      });
      return dreamTerm;
    } catch (error) {
      throw new Error(
        `method : addDreamDictionary class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to delete Dream Term by ID
   *
   * @return {*}  List of Dream Term
   * @memberof AdminBLL
   */
  async deleteDreamTermByID(
    termId: string
  ): Promise<AstrologicalTermResponse[]> {
    try {
      const dreamTerm: any = await DREAM_DICTIONARY.update(
        { DeletedAt: new Date(), IsActive: 0 },
        { where: { TermID: termId } }
      );
      return dreamTerm;
    } catch (error) {
      throw new Error(
        `method : deleteDreamTermByID class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to update Dream Term by ID
   *
   * @return {*}  List of Astrological Term
   * @memberof AdminBLL
   */
  async updateDreamTermByID(
    termId: string,
    req: any
  ): Promise<AstrologicalTermResponse[]> {
    try {
      const astrologicalTerm: any = await DREAM_DICTIONARY.update(
        { UpdatedAt: new Date(), TermName: req.title, Description: req.desc },
        { where: { TermID: termId } }
      );
      return astrologicalTerm;
    } catch (error) {
      throw new Error(
        `method : updateDreamTermByID class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to Fetch Dream Term
   *
   * @return {*}  List of Dream Term
   * @memberof AdminBLL
   */
  async fetchDreamDictionary(): Promise<AstrologicalTermResponse[]> {
    try {
      const dreamTerms: any = await DREAM_DICTIONARY.findAll({
        raw: true,
        attributes: [
          ["TermID", "id"],
          ["TermName", "name"],
          ["Description", "desc"],
          ["CreatedAt", "dateAdded"],
        ],
        where: {
          IsActive: {
            [Op.eq]: 1,
          },
        },
      });
      return dreamTerms;
    } catch (error) {
      throw new Error(
        `method : fetchDreamDictionary class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to Fetch Dream Term by ID
   *
   * @return {*}  List of Dream Term
   * @memberof AdminBLL
   */
  async fetchDreamTermById(
    termId: string
  ): Promise<AstrologicalTermResponse[]> {
    try {
      const dreamTerm: any = await DREAM_DICTIONARY.findOne({
        raw: true,
        attributes: [
          ["TermName", "name"],
          ["Description", "desc"],
        ],
        where: {
          TermID: {
            [Op.eq]: termId,
          },
        },
      });
      return dreamTerm;
    } catch (error) {
      throw new Error(
        `method : fetchDreamTermById class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to Add Zodiac Sign
   *
   * @return {*}  List of Zodiac Sign
   * @memberof AdminBLL
   */
  async addZodiacSign(req): Promise<AstrologicalTermResponse[]> {
    try {
      const zodiacSign: any = await ZODIAC_SIGN.create({
        ZodiacSign: req.title,
        Description: req.desc,
      });
      return zodiacSign;
    } catch (error) {
      throw new Error(`method : addZodiacSign class: AdminBLL Error: ${error}`);
    }
  }

  /**
   * This method is used to delete Zodiac Sign by ID
   *
   * @return {*}  List of Zodiac Sign
   * @memberof AdminBLL
   */
  async deleteZodiacSignByID(
    termId: string
  ): Promise<AstrologicalTermResponse[]> {
    try {
      const zodiacSign: any = await ZODIAC_SIGN.update(
        { DeletedAt: new Date(), IsActive: 0 },
        { where: { ZodiacSignID: termId } }
      );
      return zodiacSign;
    } catch (error) {
      throw new Error(
        `method : deleteZodiacSignByID class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to update Zodiac Sign by ID
   *
   * @return {*}  List of Zodiac Sign
   * @memberof AdminBLL
   */
  async updateZodiacSignByID(
    termId: string,
    req: any
  ): Promise<AstrologicalTermResponse[]> {
    try {
      const zodiacSign: any = await ZODIAC_SIGN.update(
        { UpdatedAt: new Date(), ZodiacSign: req.title, Description: req.desc },
        { where: { ZodiacSignID: termId } }
      );
      return zodiacSign;
    } catch (error) {
      throw new Error(
        `method : updateZodiacSignByID class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to Fetch Zodiac Sign
   *
   * @return {*}  List of Zodiac Sign
   * @memberof AdminBLL
   */
  async fetchZodiacSign(): Promise<AstrologicalTermResponse[]> {
    try {
      const zodiacSign: any = await ZODIAC_SIGN.findAll({
        raw: true,
        attributes: [
          ["ZodiacSignID", "id"],
          ["ZodiacSign", "name"],
          ["Description", "desc"],
          ["CreatedAt", "dateAdded"],
        ],
        where: {
          IsActive: {
            [Op.eq]: 1,
          },
        },
      });
      return zodiacSign;
    } catch (error) {
      throw new Error(
        `method : fetchZodiacSign class: AdminBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to Fetch Zodiac Sign by ID
   *
   * @return {*}  List of Zodiac Sign
   * @memberof AdminBLL
   */
  async fetchZodiacSignById(termId: string): Promise<AstrologicalTermResponse> {
    try {
      const zodiacSign: any = await ZODIAC_SIGN.findOne({
        raw: true,
        attributes: [
          ["ZodiacSign", "name"],
          ["Description", "desc"],
        ],
        where: {
          ZodiacSignID: {
            [Op.eq]: termId,
          },
        },
      });
      return zodiacSign;
    } catch (error) {
      throw new Error(
        `method : fetchZodiacSignById class: AdminBLL Error: ${error}`
      );
    }
  }
}
