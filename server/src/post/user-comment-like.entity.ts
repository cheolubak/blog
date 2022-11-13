import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from './comment.entity';

@Entity('user_comment_like')
export class UserCommentLike {
  @PrimaryColumn('varchar', { length: 10, name: 'user_id' })
  readonly userId: string;

  @PrimaryColumn('varchar', { length: 10, name: 'comment_id' })
  readonly commentId: string;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  readonly user: User;

  @ManyToOne(() => Comment, (comment) => comment.commentId)
  @JoinColumn({ name: 'comment_id' })
  readonly comment: Comment;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  readonly createdAt: Date;
}
