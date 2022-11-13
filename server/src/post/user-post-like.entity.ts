import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Post } from './post.entity';

@Entity('user_post_like')
export class UserPostLike {
  @PrimaryColumn('varchar', { length: 10, name: 'user_id' })
  readonly userId: string;

  @PrimaryColumn('varchar', { length: 10, name: 'post_id' })
  readonly postId: string;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  readonly user: User;

  @ManyToOne(() => Post, (post) => post.postId)
  @JoinColumn({ name: 'post_id' })
  readonly post: Post;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  readonly createdAt: Date;
}
