# hotel-co

    ---------------------     Hotels&Co ----------------------

Hotels&Co is a web application built using Next.js, React Query, and Material UI. It allows users to browse and view information about hotels, including their name, images, price, rating, number of reviews, address, and description. The application retrieves data from a hotels API, which is implemented as a mock API using a JSON file. This file contains all the necessary information for each hotel, including an array of images, a name, a price, a rating, a number of reviews, an address, and a description.

Throughout the rebuilding process , I used the followig approach to build the homepage and the details page.

.First, I gathered requirements from the Document shared to understand the functional and non-functional requirements for the application(HomePage). This included understanding the target audience, their needs and preferences, and the overall goals of the page.

.Next, I studied and understood the approach used to design the home page of AirBnb as it considered as reference from the Document. This helped me to visualize the layout and design of the page, and understand how the various elements would fit together.

.I then used the modern stack for the rebuild, including Next JS, React-query, Material-ui . These tools were chosen because of the requirement document and based on their suitability for building a fast and scalable front-end application, and their ease of use for the team.

.I then , Mocked a JSON REST API response using mockapi.io to provide data for the paginated list of Hotels.

.I Implemented infinite scroll pagination to allow the user to view more Hotel as they scroll down the page.

.Allowed the user to view details for a single hotel by selecting it from the list

.I implemented routing to display the selected item on a separate page.

.I then Tested the implementation using React Testing Library to ensure requirements and acceptance criteria are met.

. I then , pushed the source code to gitHub and Deploy the application to Vercel.

Overall, the architecture of the application follows best practices for software engineering, including the use of modular components and separation of concerns. The application is built with scalability and maintainability in mind,making it easy to add new features or update existing ones.

[The link to the application is https://hotel-co.vercel.app/]
[gitHub link https://github.com/williamNshuti ]
