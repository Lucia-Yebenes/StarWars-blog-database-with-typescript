import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,OneToMany } from "typeorm";
import {Favorite} from "./Favorite"
@Entity()
export class Planets extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    img: string;
    @Column()
    diameter: number;
    @Column()
    rotation: string;
    @Column()
    orbital: number;
    @Column()
    gravity: string;
    @Column()
    population: number;
    @Column()
    climate: string;
    @Column()
    terrain: string;
    @Column()
    surfaceWater: string;
    @Column()
    created: number;
    @Column()
    edited: number;
    @OneToMany(() => Favorite, favorite => favorite.planets)
    favorites: Favorite[];
}