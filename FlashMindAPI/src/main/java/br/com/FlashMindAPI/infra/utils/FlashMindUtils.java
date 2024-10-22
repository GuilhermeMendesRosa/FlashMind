package br.com.FlashMindAPI.infra.utils;

import br.com.FlashMindAPI.domain.user.User;
import org.springframework.security.core.context.SecurityContextHolder;

public class FlashMindUtils {

    public static User getLoggedUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

}
