import 'package:flutter/material.dart';
import 'package:life_link/Screens/home_screen.dart';
import 'package:life_link/Screens/welcome_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:provider/provider.dart';
import 'package:life_link/provider/user_provider.dart';

final ValueNotifier<bool> darkModeNotifier = ValueNotifier(false);
void main() {
  runApp(
    MultiProvider(
      providers: [ChangeNotifierProvider(create: (_) => UserProvider())],
      child: ValueListenableBuilder<bool>(
        valueListenable: darkModeNotifier,
        builder:
            (context, isDark, _) => MaterialApp(
              debugShowCheckedModeBanner: false,
              theme: ThemeData.light(),
              darkTheme: ThemeData.dark(),
              themeMode: isDark ? ThemeMode.dark : ThemeMode.light,
              home: FutureBuilder<bool>(
                future: _checkLogin(),
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Scaffold(
                      body: Center(child: CircularProgressIndicator()),
                    );
                  } else {
                    if (snapshot.data == true) {
                      return const HomeScreen();
                    } else {
                      return WelcomeScreen();
                    }
                  }
                },
              ),
            ),
      ),
    ),
  );
}

Future<bool> _checkLogin() async {
  final prefs = await SharedPreferences.getInstance();
  // You can use 'x-auth-token' or 'isLoggedIn' depending on your logic
  final token = prefs.getString('x-auth-token');
  return token != null && token.isNotEmpty;
}
