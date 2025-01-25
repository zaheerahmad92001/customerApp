import images from './assets/images';

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
    position: 'Paid',
  },
];

const menuOptions = [
  {title: 'Edit Profile', img: images.shop},
  {title: 'Favorites', img: images.service},
  {title: 'Booking History', img: images.document},
  {title: 'Saved Cards', img: images.clock},
  {title: 'Invoices', img: images.calendar},
  {title: 'Requests & Complaints', img: images.shop},
  {title: 'Loyalty Points', img: images.document},
];

const supportOptions = [
  {title: 'Edit Profile', img: images.shop},
  {title: 'Favorites', img: images.service},
  {title: 'Booking History', img: images.document},
  {title: 'Saved Cards', img: images.clock},
];

const dummyData = {
  items: [
    {name: 'Hair Cut', price: 100},
    {name: 'Hair Wash', price: 50},
  ],
  discount: -20,
  vatRate: 15,
};

const invoices = [
  {
    id: '1',
    date: 'Sep 10, 2024',
    time: '9:10 AM',
    name: 'Desirae Carder',
    service: 'Smart Cut',
    status: 'Paid',
    amount: 'SAR 250',
  },
  {
    id: '2',
    date: 'Sep 10, 2024',
    time: '9:10 AM',
    name: 'Desirae Carder',
    service: 'Smart Cut',
    status: 'Cancelled',
    amount: 'SAR 250',
  },
];

export {
  recentSearches,
  mockData,
  menuOptions,
  supportOptions,
  dummyData,
  invoices,
};
