# Campus Lost & Found App - Quick Start Guide

## 📱 Running the App with Expo

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- Expo Go app (download from App Store or Google Play)

### Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd CampusLostandFound
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Expo development server:**
   ```bash
   npm start
   ```

   This will display a QR code in your terminal.

### Testing on Your Device

**Option A: Using Expo Go (Recommended)**
- Open the **Expo Go** app on your phone
- Tap "Scan QR Code"
- Point your camera at the QR code displayed in your terminal
- Wait for the app to load (first load takes 30-60 seconds)

**Option B: Using Physical Device Connected to Computer**
- Connect your device via USB
- Run: `npm run android` (for Android)
- Run: `npm run ios` (for iOS)

**Option C: Using Emulator**
- For Android: `npm run android` (requires Android Studio with emulator)
- For iOS: `npm run ios` (requires Xcode on macOS)

**Option D: Web Preview**
- Run: `npm run web`
- Opens the app in your default browser (limited features on web)

## 🧪 Testing the App

### Features to Test

1. **Lost Items Tab**
   - Scroll through lost items
   - Use search bar to find items
   - Filter by category
   - Tap on items to see details

2. **Found Items Tab**
   - Browse found items
   - Filter and search functionality
   - View item details

3. **Post Item Tab**
   - Try posting a lost item
   - Try posting a found item
   - Fill in all required fields (marked with *)
   - Submit and see confirmation

4. **Item Details Screen**
   - View complete item information
   - See contact details
   - Tap email to open mail client
   - Tap phone to open dialer

5. **Info Tab**
   - View app statistics
   - Read how-to guides
   - See tips for using the app

### Test Scenarios

**Search Test:**
- Type "Silver" in the search bar on Lost Items tab
- Should show items with "Silver" in title or description

**Category Filter:**
- Select "Electronics" category
- Should show only electronics items

**Item Details:**
- Tap on any item card
- All details should load properly
- Contact buttons should be functional

**Form Validation:**
- Try posting without selecting lost/found type
- Try posting without title
- Try posting with incomplete contact info
- Should see error alerts

## 🔧 Troubleshooting

### App Won't Load
- Clear Expo cache: `npm start -- --clear`
- Reinstall node_modules: `rm -rf node_modules && npm install`
- Make sure your phone is on the same WiFi as your computer

### QR Code Not Working
- Make sure you're in the same network
- Try restarting Expo: `Ctrl+C` then `npm start`
- Check that Expo Go app is up to date

### Slow Performance
- First load is always slower (1-2 minutes)
- Hot reload should be much faster for subsequent changes
- Try reloading: Press `r` in the terminal

## 📝 Project Structure

```
CampusLostandFound/
├── src/
│   ├── screens/          # Screen components
│   ├── components/       # Reusable UI components
│   ├── navigation/       # Navigation configuration
│   ├── theme/           # Colors, spacing, typography
│   ├── data/            # Mock data and utilities
│   └── types/           # TypeScript types
├── App.tsx              # Main app entry
├── app.json             # Expo configuration
└── package.json         # Dependencies
```

## 📦 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device
- `npm run web` - Run in web browser
- `npm test` - Run tests (if configured)

## 💡 Tips for Testing

1. **Use multiple items:** The app includes 6 mock items (3 lost, 3 found) to test filtering
2. **Try different searches:** Search for "laptop", "id card", "jacket"
3. **Test all categories:** Select different categories to see filtering in action
4. **Fill forms completely:** Try leaving fields blank to test validation
5. **Check responsive design:** Rotate your device to see responsive behavior

## 🎓 What to Explore

- Modern UI with smooth interactions
- Search and filter functionality
- Form validation
- Tab-based navigation
- Stack navigation for details
- TypeScript for type safety
- Modular component architecture

## 📞 Need Help?

- Check Expo docs: https://docs.expo.dev
- React Native docs: https://reactnative.dev
- Navigation docs: https://reactnavigation.org

---

**Happy Testing! 🚀**
