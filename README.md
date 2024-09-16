Lendsqr Frontend Engineering Assessment
Project Overview
This project is a frontend application built as part of the Lendsqr Frontend Engineering Assessment. The objective of this project is to demonstrate my skills in React, TypeScript, and SCSS, while implementing the required features of a mock admin console for a lending platform.

The application includes the following key pages:

Login Page: A simple login interface with form validation.
Dashboard Page: Displays key user statistics and navigation links.
User List Page: Displays a paginated list of 500 user records fetched from a mock API.
User Details Page: Shows detailed information about individual users, with data stored and retrieved using LocalStorage.
Pages Implemented

1. Login Page
   The login page allows users to log in to the dashboard. I implemented form validation and user feedback for incorrect login attempts. This page also follows responsive design principles. An Email and a password of 6 characters is required to proceed past the login Page. Any Email is valid.

2. Dashboard Page
   The dashboard presents key metrics, including:

Total number of users
Active users
Users with loans
Users with savings
These stats are displayed using cards and are based on data fetched from the mock API. The design closely follows the Figma design.

3. User List Page
   This page displays a paginated table of 500 users fetched from the mock API. It includes:

Pagination (10 records per page)
Responsive table design
Sortable columns for easier data navigation
The data for this page is pulled dynamically from the mock API, ensuring a seamless user experience.

4. User Details Page
   When clicking on a user from the User List, the User Details page is displayed. This page shows:

Personal information such as name, email, phone number, and BVN.
Education and employment details.
Social media links.
Guarantor information.
LocalStorage is used to store and retrieve the user data for this page, allowing the app to maintain state across sessions.

Technologies Used
React: Core framework for building the UI components.
TypeScript: Used for type safety and to catch potential issues during development.
SCSS: For styling the application with a focus on modularity and responsiveness.
React Query: For fetching and managing data from the mock API.
Mock API: Used to simulate 500 user records, created using json-generator.com.
Key Features Implemented
Responsive Design: Ensured that the app is fully responsive and works across different screen sizes, including mobile.
Pagination: Added pagination to the User List page to handle large datasets effectively.
State Management: Used React's state and context APIs to manage user data efficiently.
Data Persistence: User details are stored and retrieved using LocalStorage.
API Integration: Used mock APIs to simulate real-world user data.
Design Considerations
Pixel-perfect Design: The UI follows the Figma design strictly to ensure visual fidelity.
Component-Based Architecture: The application follows a component-driven architecture to ensure reusability and maintainability.
TypeScript: Types were added across all components to ensure safety and prevent runtime errors.
SCSS Modules: I used SCSS modules for better scoping of styles and to avoid conflicts.
Deployment
The application is deployed using Vercel. You can access the live application at the following URL:

Live App URL

How to Run the Project Locally
Clone the repository:

bash
Copy code
git clone https://github.com/<your-username>/lendsqr-fe-test.git
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000.

Testing
I implemented unit tests to cover both positive and negative scenarios. Testing was done using Jest and React Testing Library.

To run tests:

bash
Copy code
npm run test
Conclusion
This project demonstrates my proficiency in using React, TypeScript, and SCSS to create a scalable and responsive web application. The key features, such as API integration, pagination, and data persistence, showcase my ability to handle real-world frontend challenges.

Video Review
A video walkthrough of the project can be found here, where I compare the design with the final implementation and explain any key decisions.
