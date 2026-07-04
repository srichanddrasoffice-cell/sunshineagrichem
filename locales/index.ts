import { en } from "./en/index";
import { hi } from "./hi/index";
import { te } from "./te/index";
import type { DictionaryMap } from "@/types/dictionary";

export const dictionaries: DictionaryMap = {
  en,
  te,
  hi,
};

export const translations = dictionaries;
