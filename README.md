
# React Hooks Movie App

A simple and interactive movie app built with React Hooks where you can showcase your favorite movies and TV shows. This app demonstrates the use of React Hooks for state management and includes features for adding and filtering movies.

## Features

- 📽️ **Add New Movies**: Add your favorite movies and TV shows with details
- 🔍 **Filter by Title**: Search movies by title in real-time
- ⭐ **Filter by Rating**: Filter movies based on minimum rating
- 📱 **Responsive Design**: Clean, card-based layout that works on all devices
- ⚡ **React Hooks**: Built using modern React Hooks for state management

## Movie Attributes

Each movie/TV show includes:
- **Title**: Name of the movie or TV show
- **Description**: Brief description or synopsis
- **Poster URL**: Image URL for the movie poster
- **Rating**: Numeric rating (0-10 scale)

## Components

### 🎬 MovieCard
Displays individual movie information including poster, title, description, and rating in a card format.

### 📋 MovieList
Renders a collection of MovieCard components based on the current movie data and applied filters.

### 🔍 Filter
Provides input fields to filter movies by:
- Title (text search)
- Rating (minimum rating filter)

### ➕ AddMovie
Form component that allows users to add new movies with all required attributes.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd React-hooks
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` (or the port shown in your terminal)

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## Project Structure

```
React-hooks/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   ├── Filter.js
│   │   └── AddMovie.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Usage

### Adding a Movie
1. Fill in the form fields:
   - Title: Enter the movie/show name
   - Description: Add a brief description
   - Poster URL: Provide a valid image URL
   - Rating: Enter a rating between 0-10
2. Click "Add Movie" to add it to your collection

### Filtering Movies
- **By Title**: Type in the title filter box to search movies
- **By Rating**: Enter a minimum rating to show only movies with that rating or higher

### Sample Data
The app comes pre-loaded with two sample movies:
- Inception (Rating: 8.8)
- Breaking Bad (Rating: 9.5)

## Technologies Used

- **React 18.2.0**: JavaScript library for building user interfaces
- **React Hooks**: useState for state management
- **React Scripts 5.0.1**: Build tools and configuration
- **CSS3**: Styling and responsive design

## React Hooks Used

- **useState**: Managing movie data, filter states, and form inputs
- **Functional Components**: All components are built as functional components

## Browser Support

This project supports all modern browsers:
- Chrome (last version)
- Firefox (last version)  
- Safari (last version)
- Edge (last version)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- 🎨 Add movie genres and genre-based filtering
- 💾 Local storage to persist movie data
- 📊 Movie statistics and analytics
- 🎭 Advanced search with multiple criteria
- 🌙 Dark/Light theme toggle
- 📱 Progressive Web App (PWA) features

## License

This project is open source and available under the [MIT License](LICENSE).

## Troubleshooting

### Images Not Loading
If movie poster images are not displaying:
1. Check that the poster URL is valid and accessible
2. Ensure the image URL supports CORS (Cross-Origin Resource Sharing)
3. Try using different image hosting services like:
   - ImgBB
   - Cloudinary
   - Direct links from movie databases

### Development Server Issues
If you encounter port conflicts:
```bash
# Kill existing Node processes
taskkill /f /im node.exe

# Or set a custom port
set PORT=3001 && npm start
```

---

Built with ❤️ using React Hooks
