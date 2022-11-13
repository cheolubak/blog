import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from './post.entity';
import { User } from '../user/user.entity';

@Entity('comment')
export class Comment {
  @PrimaryColumn('varchar', { length: 10 })
  readonly commentId: string;

  @Column('varchar', { length: 100 })
  title: string;

  @Column('text')
  content: string;

  @Column('smallint', { name: 'like_count' })
  likeCount: number;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  readonly createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  readonly updatedAt: Date;

  @ManyToOne(() => Post, (post) => post.comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'post_id' })
  readonly post: Post;

  @ManyToOne(() => User, (user) => user.comments, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'user_id' })
  readonly user: User;

  get id(): string {
    return this.commentId;
  }
}
