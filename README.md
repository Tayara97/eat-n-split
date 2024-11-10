# Split Bill App

This project is a simple **bill-splitting app** built with **React**. It allows you to manage balances with friends by adding them to a list, selecting a friend, and splitting a bill to update their balance. The project is structured using reusable components for easy customization and scalability.

## Features

- **Add Friends**: Easily add new friends with a custom name and avatar.
- **Split Bill**: Select a friend to split a bill with, input the bill amount, and specify who paid what amount.
- **Balance Tracking**: Track the balance between you and your friends to see who owes whom and by how much.
- **Dynamic Components**: The project uses reusable components like `Friend`, `AddFriendForm`, `Button`, and `SplitBillForm`.

## Installation

To run this project locally:

1. **Clone this repository**:

   ```bash
   git clone https://github.com/yourusername/split-bill-app.git
   cd split-bill-app
   ```

2. **Install dependencies: Make sure you have Node.js and npm installed, then run:**:
   npm install

3. **Run the app:**:npm run dev
   This starts the development server. Open http://localhost:3000 in your browser to view it.

## Project Structure

The project follows a component-based structure:

App: Main component that handles state and renders the sidebar and form components.
Friend: Displays individual friend information and handles selection for splitting the bill.
AddFriendForm: Form to add a new friend to the list.
Button: Reusable button component.
SplitBillForm: Form for inputting bill details and updating balances accordingly.

## Usage

1-Add a Friend: Click the "Add Friend" button to input a friend’s name and optional avatar.
2-Split a Bill: Select a friend, enter the bill amount, and specify who paid how much. The balance will update to reflect the split.

##Example

### Customization

Add Friend Avatar: The app uses the Pravatar service for avatars. You can update the avatar URL in the AddFriendForm component.

Balance Calculation: Modify the SplitBillForm component logic to customize how balances are calculated or displayed.
Technologies Used
React: Component-based UI library for building interactive interfaces.
JavaScript: Core language for application logic.
CSS: Styling for components and layout.
Contributing
Feel free to fork the project and submit a pull request. Contributions are welcome!
