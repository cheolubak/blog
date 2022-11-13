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
  private comment_id: string;

  @Column('varchar', { length: 100 })
  private title: string;

  @Column('text')
  private content: string;

  @Column('smallint', { name: 'like_count' })
  private likeCount: number;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  private createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  private updatedAt: Date;

  @ManyToOne((type) => Post, (post) => post.comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'post_id' })
  post: Post;

  @ManyToOne((type) => User, (user) => user.comments, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
