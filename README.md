                                      Skip React App

1. Objective
This project is a simple React application developed as part of a technical test. The main objective was to build upon an existing application and implement improvements where possible.

2. Stack
React (with Redux) + Material UI for the frontend
GitHub Actions for CI/CD
Docker + AWS (EC2) for deployment

3. Accessibility
  Live url: http://18.191.94.173
  Docker image: docker pull jules333/skip-react-app

4. Approach and improvements
I began by replicating the structure and behavior of the original page to understand its design and logic. Once that was in place, I identified areas with potential for enhancement. Overall, the existing UI was well-designed, and the improvements I introduced are as follows:

   a. Modal View: Each skip includes multiple data points. Displaying all of them upfront would clutter the UI. I added a "View Details" feature, which reveals additional information (e.g., price, transport cost, postcode, heavy waste support) when clicked.

    b. Theme Toggle: Users can now switch between light and dark themes using a button located at the top right of the page, catering to individual visual preferences.

    c. Sorting: Users can sort skips by size, price, transport cost, and hire period in either ascending or descending order for easier navigation.

    d. Skip Unselection: Selected skips can now be unselected without needing to choose a different one. If a skip is currently selected, the button label changes to "Unselect," allowing the user to deselect it. Alternatively, the skip can be removed via the delete icon at the bottom of the page.

    e. Responsive Design: The layout adapts seamlessly to different screen sizes, ensuring a smooth experience across devices, including laptops and mobile phones.

5. Scalability and Modularity
To ensure the application remains maintainable and scalable as it evolves, I followed several architectural principles:

  a. Redux for State Management: All application state is managed centrally using Redux. This makes state transitions predictable, easier to debug, and more maintainable as the app grows in complexity.

  b. Styled Components for Modular Styling: Styling is handled using styled-components, which encapsulates styles within components. This prevents global CSS conflicts and supports theme switching with minimal overhead.

  c. Separation of Concerns:

Components are broken down into modular, reusable units such as Modals, Styles, Utils, etc.

Redux logic (actions, reducers, selectors) is separated from UI components.

API interactions and utility functions are organized into dedicated service/helper files.

The project structure follows a modular pattern, making it easier to scale the app, introduce new features, and maintain the codebase over time.

These decisions collectively enhance code readability, reusability, and long-term project sustainability.

6. Deployment
The application is containerized with Docker. GitHub Actions (configured under .github/workflows) automate the build and push process to Docker Hub. The container is then deployed to an AWS EC2 instance.

7. How to Use
  a. Clone and Run Locally:
     git clone https://github.com/irajule/skip-react-app.git
     cd skip-react-app
     npm install
     npm start

  b. Run with Docker
     You can also run the app via Docker using:
     npm run docker
     
    Docker-related scripts are defined in package.json.

