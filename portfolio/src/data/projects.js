// Images
import DrinkGenerator from '../assets/images/project-cards/drink-generator.webp'
import FileConverter from '../assets/images/project-cards/file-converter.webp'
import FileConverterMobile from '../assets/images/project-cards/file-converter-mobile.webp'
import PasswordGenerator from '../assets/images/project-cards/password-generator.webp'
import PasswordGeneratorMobile from '../assets/images/project-cards/password-generator-mobile.webp'
import ChalkboardGames from '../assets/images/project-cards/chalkboard-games.webp'
import ChalkboardGamesMobile from '../assets/images/project-cards/chalkboard-games-mobile.webp'
import AllenhurstCleaners from '../assets/images/project-cards/allenhurst-cleaners.png'
import JokerBlazor from '../assets/images/project-cards/joker-blazor.webp'
import JokerBlazorMobile from '../assets/images/project-cards/joker-blazor-mobile.webp'
import WhatsAppClone from '../assets/images/project-cards/whatsapp-clone.png'
import GuessNumberGame from '../assets/images/project-cards/guess-number-game.png'


export const RecentProjects = [
    {
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'daisyUI'],
        image: FileConverter,
        imageMobile: FileConverterMobile,
        title: 'File Converter',
        shortDescription: 'Convert images, PDFs, and data files in the browser. Nothing is uploaded to a server. Batch results can be downloaded as a ZIP.',
        longDescription: 'File Converter is a free, private, browser-only converter for images, PDFs, and data files such as CSV, JSON, and XLSX. Files stay on the device and are never uploaded to a server. Several files can be converted together and downloaded as a ZIP. The app is built with React, TypeScript, and Vite, and styled with Tailwind CSS and daisyUI. It is deployed on GitHub Pages.',
        githubRepoLink: 'https://github.com/daydin14/file-converter',
        liveDemoLink: 'https://daydin14.github.io/file-converter/',
        favicon: 'https://github.com/daydin14/file-converter/blob/master/public/favicon.svg',
    },
    {
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'daisyUI'],
        badges: [],
        image: PasswordGenerator,
        imageMobile: PasswordGeneratorMobile,
        title: 'Password Generator',
        shortDescription: 'Create cryptographically secure passwords in the browser, with optional dash grouping by 3, 4, or 5 characters. A 2026 remake.',
        longDescription: 'Password Generator is a 2026 remake for creating cryptographically secure passwords in the browser with crypto.getRandomValues. Length and character sets are configurable, and the password can be grouped with dashes every 3, 4, or 5 characters. The app is built with React 19, TypeScript, and Vite, and styled with Tailwind CSS and daisyUI. It is deployed on GitHub Pages.',
        githubRepoLink: 'https://github.com/daydin14/password-generator',
        liveDemoLink: 'https://daydin14.github.io/password-generator/',
        favicon: 'https://github.com/daydin14/password-generator/blob/master/app/public/favicon.svg',
    },
    {
        tags: ['TypeScript', 'React', 'Vite', 'xterm'],
        image: null,
        title: 'Terminal',
        shortDescription: 'A replica terminal to showcase my personal .bash_profile from my dotfiles repository.',
        longDescription: 'A replica terminal using my custom .bash_profile, which can be viewed within my dotfiles repository. This application allows for users to use basic commands like cd and ls, as well as, attempt to allow users to open projects via the terminal.',
        githubRepoLink: 'https://github.com/daydin14/terminal',
        liveDemoLink: 'https://daydin14.github.io/terminal',
        favicon: 'https://github.com/daydin14/terminal/blob/master/public/favicon.svg',
    },
    {
        tags: ['JavaScript', 'React', 'Material UI', 'Google Maps', 'Netlify'],
        image: AllenhurstCleaners,
        title: 'Allenhurst Cleaners',
        shortDescription: 'This web application integrates with the Google Maps API Platform and Google Analytics. Built with React and Material UI. Environment variable management and dual deployment, GH-Pages & Netlify.',
        longDescription: 'Allenhurst Cleaners is a web application designed to integrate with the Google Maps API Platform and Google Analytics. The app is built using React for the front-end and Material UI for the user interface components. It includes features such as environment variable management and dual deployment on both GitHub Pages and Netlify. The integration with Google Maps allows users to locate the cleaners easily, while Google Analytics provides insights into user interactions.',
        githubRepoLink: 'https://github.com/daydin14/allenhurstcleaners_v2',
        liveDemoLink: 'https://allenhurstcleaners.netlify.app/',
        favicon: 'https://github.com/daydin14/allenhurstcleaners_v2/blob/master/optio-blue/public/favicon.ico',
    },
    {
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'daisyUI'],
        badges: [],
        image: DrinkGenerator,
        title: 'Drink Generator',
        shortDescription: 'Find a cocktail by name, by what is already in the cabinet, or pour one at random. A 2026 remake of an earlier recipe app, powered by TheCocktailDB API.',
        longDescription: 'Drink Generator is a 2026 remake of an earlier cocktail recipe project. Search for a drink by name, filter by the ingredients already in the cabinet, or pour something at random. Recipes come from TheCocktailDB API. The app is built with React, TypeScript, and Vite, and styled with Tailwind CSS and daisyUI. It is deployed on GitHub Pages.',
        githubRepoLink: 'https://github.com/daydin14/drink-generator',
        liveDemoLink: 'https://daydin14.github.io/drink-generator/',
        favicon: 'https://github.com/daydin14/drink-generator/blob/master/public/favicon.svg',
    },
    {
        tags: ['React', 'Vite', 'Tailwind CSS', 'daisyUI', 'JavaScript'],
        badges: [],
        image: ChalkboardGames,
        imageMobile: ChalkboardGamesMobile,
        title: 'Chalkboard Games',
        shortDescription: 'Play classic games in the browser, including Dots & Boxes, Battleship, Connect 4, Hangman, and Snake. Rebuilt in 2026 so every game is playable.',
        longDescription: 'Chalkboard Games is a 2026 remake of a collection of classic browser games. Dots & Boxes and Battleship are finished, and Connect 4, Hangman, Snake, and the other games are playable too. The app is built with Vite, React 19, Tailwind CSS, and daisyUI 5. It is deployed on GitHub Pages.',
        githubRepoLink: 'https://github.com/daydin14/chalkboard-games',
        liveDemoLink: 'https://daydin14.github.io/chalkboard-games/',
        favicon: 'https://github.com/daydin14/chalkboard-games/blob/master/app/public/favicon.svg'
    },
    {
        tags: ['JavaScript', 'HTML', 'CSS', 'Markdown',],
        image: GuessNumberGame,
        title: 'Guess Number Game',
        shortDescription: 'A simple, responsive number guessing game that runs in your browser.',
        longDescription: 'A simple, responsive number guessing game that runs in your browser. Choose a range and try to find the randomly selected whole number using the clues of "too high" and "too low". Users can quit and restart to change the number range and random number at any time.',
        githubRepoLink: 'https://github.com/daydin14/guessNumberGame',
        liveDemoLink: 'https://daydin14.github.io/guessNumberGame',
        favicon: '',
    },
    {
        tags: ['C#', 'Blazor', '.NET', 'WebAssembly', 'Mudblazor'],
        badges: [],
        image: JokerBlazor,
        imageMobile: JokerBlazorMobile,
        title: 'JokerBlazor',
        shortDescription: 'A standalone Blazor WebAssembly app that serves programming jokes from JokeAPI, with light and dark themes.',
        longDescription: 'JokerBlazor is a 2026 remake: a standalone Blazor WebAssembly app on .NET 10. It loads programming jokes from JokeAPI and can switch between light and dark themes. The app is deployed on GitHub Pages.',
        githubRepoLink: 'https://github.com/daydin14/JokerBlazor',
        liveDemoLink: 'https://daydin14.github.io/JokerBlazor/',
        favicon: 'https://github.com/daydin14/JokerBlazor/blob/master/JokerBlazor/JokerBlazor/wwwroot/favicon.png',
    },
    {
        tags: ['C#', '.NET', 'Windows Service', 'Serilog', 'SMTP Email'],
        image: null,
        title: 'Joker Service',
        shortDescription: 'A .NET Worker Windows Service using BackgroundService. Logs Computer Programming Jokes and can send emails.',
        longDescription: 'Joker Service is a .NET Worker Windows Service that uses BackgroundService to perform background tasks. The service logs computer programming jokes and has the capability to send emails. It is designed to run continuously in the background, providing a reliable and efficient way to manage and log jokes. The project demonstrates the use of .NET Worker Services for creating background processes and integrating email functionality.',
        githubRepoLink: 'https://github.com/daydin14/JokerService',
        liveDemoLink: '',
        favicon: '',
    },
    {
        tags: ['JavaScript', 'MongoDB', 'Express', 'React', 'Node', 'Material UI', 'Firebase', 'PusherJS'],
        image: WhatsAppClone,
        title: 'WhatsApp Clone',
        shortDescription: 'A real-time messaging app clone built with React, Firebase, and Material-UI.',
        longDescription: 'WhatsApp Clone is a real-time messaging application that replicates the core features of WhatsApp. Built with React for the front-end, Firebase for the backend and real-time database, and Material-UI for the user interface components, this project demonstrates how to create a fully functional chat application. Features include user authentication, real-time messaging, and a responsive design. The app provides a seamless and interactive user experience, similar to the original WhatsApp application.',
        githubRepoLink: 'https://github.com/daydin14/whatsapp-clone',
        liveDemoLink: '',
        favicon: '',
    },
];

const ProjectDetails = [
    ...RecentProjects
];

export default ProjectDetails;