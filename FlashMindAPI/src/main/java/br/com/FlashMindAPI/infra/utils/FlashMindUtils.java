package br.com.FlashMind.infra.utils;

import br.com.FlashMind.domain.user.User;
import org.springframework.security.core.context.SecurityContextHolder;

public class FlashMindUtils {

    public static User getLoggedUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

}
