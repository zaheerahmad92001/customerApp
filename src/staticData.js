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

const settingOptions = [
  {title: 'Language'},
  {title: 'Notification Settings'},
  {title: 'Change Password'},
  {title: 'Privacy Policy'},
  {title: 'Terms & Conditions'},
  {title: 'Delete Account'},
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

const languages = ['English', 'Arabic', 'Urdu', 'French', 'Spanish', 'Chinese'];
const toggleItems = [
  {id: 1, label: 'Payments', isEnabled: false},
  {id: 2, label: 'Schedule', isEnabled: false},
  {id: 3, label: 'Cancellation', isEnabled: false},
  {id: 4, label: 'Offers Notification', isEnabled: true},
  {id: 5, label: 'Other Notification', isEnabled: false},
];

const reasons = [
  'I am no longer using my account?',
  'The services is too expensive',
  'I want to change my phone number',
  'I don,t understand how to use',
  'Privacy concerns.',
  'Other',
];
const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Eget turpis risus ut nullam posuere porttitor at vivamus. Proin augue morbi viverra scelerisque nunc nulla. Venenatis mattis in ultrices adipiscing. Mi purus augue donec ultricies.',
  },
  {
    question: 'What is React Native?',
    answer:
      'React Native is an open-source framework for building mobile apps using React and JavaScript.',
  },
  {
    question: 'How does state work in React?',
    answer: 'State is a way to manage dynamic data in a React component.',
  },
];

export {
  recentSearches,
  mockData,
  menuOptions,
  supportOptions,
  dummyData,
  invoices,
  languages,
  settingOptions,
  toggleItems,
  reasons,
  faqs,
};
