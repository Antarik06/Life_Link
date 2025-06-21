import 'package:http/http.dart' as http;
import 'dart:convert';

class ApiService {
  static const String baseUrl = 'http://<your-server-ip>:5000';

  static Future<bool> submitBloodRequest({
    required String name,
    required String phone,
    required String bloodType,
    required String location,
    required String reason,
  }) async {
    final url = Uri.parse('$baseUrl/api/requests');

    try {
      final response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'name': name,
          'phone': phone,
          'bloodType': bloodType,
          'location': location,
          'reason': reason,
        }),
      );

      if (response.statusCode == 201) {
        return true;
      } else {
        print('Failed to submit: ${response.body}');
        return false;
      }
    } catch (e) {
      print('Error: $e');
      return false;
    }
  }
}
