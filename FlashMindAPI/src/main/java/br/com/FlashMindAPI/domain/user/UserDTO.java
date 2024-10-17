package br.com.FlashMind.domain.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UserDTO {

    @Email
    private String login;

    @NotBlank
    private String password;

}
