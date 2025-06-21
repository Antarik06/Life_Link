import 'package:flutter/material.dart';

class FAQScreen extends StatefulWidget {
  const FAQScreen({super.key});

  @override
  _FAQScreenState createState() => _FAQScreenState();
}

class _FAQScreenState extends State<FAQScreen> {
  String selectedType = 'O+';
  final List<String> bloodGroups = [
    'O+',
    'O-',
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
  ];

  final bloodData = {
    'O+': {
      'donateTo': ['A+', 'B+', 'AB+', 'O+'],
      'receiveFrom': ['O+', 'O-'],
    },
    'O-': {
      'donateTo': ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
      'receiveFrom': ['O-'],
    },
    'A+': {
      'donateTo': ['A+', 'AB+'],
      'receiveFrom': ['A+', 'A-', 'O+', 'O-'],
    },
    'A-': {
      'donateTo': ['A+', 'A-', 'AB+', 'AB-'],
      'receiveFrom': ['A-', 'O-'],
    },
    'B+': {
      'donateTo': ['B+', 'AB+'],
      'receiveFrom': ['B+', 'B-', 'O+', 'O-'],
    },
    'B-': {
      'donateTo': ['B+', 'B-', 'AB+', 'AB-'],
      'receiveFrom': ['B-', 'O-'],
    },
    'AB+': {
      'donateTo': ['AB+'],
      'receiveFrom': ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
    },
    'AB-': {
      'donateTo': ['AB+', 'AB-'],
      'receiveFrom': ['A-', 'B-', 'AB-', 'O-'],
    },
  };

  @override
  Widget build(BuildContext context) {
    final info = bloodData[selectedType]!;
    return Scaffold(
      appBar: AppBar(title: const Text('FAQs & Compatibility')),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                "Select Your Blood Group",
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 10),
              DropdownButton<String>(
                value: selectedType,
                items:
                    bloodGroups
                        .map(
                          (type) =>
                              DropdownMenuItem(value: type, child: Text(type)),
                        )
                        .toList(),
                onChanged: (val) => setState(() => selectedType = val!),
              ),
              SizedBox(height: 20),
              Text(
                "🩸 Can Donate To:",
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Wrap(
                spacing: 8,
                children:
                    bloodData[selectedType]!['donateTo']!.map<Widget>((type) {
                      return Chip(
                        label: Text(type),
                        backgroundColor: Colors.green.shade100,
                      );
                    }).toList(),
              ),
              SizedBox(height: 20),
              Text(
                "🧬 Can Receive From:",
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Wrap(
                spacing: 8,
                children:
                    bloodData[selectedType]!['receiveFrom']!.map<Widget>((
                      type,
                    ) {
                      return Chip(
                        label: Text(type),
                        backgroundColor: Colors.blue.shade100,
                      );
                    }).toList(),
              ),
              SizedBox(height: 30),
              Divider(),
              Text(
                "💡 Did You Know?",
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
              ),
              SizedBox(height: 10),
              ...[
                "O- is the universal donor.",
                "AB+ is the universal recipient.",
                "Only 7% of people have O- blood.",
                "Donation takes 10-15 mins.",
                "One donation can save up to 3 lives.",
                "You can donate blood every 56 days.",
              ].map(
                (text) => ListTile(
                  leading: Icon(Icons.info_outline, color: Colors.redAccent),
                  title: Text(text),
                ),
              ),
              SizedBox(height: 20),
              Card(
                color: Colors.red.shade50,
                elevation: 2,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(Icons.verified_user, color: Colors.red.shade400),
                          SizedBox(width: 8),
                          Text(
                            "Eligibility for Blood Donation",
                            style: TextStyle(
                              color: Colors.red.shade700,
                              fontWeight: FontWeight.bold,
                              fontSize: 18,
                            ),
                          ),
                        ],
                      ),
                      SizedBox(height: 12),
                      _EligibilityItem(
                        icon: Icons.cake,
                        text:
                            "Age: 18-65 years (some centers accept up to 70 if you are a regular donor)",
                      ),
                      _EligibilityItem(
                        icon: Icons.monitor_weight,
                        text: "Weight: Minimum 50kg (110 lbs)",
                      ),
                      _EligibilityItem(
                        icon: Icons.bloodtype,
                        text: "Hemoglobin: At least 12.5 g/dL",
                      ),
                      _EligibilityItem(
                        icon: Icons.favorite,
                        text:
                            "Blood Pressure: Systolic 100-180 mmHg, Diastolic 50-100 mmHg",
                      ),
                      _EligibilityItem(
                        icon: Icons.favorite,
                        text: "Pulse: 50-100 bpm (regular)",
                      ),
                      _EligibilityItem(
                        icon: Icons.health_and_safety,
                        text:
                            "No major illness (heart, lung, kidney, liver, cancer, epilepsy, etc.)",
                      ),
                      _EligibilityItem(
                        icon: Icons.sick,
                        text:
                            "No fever, cold, or infection at the time of donation",
                      ),
                      _EligibilityItem(
                        icon: Icons.healing,
                        text: "No recent surgery (last 6 months)",
                      ),
                      _EligibilityItem(
                        icon: Icons.calendar_today,
                        text:
                            "No recent blood donation (last 3 months for men, 4 months for women)",
                      ),
                      _EligibilityItem(
                        icon: Icons.brush,
                        text:
                            "No recent tattoos, piercings, or acupuncture (last 6 months)",
                      ),
                      _EligibilityItem(
                        icon: Icons.pregnant_woman,
                        text: "Not pregnant, breastfeeding, or menstruating",
                      ),
                      _EligibilityItem(
                        icon: Icons.no_drinks,
                        text: "Not under the influence of alcohol or drugs",
                      ),
                      _EligibilityItem(
                        icon: Icons.warning,
                        text:
                            "No risky sexual behavior or recent exposure to blood-borne diseases",
                      ),
                      _EligibilityItem(
                        icon: Icons.medical_services,
                        text:
                            "Consult your doctor if you have chronic conditions or are on medication.",
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 32),
              Card(
                color: Colors.orange.shade50,
                elevation: 2,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(
                            Icons.volunteer_activism,
                            color: Colors.orange.shade400,
                          ),
                          SizedBox(width: 8),
                          Text(
                            "Why is Blood Donation Important?",
                            style: TextStyle(
                              color: Colors.orange.shade700,
                              fontWeight: FontWeight.bold,
                              fontSize: 18,
                            ),
                          ),
                        ],
                      ),
                      SizedBox(height: 12),
                      _InfoBullet(
                        text:
                            "Saves lives in emergencies such as accidents, surgeries, and childbirth.",
                      ),
                      _InfoBullet(
                        text:
                            "Helps patients with chronic illnesses like cancer, anemia, and blood disorders.",
                      ),
                      _InfoBullet(
                        text:
                            "Blood cannot be manufactured; it can only come from donors.",
                      ),
                      _InfoBullet(
                        text:
                            "Regular donations ensure a steady supply for hospitals.",
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 24),
              Card(
                color: Colors.green.shade50,
                elevation: 2,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(
                            Icons.health_and_safety,
                            color: Colors.green.shade400,
                          ),
                          SizedBox(width: 8),
                          Text(
                            "Tips for a Healthy Donation",
                            style: TextStyle(
                              color: Colors.green.shade700,
                              fontWeight: FontWeight.bold,
                              fontSize: 18,
                            ),
                          ),
                        ],
                      ),
                      SizedBox(height: 12),
                      _InfoBullet(
                        text:
                            "Drink plenty of water before and after donating.",
                      ),
                      _InfoBullet(
                        text:
                            "Eat a healthy meal before donation (avoid fatty foods).",
                      ),
                      _InfoBullet(
                        text: "Rest for a few minutes after donating.",
                      ),
                      _InfoBullet(
                        text: "Avoid heavy exercise for the rest of the day.",
                      ),
                      _InfoBullet(
                        text: "Inform staff if you feel unwell at any time.",
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 24),
              Card(
                color: Colors.purple.shade50,
                elevation: 2,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(Icons.block, color: Colors.purple.shade400),
                          SizedBox(width: 8),
                          Text(
                            "Who Should NOT Donate Blood?",
                            style: TextStyle(
                              color: Colors.purple.shade700,
                              fontWeight: FontWeight.bold,
                              fontSize: 18,
                            ),
                          ),
                        ],
                      ),
                      SizedBox(height: 12),
                      _InfoBullet(
                        text:
                            "People with cold, flu, sore throat, or any infection.",
                      ),
                      _InfoBullet(
                        text:
                            "Those who have had malaria in the last 3 months.",
                      ),
                      _InfoBullet(
                        text:
                            "Individuals with certain chronic diseases (consult your doctor).",
                      ),
                      _InfoBullet(
                        text:
                            "Anyone who has recently had a tattoo or piercing (wait 6 months).",
                      ),
                      _InfoBullet(text: "Pregnant or breastfeeding women."),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _EligibilityItem extends StatelessWidget {
  final IconData icon;
  final String text;
  const _EligibilityItem({required this.icon, required this.text});
  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(vertical: 4.0),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(icon, color: Colors.red.shade300, size: 20),
        SizedBox(width: 8),
        Expanded(child: Text(text, style: TextStyle(fontSize: 15))),
      ],
    ),
  );
}

class _InfoBullet extends StatelessWidget {
  final String text;
  const _InfoBullet({required this.text});
  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.symmetric(vertical: 3.0),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(Icons.circle, size: 8, color: Colors.grey.shade600),
        SizedBox(width: 8),
        Expanded(child: Text(text, style: TextStyle(fontSize: 15))),
      ],
    ),
  );
}
