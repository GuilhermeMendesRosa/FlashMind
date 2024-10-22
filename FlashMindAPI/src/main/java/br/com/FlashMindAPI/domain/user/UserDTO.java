package br.com.FlashMindAPI.domain.user;

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
