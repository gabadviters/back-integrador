
import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column("text")
    username:string

    @Column("text")
    email:string

    @Column("text")
    password:string

    @ManyToOne(()=> Role, (role)=> role.users)
    role:Role

}
