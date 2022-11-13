import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from './comment.entity';

@Entity('post')
export class Post {
  @PrimaryColumn('varchar', { length: 10 })
  private post_id: string;

  @Column('varchar', { length: 50 })
  private title: string;

  @Column('text')
  private content: string;

  @Column({ type: 'smallint', name: 'comment_count' })
  private commentCount: number;

  @Column({ type: 'smallint', name: 'like_count' })
  private likeCount: number;

  @Column('varchar', { length: 200, array: true })
  private tags: string[];

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  private createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  private updatedAt: Date;

  @ManyToOne((type) => User, (user) => user.posts, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany((type) => Comment, (comment) => comment.post)
  comments: Comment[];
}
