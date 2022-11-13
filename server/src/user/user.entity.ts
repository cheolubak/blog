import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserSocial } from './social.enum';
import { Post } from '../post/post.entity';
import { Comment } from '../post/comment.entity';

@Entity('user')
export class User {
  @PrimaryColumn('varchar', { length: 10, name: 'user_id' })
  readonly userId: string;

  @Column('varchar', { length: 100 })
  readonly email: string;

  @Column('varchar', { length: 20 })
  nickname: string;

  @Column('varchar', { length: 50 })
  profile: string;

  @Column({
    type: 'enum',
    enum: UserSocial,
  })
  readonly social: UserSocial;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  readonly createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  readonly updatedAt: Date;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
