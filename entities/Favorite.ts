import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import {Character} from "./Character"
import {Planets} from "./Planets"

@Entity()
export class Favorite extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
   
    @ManyToOne(() => Character, character => character.favorites)
    character: Character;

    @ManyToOne(() => Planets, planets => planets.favorites)
    planets: Character;


}