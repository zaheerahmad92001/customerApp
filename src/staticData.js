import images from "./assets/images";

const recentSearches = [
    'Beauty Unleashed',
    'Big Hair We Care',
    'Addictive Beauty',
    "Alexandra's Salon",
  ];
  const mockData = [
    {
      id: 1,
      image: images.room, // Replace with your image path
      title: 'Hair Avenue',
      location: 'Lakewood, California',
      distance: '2 km',
      rating: 4.7,
      reviews: 312,
    },
    {
      id: 2,
      image: images.room, // Replace with your image path
      title: 'Beauty Unleashed',
      location: 'Downtown, New York',
      distance: '1.5 km',
      rating: 4.9,
      reviews: 450,
    },
  ];


export {recentSearches ,mockData}