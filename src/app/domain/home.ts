import * as dotenv from "dotenv";
import { AstrologicalTermResponse } from "../interfaces/home";
import ASTROLOGICAL_DICTIONARY from "../models/astrology";
import {  Op } from "sequelize";
import DREAM_DICTIONARY from "../models/dream";
dotenv.config();

export class HomeBLL {
  /**
   * This method is used to Fetch Astrological Term by Letter
   *
   * @return {*}  List of Astrological Term
   * @memberof HomeBLL
   */
  async fetchAstrologicalTermByLetter(
    letter: string
  ): Promise<AstrologicalTermResponse[]> {
    try {
      const astrologicalTerms: any = await ASTROLOGICAL_DICTIONARY.findAll({
        raw: true,
        attributes: [
          ["TermName", "name"],
          ["Description", "desc"],
        ],
        where: {
          TermName: {
            [Op.iLike]: letter + "%",
          },
        }
      });
      return astrologicalTerms;
    } catch (error) {
      throw new Error(
        `method : fetchAstrologicalTermByAlphabet class: HomeBLL Error: ${error}`
      );
    }
  }

  /**
   * This method is used to Fetch Dictionary Term by Letter
   *
   * @return {*}  List of Astrological Term
   * @memberof HomeBLL
   */
  async fetchDictionaryTermByLetter(
    letter: string
  ): Promise<AstrologicalTermResponse[]> {
    try {
      const dreamTerms: any = await DREAM_DICTIONARY.findAll({
        raw: true,
        attributes: [
          ["TermName", "name"],
          ["Description", "desc"],
        ],
        where: {
          TermName: {
            [Op.iLike]: letter + "%",
          },
        }
      });
      return dreamTerms;
    } catch (error) {
      throw new Error(
        `method : fetchDictionaryTermByLetter class: HomeBLL Error: ${error}`
      );
    }
  }
}
