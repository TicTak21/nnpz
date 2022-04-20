import { ELangs } from './libs/shared/types/src';

export const availableLangs: ELangs[] = [
  ELangs.english,
  ELangs.spanish,
  ELangs.russian,
  ELangs.chinese,
];

export const scopeLoader = (
  importer: CallableFunction,
  root = 'assets/i18n',
) => {
  return availableLangs.reduce(
    (acc: Record<string, CallableFunction>, lang: ELangs) => {
      acc[lang] = () => importer(lang, root);
      return acc;
    },
    {},
  );
};
