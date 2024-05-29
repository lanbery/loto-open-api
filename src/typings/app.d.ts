type LotoAppListener = {
  name: string;
  url: string;
};

type LocaleType = 'enUS' | 'zhCN';

type BizErrorOptionType = {
  locale?: LocaleType;
  error?: string | string[];
} & Record<string, string | number>;

type IAccessBase = {
  id: number;
};

type ITokenBase = {
  iat: number;
  exp: number;
  iss: string;
  aud: string; // 受众
  sub: string; // 主题
};

type JwtAccessPayload = {
  username: string;
  version: string;
  platform: number;
  state: string;
} & IAccessBase &
  Partial<ITokenBase>;

type SystemRegionType = {
  id: number;
  pid: number;
  label: string;
  value: string;
  code: string;
  extra?: Record<string, any>;
  sortno: number;
  status: boolean;
  remark: string;
};

type SystemRegionExType = SystemRegionType & {
  level: number;
};

type RegionTreeType = {
  id: number;
  label: string;
  value: string;
  code: string;
  pcode?: string;
  status?: boolean;
  sortno: number;
  extra?: Record<string, any>;
  children?: Array<RegionTreeType>;
  isLeaf?: boolean;
};

type RegionTreeExType = RegionTreeType & {
  pid: number;
  oid: number;
  opid: number;
};

interface SelectorOptionType<T = string | number> {
  label: string;
  value: T;
  disabled?: boolean;
  actived?: boolean;
  icon?: string;
  extra?: Record<string, any>;
}
