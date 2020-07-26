import { RegisterForm } from "../infrastructure/login-panel/register.form";
import { CreateUserDto } from "../../api/dtos/user/create-user.dto";
import { LoginForm } from "../infrastructure/login-panel/login-form";
import { LoginUserDto } from "../../api/dtos/user/login-user.dto";

export abstract class UserDtoConverter {

  public static createUserDto(registerForm: RegisterForm): CreateUserDto {
    return {
      email: registerForm.login,
      password: registerForm.password,
      creationToken: registerForm.creationCode
    };
  }

  public static loginUserDto(loginForm: LoginForm): LoginUserDto {
    return {
      email: loginForm.login,
      password: loginForm.password
    };

  }

}
