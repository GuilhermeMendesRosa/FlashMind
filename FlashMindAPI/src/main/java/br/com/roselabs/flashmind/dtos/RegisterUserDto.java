package br.com.roselabs.flashmind.dtos;

import lombok.Data;

@Data
public class RegisterUserDto {
    private String login;
    private String password;
    private String fullName;

    @Override
    public String toString() {
        return "RegisterUserDto{" +
                "email='" + login + '\'' +
                ", password='" + password + '\'' +
                ", fullName='" + fullName + '\'' +
                '}';
    }
}
