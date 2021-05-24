import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,OneToMany } from "typeorm";
import {Favorite} from "./Favorite"
@Entity()
export class Character extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    img: string;
    @Column()
    height: number;
    @Column()
    mass: number;
    @Column()
    hairColor: string;
    @Column()
    skinColor: string;
    @Column()
    eyeColor: string;
    @Column()
    birthYear: number;
    @Column()
    gender: string;
    @OneToMany(() => Favorite, favorite => favorite.character)
    favorites: Favorite[];
}