package gsc.projects.userservice.service;


import gsc.projects.userservice.converter.UserConverter;
import gsc.projects.userservice.dto.UserCreateDto;
import gsc.projects.userservice.dto.UserDto;
import gsc.projects.userservice.dto.UserLogin;
import gsc.projects.userservice.model.User;
import gsc.projects.userservice.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@AllArgsConstructor
public class UserServiceImp implements UserService{

    private final UserConverter userConverter;
    private final UserRepository userRepository;


    @Override
    @Transactional
    public boolean createUser(UserCreateDto userCreateDto) {
        User existingUser = userRepository.findByEmail(userCreateDto.getEmail());
        if(existingUser != null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already exists");
        }
        existingUser = userConverter.fromCreateDto(userCreateDto);
        userRepository.save(existingUser);
        return true;
    }

    @Override
    public UserDto getUserByEmail(String userEmail) {
        return userConverter.toDto(checkUser(userEmail));
    }

    @Override
    public void deleteUserByEmail(String userEmail) {
        User existingUser = checkUser(userEmail);
        userRepository.delete(existingUser);
    }

    @Override
    public boolean canLogin(UserLogin userLogin) {
        User existingUser = checkUser(userLogin.getUserEmail());
        return userLogin.getPassword().equals(existingUser.getPassword());
    }


    private User checkUser(String email){
        User existingUser = userRepository.findByEmail(email);
        if(existingUser == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        return existingUser;
    }


}
