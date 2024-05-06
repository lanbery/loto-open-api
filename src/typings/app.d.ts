type LotoAppListener = {
  name: string;
  url: string;
};

type LocaleType = 'enUS' | 'zhCN';

type BizErrorOptionType = {
  locale?: LocaleType;
  error?: string | string[];
} & Record<string, string | number>;
