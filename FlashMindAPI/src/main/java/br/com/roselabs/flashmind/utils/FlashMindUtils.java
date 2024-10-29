package br.com.roselabs.flashmind.utils;

import br.com.roselabs.flashmind.entities.User;
import org.springframework.security.core.context.SecurityContextHolder;

public class FlashMindUtils {

    public static User getLoggedUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

}