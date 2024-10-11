// Images
import PlaceHolder150 from '../assets/images/project-cards/placeholder-150.png'

// Recents
import PasswordGenerator from '../assets/images/project-cards/Recent/password-generator.png'
import ChalkboardGames from '../assets/images/project-cards/Recent/chalkboard-games.png'
import AllenhurstCleaners from '../assets/images/project-cards/Recent/allenhurst-cleaners.png'
import JokerBlazor from '../assets/images/project-cards/Recent/joker-blazor.png'
// TODO: Put Batman's Joker Smile
// import JokerService from '../assets/images/project-cards/Recent/joker-service.png'
import WhatsAppClone from '../assets/images/project-cards/Recent/whatsapp-clone.png'

// GA
import CocktailRecipe from '../assets/images/project-cards/GA/cocktail-recipe.jpg'
import OptioBlue from '../assets/images/project-cards/GA/optio-blue.jpg'
import BuckT from '../assets/images/project-cards/GA/buckt.jpg'
import Gaflix from '../assets/images/project-cards/GA/gaflix.jpg'
import Capstone from '../assets/images/project-cards/GA/capstone.jpg'
import LitterGame from '../assets/images/project-cards/GA/litter-game.jpg'

// Udemy
import FormValidator from '../assets/images/project-cards/Udemy/form-validator.png'
import MovieSeatBooking from '../assets/images/project-cards/Udemy/movie-seat-booking.png'
import CustomVideoPlayer from '../assets/images/project-cards/Udemy/custom-video-player.png'
import ExchangeRateCalculator from '../assets/images/project-cards/Udemy/exchange-rate-calculator.png'
import DomArrayMethods from '../assets/images/project-cards/Udemy/dom-array-methods.png'
import LandingPage from '../assets/images/project-cards/Udemy/landing-page.png'
import Hangman from '../assets/images/project-cards/Udemy/hangman.png'
import MealFinder from '../assets/images/project-cards/Udemy/meal-finder.png'
import ExpenseTracker from '../assets/images/project-cards/Udemy/expense-tracker.png'
import MusicPlayer from '../assets/images/project-cards/Udemy/music-player.png'
import Blog from '../assets/images/project-cards/Udemy/blog.png'

// TODO: Put Air Force 1s, Mongo Logo, Unreal Enginge Logo
// SJU
// import SneakersDB from '../assets/images/project-cards/SJU/sneakers-db.png'
// import MongoBongo from '../assets/images/project-cards/SJU/mongo-bongo.png'
// import SShooter_sju from '../assets/images/project-cards/SJU/sshooter_sju.png'

export const RecentProjects = [
    {
        category: 'Recent',
        image: PasswordGenerator,
        title: 'Password Generator',
        shortDescription: 'A responsive React app for generating secure passwords with customizable options. Features include configurable settings for password length and character types, live preview, and copy-to-clipboard functionality. Utilizes Tailwind CSS, DaisyUI, and ESLint. Deployed on GitHub Pages.',
        longDescription: 'Password Generator is a responsive React application designed to help users create secure passwords with customizable options. The app allows users to configure settings for password length and character types, providing a live preview of the generated password. It also includes a convenient copy-to-clipboard functionality. The project utilizes Tailwind CSS for styling, DaisyUI for UI components, and ESLint for code quality. The application is deployed on GitHub Pages, making it easily accessible online.',
        githubRepoLink: 'https://github.com/daydin14/password-generator',
        liveDemoLink: 'https://daydin14.github.io/password-generator'
    },
    {
        category: 'Recent',
        image: ChalkboardGames,
        title: 'Chalkboard Games',
        shortDescription: 'Chalkboard Games is a web application that hosts a collection of classic games, including Tic-Tac-Toe, Connect 4, and Snake. Built using React, Tailwind CSS and DaisyUI. Deployed on GH-Pages.',
        longDescription: 'Chalkboard Games is a web application that offers a collection of classic games, including Tic-Tac-Toe, Connect 4, and Snake. The app is built using React for the front-end, Tailwind CSS for styling, and DaisyUI for UI components. It provides an engaging and interactive gaming experience for users. The project is deployed on GitHub Pages, allowing users to access and play the games online.',
        githubRepoLink: 'https://github.com/daydin14/chalkboard-games',
        liveDemoLink: 'https://daydin14.github.io/chalkboard-games/'
    },
    {
        category: 'Recent',
        image: AllenhurstCleaners,
        title: 'Allenhurst Cleaners',
        shortDescription: 'This web application integrates with the Google Maps API Platform and Google Analytics. Built with React and Material UI. Environment variable management and duel deployment, GH-Pages & Netlify.',
        longDescription: 'Allenhurst Cleaners is a web application designed to integrate with the Google Maps API Platform and Google Analytics. The app is built using React for the front-end and Material UI for the user interface components. It includes features such as environment variable management and dual deployment on both GitHub Pages and Netlify. The integration with Google Maps allows users to locate the cleaners easily, while Google Analytics provides insights into user interactions.',
        githubRepoLink: 'https://github.com/daydin14/allenhurstcleaners_v2',
        liveDemoLink: 'https://daydin14.github.io/allenhurstcleaners_v2/'
    },
    {
        category: 'Recent',
        image: JokerBlazor,
        title: 'JokerBlazor',
        shortDescription: 'JokerBlazor is a Blazor Web Application that delivers interactive web experiences with real-time updates and humor through JokeAPI integration and MudBlazor components.',
        longDescription: 'JokerBlazor is a Blazor Web Application designed to deliver interactive web experiences with real-time updates and humor. The app integrates with JokeAPI to fetch and display programming jokes, providing a fun and engaging user experience. It utilizes MudBlazor components for the user interface, ensuring a modern and responsive design. JokerBlazor showcases the capabilities of Blazor for building dynamic web applications with real-time data updates.',
        githubRepoLink: 'https://github.com/daydin14/JokerBlazor',
        liveDemoLink: ''
    },
    {
        category: 'Recent',
        image: PlaceHolder150,
        title: 'Joker Service',
        shortDescription: 'A .NET Worker Windows Service using BackgroundService. Logs Computer Programming Jokes and can send emails.',
        longDescription: 'Joker Service is a .NET Worker Windows Service that uses BackgroundService to perform background tasks. The service logs computer programming jokes and has the capability to send emails. It is designed to run continuously in the background, providing a reliable and efficient way to manage and log jokes. The project demonstrates the use of .NET Worker Services for creating background processes and integrating email functionality.',
        githubRepoLink: 'https://github.com/daydin14/JokerService',
        liveDemoLink: ''
    },
    {
        category: 'Recent',
        image: WhatsAppClone,
        title: 'WhatsApp -Clone',
        shortDescription: 'A real-time messaging app clone built with React, Firebase, and Material-UI.',
        longDescription: 'WhatsApp -Clone is a real-time messaging application that replicates the core features of WhatsApp. Built with React for the front-end, Firebase for the backend and real-time database, and Material-UI for the user interface components, this project demonstrates how to create a fully functional chat application. Features include user authentication, real-time messaging, and a responsive design. The app provides a seamless and interactive user experience, similar to the original WhatsApp application.',
        githubRepoLink: 'https://github.com/daydin14/whatsapp-clone',
        liveDemoLink: ''
    },
];

export const UdemyProjects = [
    {
        category: 'Udemy',
        image: FormValidator,
        title: 'Form Validator',
        shortDescription: 'A form validation app built with HTML, CSS, and JavaScript.',
        longDescription: 'A form validation app built with HTML, CSS, and JavaScript. This project demonstrates how to validate form inputs on the client side, ensuring that users provide the required information in the correct format before submitting the form. It includes various validation techniques such as checking for empty fields, email format, password strength, and matching passwords.',
        githubRepoLink: 'https://github.com/daydin14/udemy/tree/master/1.Form_Validator',
        liveDemoLink: 'https://daydin14.github.io/udemy/1.Form_Validator'
    },
    {
        category: 'Udemy',
        image: MovieSeatBooking,
        title: 'Movie Seat Booking',
        shortDescription: 'An interactive movie seat booking app built with HTML, CSS, and JavaScript.',
        longDescription: 'An interactive movie seat booking app built with HTML, CSS, and JavaScript. This project allows users to select seats for a movie showing and see the total price based on the selected seats. It includes features such as dynamically updating the seat layout, saving the selected seats and movie information to local storage, and displaying the total cost.',
        githubRepoLink: 'https://github.com/daydin14/udemy/tree/master/2.Movie_Seat_Booking',
        liveDemoLink: 'https://daydin14.github.io/udemy/2.Movie_Seat_Booking'
    },
    {
        category: 'Udemy',
        image: CustomVideoPlayer,
        title: 'Custom Video Player',
        shortDescription: 'A custom video player built with HTML, CSS, and JavaScript.',
        longDescription: 'A custom video player built with HTML, CSS, and JavaScript. This project demonstrates how to create a fully functional video player with custom controls such as play/pause, progress bar, and playback skipping. It provides a better understanding of the HTML5 video element and how to manipulate it using JavaScript.',
        githubRepoLink: 'https://github.com/daydin14/udemy/tree/master/3.Custom_Video_Player',
        liveDemoLink: 'https://daydin14.github.io/udemy/3.Custom_Video_Player'
    },
    {
        category: 'Udemy',
        image: ExchangeRateCalculator,
        title: 'Exchange Rate Calculator',
        shortDescription: 'An exchange rate calculator app built with HTML, CSS, and JavaScript.',
        longDescription: 'An exchange rate calculator app built with HTML, CSS, and JavaScript. This project allows users to convert amounts between different currencies using real-time exchange rates fetched from an external API. It includes features such as selecting currencies, inputting amounts, and displaying the converted amount based on the latest exchange rates.',
        githubRepoLink: 'https://github.com/daydin14/udemy/tree/master/4.Exchange_Rate_Calculator',
        liveDemoLink: 'https://daydin14.github.io/udemy/4.Exchange_Rate_Calculator'
    },
    {
        category: 'Udemy',
        image: DomArrayMethods,
        title: 'DOM Array Methods',
        shortDescription: 'A project demonstrating various DOM array methods using JavaScript.',
        longDescription: 'A project demonstrating various DOM array methods using JavaScript. This project showcases how to manipulate arrays and display the results in the DOM. It includes examples of common array methods such as map, filter, reduce, sort, and forEach, providing a practical understanding of how to use these methods to perform operations on arrays and update the DOM dynamically.',
        githubRepoLink: 'https://github.com/daydin14/udemy/tree/master/5.DOM_Array_Methods',
        liveDemoLink: 'https://daydin14.github.io/udemy/5.DOM_Array_Methods'
    },
    {
        category: 'Udemy',
        image: LandingPage,
        title: 'Landing Page',
        shortDescription: 'A responsive landing page built with HTML, CSS, and JavaScript.',
        longDescription: 'A responsive landing page built with HTML, CSS, and JavaScript. This project demonstrates how to create a visually appealing and functional landing page for a website. It includes features such as a navigation bar, hero section, and various content sections. The page is fully responsive, ensuring a great user experience on both desktop and mobile devices.',
        githubRepoLink: 'https://github.com/daydin14/udemy/tree/master/6.Landing_Page',
        liveDemoLink: 'https://daydin14.github.io/udemy/6.Landing_Page'
    },
    {
        category: 'Udemy',
        image: Hangman,
        title: 'Hangman',
        shortDescription: 'A classic hangman game built with HTML, CSS, and JavaScript.',
        longDescription: 'A classic hangman game built with HTML, CSS, and JavaScript. This project allows users to play the traditional hangman game where they guess letters to form a hidden word. It includes features such as displaying the word with blanks, tracking incorrect guesses, and showing a visual representation of the hangman. The game provides a fun and interactive way to practice JavaScript programming.',
        githubRepoLink: 'https://github.com/daydin14/udemy/tree/master/7.Hangman',
        liveDemoLink: 'https://daydin14.github.io/udemy/7.Hangman'
    },
    {
        category: 'Udemy',
        image: MealFinder,
        title: 'Meal Finder',
        shortDescription: 'A meal finder app built with HTML, CSS, and JavaScript.',
        longDescription: 'A meal finder app built with HTML, CSS, and JavaScript. This project allows users to search for meal recipes by entering keywords or get a random meal. It fetches data from an external API to display a list of meals matching the search criteria. Users can click on a meal to view detailed information, including ingredients and instructions. The app provides a convenient way to discover new recipes and plan meals.',
        githubRepoLink: 'https://github.com/daydin14/udemy/tree/master/8.Meal_Finder',
        liveDemoLink: 'https://daydin14.github.io/udemy/8.Meal_Finder'
    },
    {
        category: 'Udemy',
        image: ExpenseTracker,
        title: 'Expense Tracker',
        shortDescription: 'An expense tracker app built with HTML, CSS, and JavaScript.',
        longDescription: 'An expense tracker app built with HTML, CSS, and JavaScript. This project helps users manage their finances by tracking their income and expenses. Users can add and delete transactions, and the app calculates the total balance, income, and expenses. It provides a clear and organized way to monitor financial activities and make informed decisions.',
        githubRepoLink: 'https://github.com/daydin14/udemy/tree/master/9.Expense_Tracker',
        liveDemoLink: 'https://daydin14.github.io/udemy/9.Expense_Tracker'
    },
    {
        category: 'Udemy',
        image: MusicPlayer,
        title: 'Music Player',
        shortDescription: 'A custom music player built with HTML, CSS, and JavaScript.',
        longDescription: 'A custom music player built with HTML, CSS, and JavaScript. This project allows users to play audio files with custom controls such as play/pause and next/previous track. It includes three sample songs. The music player provides a sleek and interactive interface for enjoying music.',
        githubRepoLink: 'https://github.com/daydin14/udemy/tree/master/10.Music_Player',
        liveDemoLink: 'https://daydin14.github.io/udemy/10.Music_Player'
    },
    {
        category: 'Udemy',
        image: Blog,
        title: 'Blog',
        shortDescription: 'A simple blog platform built with HTML, CSS, and JavaScript.',
        longDescription: 'A simple blog platform built with HTML, CSS, and JavaScript. This project appends more dummy blog posts as the user scrolls. It includes a feature to filter the blog posts with a search bar.',
        githubRepoLink: 'https://github.com/daydin14/udemy/tree/master/11.Blog',
        liveDemoLink: 'https://daydin14.github.io/udemy/11.Blog'
    },
];

export const GAProjects = [
    {
        category: 'GA',
        image: CocktailRecipe,
        title: 'Cocktail Recipe',
        shortDescription: 'A cocktail recipe app built with HTML, CSS, JavaScript, and jQuery.',
        longDescription: 'A cocktail recipe app built with HTML, CSS, JavaScript, and jQuery. Hosted on Vercel, Netlify, or GitHub pages. Utilizes AJAX to make requests to an external data source like OMDBapi and inserts some of the data retrieved into the DOM. Features frequent commits to GitHub dating back to the very beginning of the project. Includes a README.md file with sections such as app description, technologies used, screenshots, getting started instructions, and future enhancements.',
        githubRepoLink: 'https://github.com/daydin14/cocktail-recipe',
        liveDemoLink: 'https://davesdrinkgen.netlify.app/'
    },
    {
        category: 'GA',
        image: OptioBlue,
        title: 'Optio Blue',
        shortDescription: 'A full-stack app with CRUD operations using MongoDB, Mongoose, and ExpressJS.',
        longDescription: 'A full-stack app with CRUD operations using MongoDB and Mongoose. Features at least one data entity representing the main functional idea of the app. Utilizes a CSS stylesheet and optionally a CSS framework like Bootstrap or Materialize. Deployed online on Heroku. Includes a README.md file with sections such as app description, screenshots, technologies used, getting started instructions, and future enhancements.',
        githubRepoLink: 'https://github.com/daydin14/optioBlue',
        liveDemoLink: ''
    },
    {
        category: 'GA',
        image: BuckT,
        title: 'BuckT',
        shortDescription: 'A team project creating a full-stack app with MERN stack.',
        longDescription: 'A team project creating a full-stack app with MERN stack. Features a first-person puzzle-shooter game built using C++ and Epic Games Unreal Engine (4.20) Visual Blueprints languages in Microsoft\'s Visual Studio (2017). Developed and collaborated via GitHub version control platform in pairs. Includes a README.md file with sections such as introduction, technologies used, getting started instructions, unsolved problems, and future enhancements.',
        githubRepoLinks: {
            frontend: 'https://github.com/daydin14/buckT-frontend',
            backend: 'https://github.com/daydin14/buckT-backend'
        },
        liveDemoLink: 'https://buck-it.netlify.app/'
    },
    {
        category: 'GA',
        image: Gaflix,
        title: 'Gaflix',
        shortDescription: 'A full-stack app using the Python-based Django Web Framework.',
        longDescription: 'A full-stack app using the Python-based Django Web Framework. Features planning and presentation requirements including a Trello board with user stories, wireframes of main pages, and an ERD showing the attributes of each entity and their relationships. Deployed online using Heroku. Includes a README.md file with sections such as app description, screenshots, technologies used, getting started instructions, and future enhancements.',
        githubRepoLink: 'https://github.com/daydin14/gaflix',
        liveDemoLink: ''
    },
    {
        category: 'GA',
        image: Capstone,
        title: 'Capstone',
        shortDescription: 'A capstone project using a new stack or technology.',
        longDescription: 'A capstone project using a new stack or technology. Features an idea and technical stack approved by the instructional team. Hosted online and accessible to the public. Includes a git repository with frequent commits dating back to the beginning of the project. Deployed online with a link to the hosted working app in the README.md file. Demonstrates the ability to learn and use a new technology not used in class or previous projects.',
        githubRepoLink: 'https://github.com/daydin14/capstone-frontend',
        liveDemoLink: ''
    },
    {
        category: 'GA',
        image: LitterGame,
        title: 'Litter Game',
        shortDescription: 'GA Hackathon',
        longDescription: 'GA Hackathon on a team of 3 UI/UX Engineers and another Developer including myself.',
        githubRepoLink: 'https://github.com/daydin14/litter-game-frontend',
        liveDemoLink: 'https://cleanup-crew.netlify.app/'
    },
];

export const SJUProjects = [
    {
        category: 'SJU',
        image: PlaceHolder150,
        title: 'SneakersDB',
        shortDescription: 'Database Management Systems Final Project, created a sneaker db using MySQL',
        longDescription: 'MySQL and phpmyadmin Sneaker Database Management Systems project. Designed a MySQL database using PhpMyAdmin, XAMPP, and Apache. Established an Entity Relationship Diagram (ERD) and Relational Schema. Incorporated HTML forms to add, delete, and retrieve information within a table of the database. Connected database and embedded functions via PHP. Assembled a homepage link to test all forms and get table data on the web-client side.',
        githubRepoLink: 'https://github.com/daydin14/SneakersDB',
        liveDemoLink: ''
    },
    {
        category: 'SJU',
        image: PlaceHolder150,
        title: 'MongoBongo',
        shortDescription: 'Final Project for Internet Application Development, creating a database using Mongo, a nosql database, for a pharmaceutical company',
        longDescription: 'Final Project for Internet Application Development, creating a database using Mongo, a NoSQL database, for a pharmaceutical company. Stored data from clinical trials of new drugs following a standard format/schema. Connected a NoSQL, non-relational database, and implemented Create, Read, Update, and Delete functions. Embedded PHP functions within HTML pages. Developed using Secure Shell Protocol (SSH) and Nano. Performed SSH File Transfer Protocol (SFTP).',
        githubRepoLink: 'https://github.com/daydin14/MongoBongo',
        liveDemoLink: ''
    },
    {
        category: 'SJU',
        image: PlaceHolder150,
        title: 'SShooter_sju',
        shortDescription: 'Computer Science Senior Year Final Project, worked alongside my classmate Joe Toczylowskij. Together we created a puzzle shooter game using Epic Game\'s Unreal Engine 4.20 visual blueprints code as well as Microsoft\'s Visual Studio 2017 c++ code.',
        longDescription: 'Computer Science Senior Year Final Project, worked alongside my classmate Joe Toczylowskij. Together we created a first-person puzzle shooter game using Epic Game\'s Unreal Engine 4.20 visual blueprints code as well as Microsoft\'s Visual Studio 2017 C++ code. Constructed a first-person puzzle-shooter game. Built using C++ and Epic Games Unreal Engine (4.20) Visual Blueprints languages in Microsoft\'s Visual Studio (2017). Developed and collaborated via GitHub version control platform in pairs.',
        githubRepoLink: 'https://github.com/daydin14/SShooter_sju',
        liveDemoLink: ''
    }
];

const ProjectDetails = [
    ...RecentProjects,
    ...UdemyProjects,
    ...GAProjects,
    ...SJUProjects
];

export default ProjectDetails;