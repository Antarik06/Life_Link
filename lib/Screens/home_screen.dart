import 'package:flutter/material.dart';
import 'package:life_link/main.dart'; // Add this import at the top
import 'package:life_link/Screens/welcome_screen.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:life_link/Screens/faqs.dart'; // Keep only this import for FAQScreen
import 'package:life_link/Screens/request_blood.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  void _navigateTo(BuildContext context, Widget screen) {
    Navigator.push(context, MaterialPageRoute(builder: (_) => screen));
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(60),
        child: AppBar(
          flexibleSpace: Container(
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                colors: [Color(0xFFD4145A), Color(0xFFFBB03B)],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
            ),
          ),
          title: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                Icons.favorite,
                color: theme.colorScheme.onPrimary,
                size: 28,
              ),
              const SizedBox(width: 8),
              Text(
                'LifeLink',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 25,
                  color: theme.colorScheme.onPrimary,
                  letterSpacing: 1.5,
                ),
              ),
            ],
          ),
          centerTitle: true,
          leading: Builder(
            builder:
                (context) => IconButton(
                  icon: const Icon(Icons.menu, color: Colors.white),
                  onPressed: () => Scaffold.of(context).openDrawer(),
                ),
          ),
          actions: [
            IconButton(
              icon: const Icon(Icons.logout, color: Colors.white),
              onPressed: () async {
                final prefs = await SharedPreferences.getInstance();
                await prefs.clear();
                Navigator.of(context).pushAndRemoveUntil(
                  MaterialPageRoute(builder: (_) => const LoginScreen()),
                  (route) => false,
                );
              },
            ),
          ],
          elevation: 8,
          backgroundColor: Colors.transparent,
        ),
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            DrawerHeader(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [Color(0xFFD4145A), Color(0xFFFBB03B)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(
                    Icons.favorite,
                    color: Theme.of(context).colorScheme.onPrimary,
                    size: 48,
                  ),
                  const SizedBox(height: 10),
                  Text(
                    'LifeLink Menu',
                    style: TextStyle(
                      color: Theme.of(context).colorScheme.onPrimary,
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      letterSpacing: 1.2,
                    ),
                  ),
                ],
              ),
            ),
            ListTile(
              leading: Icon(
                Icons.dashboard,
                color: Theme.of(context).iconTheme.color,
              ),
              title: Text(
                'Dashboard',
                style: Theme.of(context).textTheme.bodyLarge,
              ),
              onTap: () => Navigator.pop(context),
            ),
            ListTile(
              leading: const Icon(Icons.info, color: Colors.orange),
              title: const Text('About Us'),
              onTap: () => _navigateTo(context, const AboutUsScreen()),
            ),
            ListTile(
              leading: const Icon(Icons.contact_mail, color: Colors.blue),
              title: const Text('Contact Us'),
              onTap: () => _navigateTo(context, const ContactUsScreen()),
            ),
            // --- Add this for dark mode toggle ---
            ValueListenableBuilder<bool>(
              valueListenable: darkModeNotifier,
              builder:
                  (context, isDark, _) => SwitchListTile(
                    secondary: const Icon(Icons.dark_mode),
                    title: const Text('Dark Mode'),
                    value: isDark,
                    onChanged: (val) {
                      darkModeNotifier.value = val;
                    },
                  ),
            ),
            ListTile(
              leading: const Icon(Icons.logout, color: Colors.grey),
              title: const Text('Sign Out'),
              onTap: () async {
                final prefs = await SharedPreferences.getInstance();
                await prefs.clear();
                Navigator.of(context).pushAndRemoveUntil(
                  MaterialPageRoute(builder: (_) => WelcomeScreen()),
                  (route) => false,
                );
              },
            ),
          ],
        ),
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xFFFBB03B), Color(0xFFFFE0E6)],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: SafeArea(
          child: SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
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
                                  'Welcome to LifeLink!',
                                  style: theme.textTheme.titleLarge?.copyWith(
                                    color: Colors.red.shade700,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                const SizedBox(height: 6),
                                Text(
                                  'Every drop counts. Save lives, join our community, and make a difference!',
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
                  GridView.count(
                    crossAxisCount: 2,
                    crossAxisSpacing: 18,
                    mainAxisSpacing: 18,
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      _DashboardTile(
                        icon: Icons.bloodtype,
                        label: 'Request Blood',
                        color: Colors.red.shade100,
                        onTap: () => _navigateTo(context, RequestBlood()),
                      ),
                      _DashboardTile(
                        icon: Icons.volunteer_activism,
                        label: 'Donate Blood',
                        color: Colors.green.shade100,
                        onTap:
                            () =>
                                _navigateTo(context, const DonateBloodScreen()),
                      ),
                      _DashboardTile(
                        icon: Icons.event,
                        label: 'Organize Camp',
                        color: Colors.blue.shade100,
                        onTap:
                            () => _navigateTo(
                              context,
                              const OrganizeCampScreen(),
                            ),
                      ),
                      _DashboardTile(
                        icon: Icons.help_outline,
                        label: 'FAQs',
                        color: Colors.orange.shade100,
                        onTap: () => _navigateTo(context, const FAQScreen()),
                      ),
                    ],
                  ),
                  const SizedBox(height: 32),
                  Card(
                    color: Colors.pink.shade50,
                    elevation: 2,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.all(18.0),
                      child: Row(
                        children: [
                          Icon(
                            Icons.info_outline,
                            color: Colors.pink.shade400,
                            size: 32,
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Text(
                              'Did you know? One blood donation can save up to 3 lives! You can donate every 56 days.',
                              style: theme.textTheme.bodyLarge?.copyWith(
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _DashboardTile extends StatefulWidget {
  final IconData icon;
  final String label;
  final Color color;
  final VoidCallback onTap;

  const _DashboardTile({
    required this.icon,
    required this.label,
    required this.color,
    required this.onTap,
  });

  @override
  State<_DashboardTile> createState() => _DashboardTileState();
}

class _DashboardTileState extends State<_DashboardTile>
    with SingleTickerProviderStateMixin {
  double _scale = 1.0;

  @override
  Widget build(BuildContext context) {
    // Use theme colors for icon/text
    final iconColor = Theme.of(context).iconTheme.color;
    final textColor = Theme.of(context).textTheme.bodyLarge?.color;

    return GestureDetector(
      onTapDown: (_) => setState(() => _scale = 0.96),
      onTapUp: (_) => setState(() => _scale = 1.0),
      onTapCancel: () => setState(() => _scale = 1.0),
      onTap: widget.onTap,
      child: AnimatedScale(
        scale: _scale,
        duration: const Duration(milliseconds: 120),
        child: Card(
          elevation: 8,
          shadowColor: Colors.redAccent.withOpacity(0.2),
          color: Theme.of(context).cardColor, // Use theme card color
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(22),
          ),
          child: Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(widget.icon, size: 48, color: iconColor),
                const SizedBox(height: 12),
                Text(
                  widget.label,
                  style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                    fontWeight: FontWeight.bold,
                    letterSpacing: 1.1,
                    color: textColor,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// Placeholder screens for navigation
class RequestBloodScreen extends StatelessWidget {
  const RequestBloodScreen({super.key});
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Request Blood')),
    body: const Center(child: Text('Request Blood Screen')),
  );
}

class DonateBloodScreen extends StatelessWidget {
  const DonateBloodScreen({super.key});
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Donate Blood')),
    body: const Center(child: Text('Donate Blood Screen')),
  );
}

class OrganizeCampScreen extends StatelessWidget {
  const OrganizeCampScreen({super.key});
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Organize Blood Camp')),
    body: const Center(child: Text('Organize Blood Camp Screen')),
  );
}

class MoreScreen extends StatelessWidget {
  const MoreScreen({super.key});
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('More')),
    body: const Center(child: Text('More Options Screen')),
  );
}

class AboutUsScreen extends StatelessWidget {
  const AboutUsScreen({super.key});
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('About Us')),
    body: const Center(child: Text('About Us Screen')),
  );
}

class ContactUsScreen extends StatelessWidget {
  const ContactUsScreen({super.key});
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Contact Us')),
    body: const Center(child: Text('Contact Us Screen')),
  );
}

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Login')),
    body: const Center(child: Text('Login Screen')),
  );
}
