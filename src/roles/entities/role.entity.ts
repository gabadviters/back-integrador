import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("role")
export class Role {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column("text")
    role:string

    @OneToMany(()=> User, (user)=> user.role)
    users:User[]
}
