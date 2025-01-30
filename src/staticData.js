import images from './assets/images';
import EditIcon from './assets/svgs/edit.svg';
import HeartIcon from './assets/svgs/heart.svg';
import HistoryIcon from './assets/svgs/document.svg';
import Discount from './assets/svgs/discount-shape.svg';
import SaveCardIcon from './assets/svgs/card.svg';
import CallIcon from './assets/svgs/call.svg';
import RequestIcon from './assets/svgs/money.svg';
import Invoice from './assets/svgs/receipt.svg';
import Setting from './assets/svgs/setting.svg';
import Logout from './assets/svgs/logout.svg';
import Receipt from './assets/svgs/invoice.svg';
import Notes from './assets/svgs/notes.svg';
import Salon from './assets/svgs/salon.svg';
import Clock from './assets/svgs/clock.svg';
import Calendar from './assets/svgs/calendar-black.svg';
import Service from './assets/svgs/document-text.svg';

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
    position: 'Cancelled',
  },
];

const menuOptions = [
  {title: 'Edit Profile', img: EditIcon},
  {title: 'Favorites', img: HeartIcon},
  {title: 'Booking History', img: HistoryIcon},
  {title: 'Saved Cards', img: SaveCardIcon},
  {title: 'Invoices', img: Invoice},
  {title: 'Requests & Complaints', img: RequestIcon},
  {title: 'Loyalty Points', img: Discount},
];

const categoriesOptions = [
  {title: 'Salon', img: images.salon},
  {title: 'Spa', img: images.spa},
  {title: 'Nail Art', img: images.nail},
  {title: 'Salon & Spa', img: images.salonSpa},
];

const settingOptions = [
  {title: 'Language'},
  {title: 'Notification Settings'},
  {title: 'Change Password'},
  {title: 'Privacy Policy'},
  {title: 'Terms & Conditions'},
  {title: 'Delete Account'},
];

const supportOptions = [{title: 'Contact Us', img: CallIcon}];

const accountManagement = [
  {title: 'Account Settings', img: Setting},
  {title: 'Logout', img: Logout},
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
const loginlang = ['English', 'العربية'];
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

const discounts = [
  {
    id: '1',
    title: '20% off on first-time booking',
    discount: '20%',
    validity: '24 Oct 2024',
    remaining: '3',
  },
  {
    id: '2',
    title: '15% off on second booking',
    discount: '15%',
    validity: '31 Dec 2024',
    remaining: '5',
  },
];

const allPointData = [
  {id: 1, points: 25, expiryDate: '02/12/2024'},
  {id: 2, points: -50, expiryDate: '03/15/2024'},
  {id: 3, points: 100, expiryDate: '04/10/2024'},
];

const earnPointData = [
  {id: 1, points: 25, expiryDate: '02/12/2024'},
  {id: 2, points: 50, expiryDate: '03/15/2024'},
  {id: 3, points: 100, expiryDate: '04/10/2024'},
];

const usedPointData = [
  {id: 1, points: -25, expiryDate: '02/12/2024'},
  {id: 2, points: -50, expiryDate: '03/15/2024'},
  {id: 3, points: -100, expiryDate: '04/10/2024'},
];

const serviceData = [
  {
    id: '1',
    image: images.room,
    title: 'Hair Avenue',
    location: 'Moratuwa, Colombo',
    date: 'Mon 21 Sep 2024',
    service: 'Hair Cut',
    professional: 'Marilyn Vetrovs',
    distance: '2 km',
  },
];

const slides = [
  {
    key: '1',
    title: 'Welcome to ANAKA',
    text: 'Your trusted salon booking app – Find the best, book with ease.',
    image: images.room,
  },
  {
    key: '2',
    title: 'Your Beauty, Our Priority',
    text: 'Explore top salons, book appointments, and enjoy exceptional service with ANAKA.',
    image: images.room,
  },
  {
    key: '3',
    title: 'Elevate Your Salon Experience with ANAKA',
    text: 'From discovery to booking, we make beauty effortless.',
    image: images.room,
  },
];

const invoiceDetailRows = [
  {
    label: 'Invoice No',
    value: '65548910',
    image: Receipt,
  },
  {
    label: 'Salon',
    value: 'Hair Avenue',
    image: Salon,
  },
  {
    label: 'Service',
    value: 'Facial',
    image: Service,
  },
  {
    label: 'Dates',
    value: 'Wed, 03 Jan 2024',
    image: Calendar,
  },
  {
    label: 'Time',
    value: '01:00 AM',
    image: Clock,
  },
  {
    label: 'Notes',
    value: 'Lorem ipsum dolor sit amet consectetur. pretium etiam.',
    image: Notes,
  },
];

const invoiceSummry = [
  {
    id: 1,
    title: 'All Invoices',
    count: '06',
  },
  {
    id: 1,
    title: 'Paid',
    count: '04',
  },
  {
    id: 1,
    title: 'Cancelled',
    count: '02',
  },
];

export {
  recentSearches,
  mockData,
  menuOptions,
  dummyData,
  invoices,
  languages,
  supportOptions,
  settingOptions,
  accountManagement,
  toggleItems,
  reasons,
  faqs,
  discounts,
  allPointData,
  earnPointData,
  usedPointData,
  categoriesOptions,
  serviceData,
  slides,
  invoiceDetailRows,
  invoiceSummry,
  loginlang,
};
