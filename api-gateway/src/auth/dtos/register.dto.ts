import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

enum Role { USER = 'user', ADMIN = 'admin', SELLER = 'seller' }

export class RegisterDto {
    @ApiProperty({
        example: 'john.doe@example.com',
        description: 'User email address',
    })
    @IsEmail()
    email!: string;

    @ApiProperty({
        example: 'password123',
        description: 'User password',
    })
    @IsString()
    @MinLength(6)
    password!: string;
    
    @ApiProperty({
        example: 'John',
        description: 'User first name',
    })
    @IsString()
    firstName!: string;

    @ApiProperty({
        example: 'Doe',
        description: 'User last name',
    })
    @IsString()
    lastName!: string;

    @ApiProperty({
        example: 'user',
        description: 'User role (optional)',
        required: false,
        enum: Role,
    })
    @IsOptional()
    @IsString()
    role?: Role = Role.USER;
}