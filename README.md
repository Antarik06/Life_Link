# LifeLink – Blood Donation App

LifeLink is a modern, visually appealing Flutter app designed to connect blood donors and recipients, making blood donation easy, accessible, and community-driven. The app features persistent login, dark mode, interactive dashboards, and educational resources about blood donation.

## Features

- **Welcome Screen:** Beautiful entry point with motivational message and easy navigation.
- **Authentication:** Sign up and login with persistent session (auto-login until sign out).
- **Home Dashboard:**
  - Four main actions: Request Blood, Donate Blood, Organize Camp, FAQs
  - Modern AppBar and Drawer with dark mode toggle, About, Contact, and Sign Out
- **Request Blood:**
  - Modern, card-based form for requesting blood
  - Urgency selector with icons and color cues
  - Info card explaining the process
- **Donate Blood:**
  - (Placeholder) For future donor registration and management
- **Organize Camp:**
  - (Placeholder) For organizing blood donation camps
- **FAQs:**
  - Interactive, scrollable, and visually rich FAQ and compatibility info
  - Blood group selector, eligibility, donation tips, and more
- **Dark Mode:**
  - Toggle in drawer, theme-aware UI throughout
- **Persistent Login:**
  - User stays logged in until sign out
- **Sign Out:**
  - Clears user data and returns to Welcome screen


## Getting Started

### Prerequisites
- [Flutter](https://flutter.dev/docs/get-started/install)
- A running backend server (Node.js/Express, see `Constants.uri` in `lib/utils/constants.dart`)

### Installation
1. Clone the repo:
   ```sh
   git clone https://github.com/yourusername/lifelink.git
   cd lifelink
   ```
2. Install dependencies:
   ```sh
   flutter pub get
   ```
3. Update the backend API URL in `lib/utils/constants.dart` if needed.
4. Run the app:
   ```sh
   flutter run
   ```

## Folder Structure
- `lib/`
  - `Screens/` – All main screens (Home, Login, Signup, FAQ, etc.)
  - `models/` – Data models
  - `provider/` – State management (UserProvider)
  - `services/` – Auth and API services
  - `utils/` – Constants, helpers
  - `custom_textfield.dart` – Reusable text field widget

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.


**Crafted With ❤️ by Team Codeus**
