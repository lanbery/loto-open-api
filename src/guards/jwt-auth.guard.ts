import { ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard as Guard, IAuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ICurrentUser } from 'src/core/interface';

import { PublicApiPropertyName } from 'src/decorators';

@Injectable()
export class JwtAuthGuard extends Guard('jwt') implements IAuthGuard {
  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(private readonly refector: Reflector) {
    super();
  }

  handleRequest<TUser = ICurrentUser>(
    _err: any,
    user: TUser,
    _info: any,
    _context: ExecutionContext,
    _status?: any,
  ): TUser {
    this.logger.debug('Ctx>user>>', user);
    return user;
  }

  public async canActivate(context: ExecutionContext) {
    super.canActivate(context);
    const isPublic = this.refector.getAllAndOverride<boolean>(
      PublicApiPropertyName,
      [context.getHandler(), context.getClass()],
    );
    this.logger.debug('Ctx>>>', isPublic, context.getHandler());
    if (isPublic) return true;

    const { method, user }: Request = context.switchToHttp().getRequest();
    this.logger.debug('Ctx>>>', method, user);
    return true;
  }
}
