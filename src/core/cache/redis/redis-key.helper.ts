import { RedisKeyModuleEnum } from './redis-key.enum';

const Splitor = ':';

export class RedisKeyHelper {
  static buildBDCwxaiAccessTokenKey(appId: string): string {
    return buildRedisKey(RedisKeyModuleEnum.bcewxai, 'token', appId);
  }
}

export function buildRedisKey(...args: Array<string | number>): string {
  return args.filter((v) => v !== undefined && ('' + v).length).join(Splitor);
}
