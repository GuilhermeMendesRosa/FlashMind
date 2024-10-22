package br.com.FlashMindAPI.infra.security;

import lombok.Data;

@Data
public class TokenDTO {

    private String jwt;

    public TokenDTO(String jwt) {
        this.jwt = jwt;
    }

}
