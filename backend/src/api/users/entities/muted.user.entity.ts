/* eslint-disable @typescript-eslint/no-unused-vars */
import Channel from 'src/api/channels/entities/channel.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './user.entity';

@Entity()
class MutedUser {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne((type) => User, (user) => user.muteChannels, {
    // primary: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  public user: User;

  @ManyToOne((type) => Channel, (channel) => channel.mutes, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  // @JoinTable()
  public channel: Channel;

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  public date: Date;

  @Column({ type: 'time', nullable: true })
  public time?: string;
}

export default MutedUser;
