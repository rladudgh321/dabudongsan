import { Injectable } from '@nestjs/common';

@Injectable()
export class LandService {
  landPost({
    buyType,
    floor,
    room,
    title,
    description,
    eumpmeon,
    lia,
    address,
    filename,
  }) {
    return 'hi';
  }
}
