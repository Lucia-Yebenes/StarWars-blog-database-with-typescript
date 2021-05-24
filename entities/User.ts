import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from "typeorm";
import { Favorite } from "./Favorite";
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    userName: string;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    email: string

    @ManyToMany(() => Favorite)
    @JoinTable()
    favorites: Favorite[];
}
