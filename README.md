# hotel-co



Hotels&Co is a web application built using Next.js, React Query, and Material UI. It allows users to browse and view information about hotels, including their name, images, price, rating, number of reviews, address, and description. The application retrieves data from a hotels API, which is implemented as a mock API using a JSON file. This file contains all the necessary information for each hotel, including  images, a names, a price, a rating, a number of reviews, an address, and a description.

Throughout the rebuilding process , I used the following approach to build the homepage and the single details page.


I. Understanding and Reference:

1. Deep Dive into Airbnb: I embarked on an in-depth exploration of Airbnb's homepage, meticulously dissecting its layout, components, and user experience. This study served as an invaluable reference, providing insight into crafting a web application that not only meets industry standards but exceeds user expectations.
      This served as a reference point for our project.

2. Gathering requirements :  I gathered requirements from the Document shared to understand the functional and non-functional requirements for the application(HomePage). This included understanding the target audience, their needs and preferences, and the overall goals of the page.

 After a comprehensive exploration of Airbnb and a careful review of the shared documents, I identified the requirements as follows:


Functional Requirements:   

* Homepage with Room Listings:

    1. Users should be able to see a paginated list of all rooms listed on the site, categorized by type (e.g., hotels, apartments).
    2. Infinite scroll pagination is a plus, providing a seamless browsing experience.
    3. Users should be able to view details for a single item by selecting it from the list.


* Filtering Additional Feature:
    * Implement a category filter feature, allowing users to filter room listings by category (e.g., apartments, hotels, condos).

* Data API:

    * Use a mock API service (like MockAPI.io) to provide data to the front-end.
    * Ensure that the front-end can consume data from the API effectively.


Non-Functional Requirements:

* Performance Optimization:

    * Ensure the application performs well for users with both low and high-speed internet connections.
    * Optimize the application to load quickly and efficiently.

* Code Quality:

    * Maintain clean and well-structured code that follows industry best practices for simplicity, readability, and maintainability.

* User Experience:

    * Provide a user-friendly and familiar experience, taking inspiration from Airbnb's homepage design.

* Deployment Readiness:

    * Ensure that the code is ready for deployment without extra configuration, making it easy for reviewers to access.
    * Deploy the project on Vercel or a similar platform to facilitate easy access and testing(Additional).


II.  Seamless User Experience

* Leveraging Airbnb's Design Excellence: Recognizing the elegance and user-friendliness of Airbnb's interface, I opted to embrace their design elements. By doing so, I aimed to eliminate the need for an extensive UI/UX design process, ensuring a sleek, intuitive, and instantly familiar experience for users of Hotels&Co.

III. Component Identification

* Strategic Component Selection: Carefully pinpointing essential components, I honed in on the categorization of services (e.g., hotels, apartments), implemented a sophisticated pagination system, and crafted a polished single-item view. This strategic component choice was informed by the best practices observed on Airbnb's homepage.

IV. Agile Data Mocking

* Efficient Data Simulation: Swiftly, I established a mock API using MockAPI.io to provide comprehensive data for hotels, condos, apartments, and houses. This included data for names, ratings, prices, and images. The mock API played a pivotal role, serving as a bridge between the user interface and data, eliminating the need for a full-fledged backend system. This approach enabled a focused and streamlined front-end development, as data was readily available for use in the paginated list across all categories.

V. Performance-Oriented Development

* Front-End Finesse: I dedicated my efforts to creating a front-end masterpiece using Next.js, React-query, Material UI, and React testing library. In addition to creating a visually appealing interface, I integrated advanced features:

    * Infinite Scroll: Enhancing user experience with a dynamic and fluid data presentation, akin to Airbnb's homepage.
    * Optimization: Rigorously optimizing the page's performance to meet the criteria for both high-speed and low-speed internet connections, ensuring accessibility for users around the globe.
    * User-Centric Filtering: An essential addition to the user experience, I implemented category filters. Users can seamlessly filter listings by categories such as apartments, hotels, and condos, making it easier to find their desired accommodations.
    * Item Detail Routing: To provide an in-depth user experience, I allowed users to view details for a single item by selecting it from the list. I implemented routing to display the selected item on a separate page, enabling users to explore the chosen listing with ease.


VI. Deployment Readiness


* Clean and Structured Code: I maintained a meticulously organized codebase, meticulously adhering to the principles of simplicity, readability, and maintainability. This approach guarantees that future iterations and team collaboration are seamlessly executed.
* Accessible Code Repository: The source code for this project resides in the dedicated GitHub repository, ensuring ease of access for recruiters until the conclusion of January.
* Vercel Deployment: To further simplify access and testing, I deployed the project on Vercel, creating a convenient and efficient environment for evaluating the project.

  

VII. Quality and User-Centric Focus

* Excellence in Code Structure: The design of the code adheres to industry best practices. Its structure, readability, and maintainability stand as a testament to the commitment to deliver a product that exceeds expectations.
* Unwavering User Experience: My primary focus was on creating a familiar, user-friendly, and innovative experience. I carefully emulated Airbnb's layout, ensuring that users of Hotels&Co would be met with an interface that caters to their needs, even in the most challenging of global connectivity scenarios.



Overall, the architecture of the application follows best practices for software engineering, including the use of modular components and separation of concerns. The application is built with scalability and maintainability in mind, making it easy to add new features or update existing ones.

[The versel link to the application :  https://hotel-co-app.vercel.app/]
[gitHub link https://github.com/williamNshuti/hotel-co-app ]

