import 'package:flutter/material.dart';

class RequestBlood extends StatefulWidget {
  @override
  _RequestBloodPageState createState() => _RequestBloodPageState();
}

class _RequestBloodPageState extends State<RequestBlood> {
  final _formKey = GlobalKey<FormState>();
  String? selectedBloodType;
  String urgency = "Normal";
  bool isSubmitting = false;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Scaffold(
      appBar: AppBar(
        title: const Text("Request Blood"),
        backgroundColor: Colors.redAccent,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Card(
                color: Colors.red.shade50,
                elevation: 3,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(18),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(20.0),
                  child: Row(
                    children: [
                      Icon(
                        Icons.bloodtype,
                        color: Colors.red.shade400,
                        size: 40,
                      ),
                      const SizedBox(width: 16),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Need Blood Urgently?',
                              style: theme.textTheme.titleLarge?.copyWith(
                                color: Colors.red.shade700,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            const SizedBox(height: 6),
                            Text(
                              'Fill out the form below and we’ll connect you with donors and blood banks nearby.',
                              style: theme.textTheme.bodyMedium,
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 24),
              Divider(thickness: 1.2, color: Colors.red.shade100),
              const SizedBox(height: 16),
              Card(
                color: Colors.white,
                elevation: 2,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        _buildTextField("Patient Name"),
                        _buildTextField(
                          "Contact Number",
                          keyboardType: TextInputType.phone,
                        ),
                        const SizedBox(height: 10),
                        DropdownButtonFormField<String>(
                          value: selectedBloodType,
                          hint: const Text("Select Blood Type"),
                          items:
                              ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
                                  .map(
                                    (bt) => DropdownMenuItem(
                                      value: bt,
                                      child: Text(bt),
                                    ),
                                  )
                                  .toList(),
                          onChanged:
                              (value) =>
                                  setState(() => selectedBloodType = value),
                          decoration: const InputDecoration(
                            border: OutlineInputBorder(),
                            labelText: 'Blood Type',
                          ),
                          validator:
                              (value) => value == null ? 'Required' : null,
                        ),
                        _buildTextField(
                          "Units Required",
                          keyboardType: TextInputType.number,
                        ),
                        _buildTextField("Hospital/Location"),
                        const SizedBox(height: 20),
                        Text(
                          "Urgency Level",
                          style: theme.textTheme.bodyLarge?.copyWith(
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        _buildUrgencySelector(),
                        const SizedBox(height: 20),
                        _buildTextField("Additional Information", maxLines: 4),
                        const SizedBox(height: 20),
                        Center(
                          child: AnimatedScale(
                            scale: isSubmitting ? 0.97 : 1.0,
                            duration: const Duration(milliseconds: 120),
                            child: GestureDetector(
                              onTapDown:
                                  (_) => setState(() => isSubmitting = true),
                              onTapUp:
                                  (_) => setState(() => isSubmitting = false),
                              onTapCancel:
                                  () => setState(() => isSubmitting = false),
                              child: Container(
                                width: double.infinity,
                                decoration: BoxDecoration(
                                  gradient: const LinearGradient(
                                    colors: [
                                      Color(0xFFD4145A),
                                      Color(0xFFFBB03B),
                                    ],
                                    begin: Alignment.centerLeft,
                                    end: Alignment.centerRight,
                                  ),
                                  borderRadius: BorderRadius.circular(18),
                                  boxShadow: [
                                    BoxShadow(
                                      color: Colors.redAccent.withOpacity(0.18),
                                      blurRadius: 16,
                                      offset: const Offset(0, 6),
                                    ),
                                  ],
                                ),
                                child: ElevatedButton.icon(
                                  icon:
                                      isSubmitting
                                          ? const SizedBox(
                                            width: 24,
                                            height: 24,
                                            child: CircularProgressIndicator(
                                              color: Colors.white,
                                              strokeWidth: 2.2,
                                            ),
                                          )
                                          : const Icon(
                                            Icons.bloodtype,
                                            color: Colors.white,
                                            size: 28,
                                          ),
                                  label: Padding(
                                    padding: const EdgeInsets.symmetric(
                                      vertical: 4.0,
                                    ),
                                    child: Text(
                                      isSubmitting
                                          ? "Submitting..."
                                          : "Submit Blood Request",
                                      style: const TextStyle(
                                        fontSize: 18,
                                        fontWeight: FontWeight.bold,
                                        letterSpacing: 1.1,
                                      ),
                                    ),
                                  ),
                                  onPressed:
                                      isSubmitting
                                          ? null
                                          : () async {
                                            if (_formKey.currentState!
                                                .validate()) {
                                              setState(
                                                () => isSubmitting = true,
                                              );
                                              await Future.delayed(
                                                const Duration(seconds: 2),
                                              ); // Simulate submit
                                              if (mounted)
                                                setState(
                                                  () => isSubmitting = false,
                                                );
                                              ScaffoldMessenger.of(
                                                context,
                                              ).showSnackBar(
                                                const SnackBar(
                                                  content: Text(
                                                    'Blood request submitted!',
                                                  ),
                                                ),
                                              );
                                            }
                                          },
                                  style: ElevatedButton.styleFrom(
                                    minimumSize: const Size.fromHeight(54),
                                    backgroundColor: Colors.transparent,
                                    shadowColor: Colors.transparent,
                                    elevation: 0,
                                    shape: RoundedRectangleBorder(
                                      borderRadius: BorderRadius.circular(18),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 24),
              Card(
                color: Colors.blue[50],
                elevation: 2,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(Icons.info_outline, color: Colors.blue.shade400),
                          const SizedBox(width: 8),
                          Text(
                            "What happens next?",
                            style: theme.textTheme.titleMedium?.copyWith(
                              color: Colors.blue.shade700,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 10),
                      _InfoBullet(
                        text:
                            "We'll immediately notify compatible donors in your area",
                      ),
                      _InfoBullet(
                        text:
                            "Our team will contact nearby blood banks to check availability",
                      ),
                      _InfoBullet(
                        text: "You'll receive updates via SMS and phone calls",
                      ),
                      _InfoBullet(
                        text:
                            "Emergency requests are prioritized and processed within minutes",
                      ),
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

  Widget _buildTextField(
    String label, {
    TextInputType keyboardType = TextInputType.text,
    int maxLines = 1,
  }) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: TextFormField(
        keyboardType: keyboardType,
        maxLines: maxLines,
        decoration: InputDecoration(
          labelText: label,
          border: OutlineInputBorder(),
        ),
        validator: (value) => value!.isEmpty ? 'Required' : null,
      ),
    );
  }

  Widget _buildUrgencySelector() {
    final levels = [
      {
        'label': 'Normal',
        'color': Colors.green,
        'icon': Icons.check_circle_outline,
      },
      {
        'label': 'Urgent',
        'color': Colors.orange,
        'icon': Icons.warning_amber_rounded,
      },
      {'label': 'Critical', 'color': Colors.red, 'icon': Icons.priority_high},
    ];
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children:
          levels.map((level) {
            final isSelected = urgency == level['label'];
            return ChoiceChip(
              label: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(
                    level['icon'] as IconData,
                    color: isSelected ? Colors.white : level['color'] as Color,
                    size: 20,
                  ),
                  const SizedBox(width: 6),
                  Text(level['label'] as String),
                ],
              ),
              selected: isSelected,
              selectedColor: level['color'] as Color,
              backgroundColor: (level['color'] as Color).withOpacity(0.12),
              labelStyle: TextStyle(
                color: isSelected ? Colors.white : level['color'] as Color,
                fontWeight: FontWeight.bold,
              ),
              onSelected:
                  (_) => setState(() => urgency = level['label'] as String),
              elevation: isSelected ? 4 : 0,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16),
              ),
            );
          }).toList(),
    );
  }
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
        const SizedBox(width: 8),
        Expanded(child: Text(text, style: const TextStyle(fontSize: 15))),
      ],
    ),
  );
}
