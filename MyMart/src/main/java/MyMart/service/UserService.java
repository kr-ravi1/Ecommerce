package MyMart.service;

import MyMart.Model.Address;
import MyMart.dto.requests.NewUserRequest;

public interface UserService {
    public String createNewAccount(NewUserRequest newUserRequest);
    public String updateUserRecord(NewUserRequest newUserRequest, int userId);
}
