import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:life_link/models/user.dart';

class UserProvider extends ChangeNotifier {
  User _user = User(id: '', name: '', email: '', token: '', password: '');

  User get user => _user;

  void setUser(User user) {
    _user = user;
    notifyListeners();
  }

  void clearUser() {
    _user = User(id: '', name: '', email: '', token: '', password: '');
    notifyListeners();
  }

  void setUserFromModel(User user) {
    _user = user;
    notifyListeners();
  }
}
