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
  private userId: string;

  @Column('varchar', { length: 100 })
  private email: string;

  @Column('varchar', { length: 20 })
  private nickname: string;

  @Column('varchar', { length: 50 })
  private profile: string;

  @Column({
    type: 'enum',
    enum: UserSocial,
  })
  social: UserSocial;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  private createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  private updatedAt: Date;

  @OneToMany((type) => Post, (post) => post.user)
  posts: Post[];

  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[];
}
