import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from './comment.entity';

@Entity('post')
export class Post {
  @PrimaryColumn('varchar', { length: 10, name: 'post_id' })
  readonly postId: string;

  @Column('varchar', { length: 50 })
  title: string;

  @Column('text')
  content: string;

  @Column({ type: 'smallint', name: 'comment_count' })
  commentCount: number;

  @Column({ type: 'smallint', name: 'like_count' })
  likeCount: number;

  @Column('varchar', { length: 200, array: true })
  tags: string[];

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  readonly createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  readonly updatedAt: Date;

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'user_id' })
  readonly user: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  get id(): string {
    return this.postId;
  }
}
