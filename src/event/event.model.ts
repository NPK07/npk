import { ApiProperty } from '@nestjs/swagger';

export class Event {
  @ApiProperty({ description: 'The unique identifier of the event' })
  id: string;

  @ApiProperty({ description: 'The title of the event' })
  title: string;

  @ApiProperty({ description: 'The detailed description of the event' })
  description: string;

  @ApiProperty({ description: 'The date when the event takes place' })
  date: Date;

  @ApiProperty({ description: 'The location where the event takes place' })
  location: string;

  @ApiProperty({ description: 'The URL of the event image' })
  image: string;

  @ApiProperty({ description: 'The timestamp when the event was created' })
  createdAt: Date;

  @ApiProperty({ description: 'The timestamp when the event was last updated' })
  updatedAt: Date;
}
