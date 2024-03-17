package gsc.projects.userservice.converter;


import gsc.projects.userservice.dto.UserCreateDto;
import gsc.projects.userservice.dto.UserDto;
import gsc.projects.userservice.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserConverterImp implements UserConverter{


    public UserDto toDto(User user){
        return UserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .age(user.getAge())
                .email(user.getEmail())
                .address(user.getAddress())
                .build();

    }

    public User fromCreateDto(UserCreateDto userCreateDto){
        return User.builder()
                .withName(userCreateDto.getName())
                .withAge(userCreateDto.getAge())
                .withEmail(userCreateDto.getEmail())
                .withAddress(userCreateDto.getAddress())
                .build();
    }
}
