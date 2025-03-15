import { Injectable } from '@nestjs/common';

import { Event } from './event.model';

@Injectable()
export class EventService {
  findAll(size?: number, page?: number) {
    return {
      size,
      page,
    };
  }
  findOne(id: string) {
    return {
      id,
    };
  }
  create(event: Event) {
    return {
      event,
    };
  }
  update(id: string, event: Event) {
    return {
      id,
      event,
    };
  }
  delete(id: string) {
    return {
      id,
    };
  }
}
