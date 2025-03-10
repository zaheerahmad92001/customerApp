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
import ApplePay from './assets/svgs/appleIcon.svg';
import CardPay from './assets/svgs/debtCard.svg';

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
    status: 'Cancelled',
  },
  {
    id: 2,
    image: images.room, // Replace with your image path
    title: 'Hair Avenue',
    location: 'Lakewood, California',
    distance: '2 km',
    rating: 4.7,
    reviews: 312,
    status: 'Cancelled',
  },
  {
    id: 3,
    image: images.room, // Replace with your image path
    title: 'Hair Avenue',
    location: 'Lakewood, California',
    distance: '2 km',
    rating: 4.7,
    reviews: 312,
    status: 'Cancelled',
  },
  {
    id: 4,
    image: images.room, // Replace with your image path
    title: 'Hair Avenue',
    location: 'Lakewood, California',
    distance: '2 km',
    rating: 4.7,
    reviews: 312,
    status: 'Cancelled',
  },
  {
    id: 5,
    image: images.room, // Replace with your image path
    title: 'Hair Avenue',
    location: 'Lakewood, California',
    distance: '2 km',
    rating: 4.7,
    reviews: 312,
    status: 'Cancelled',
  },
];

const menuOptions = [
  {title: 'Edit Profile', img: EditIcon,  routeName:'editProfile'},
  {title: 'Favorites', img: HeartIcon , routeName:'favorites'},
  {title: 'Booking History', img: HistoryIcon, routeName:'bookingHistory'},
  {title: 'Saved Cards', img: SaveCardIcon, routeName:'savedCard'},
  {title: 'Invoices', img: Invoice, routeName:'invoiceList'},
  {title: 'Requests & Complaints', img: RequestIcon, routeName:'complaints'},
  {title: 'Loyalty Points', img: Discount, routeName:'loyaltyPoints'},
];

const categoriesOptions = [
  {title: 'Salon', img: images.salon},
  {title: 'Spa', img: images.spa},
  {title: 'Nail Art', img: images.nail},
  {title: 'Salon & Spa', img: images.salonSpa},
];

const settingOptions = [ 
  {title: 'Language', routeName:'language'},
  {title: 'Notification Settings' , routeName:'notificationSetting'},
  {title: 'Change Password', routeName:'changePassword'},
  {title: 'Privacy Policy', routeName:'privacyPolicy'},
  {title: 'Terms & Conditions', routeName:'termsCondition'},
  {title: 'Delete Account', routeName:'deleteAccount'},
];

const supportOptions = [{title: 'Contact Us', img: CallIcon ,routeName:'customerSupport'}];

const accountManagement = [ 
  {title: 'Account Settings', img: Setting, routeName:'settings'},
  {title: 'Logout', img: Logout, routeName:'logout'},
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

const languages = ['English', 'العربية',];
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
    title_1: 'Welcome to',
    title_2: 'ANAKA',
    text: 'Your trusted salon booking app – Find the best, book with ease.',
    image: images.intro3,
  },
  {
    key: '2',
    title_1: 'Your Beauty, Our',
    title_2: 'Priority',
    text: 'Explore top salons, book appointments, and enjoy exceptional service with ANAKA.',
    image: images.intro2,
  },
  {
    key: '3',
    title_1: 'Elevate Your Salon',
    title_2: 'Experience with ANAKA',
    text: 'From discovery to booking, we make beauty effortless.',
    image: images.intro1,
  }
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

const notificationData = [
  {
    title: 'Today',
    data: [
      {
        heading: 'Booking Cancelled',
        subHeading: 'You have made a salon payment',
      },
      {
        heading: 'Today’s Special Offers',
        subHeading: 'You have made a salon payment',
      },
      {
        heading: 'Payment Successful!',
        subHeading: 'You have made a salon payment',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        heading: 'Booking Cancelled',
        subHeading: 'You have made a salon payment',
      },
      {
        heading: 'Payment Successful!',
        subHeading: 'You have made a salon payment',
      },
    ],
  },
  {
    title: '17 Aug 2024',
    data: [
      {
        heading: 'Booking Cancelled',
        subHeading: 'You have made a salon payment',
      },
      {
        heading: 'Payment Successful!',
        subHeading: 'You have made a salon payment',
      },
      {
        heading: 'Account Setup Successful!',
        subHeading: 'You have made a salon payment',
      },
    ],
  },
];

const messages = {
  register: {
    title: 'Register Successfully!',
    subheading: 'Your account has been registered successfully.',
  },
  cancel: {
    title: 'Canceled Successfully!',
    subheading: 'Your booking has been canceled successfully.',
  },
  remove: {
    title: 'Removed Successfully!',
    subheading: 'Your salon has been successfully removed from favorites.',
  },
  reschedule: {
    title: 'Reschedule Successfully!',
    subheading: 'Your booking has been reshedule successfully.',
  },
  booking: {
    title: 'Booked Successfully!',
    subheading: 'Your booking has been successfully done.',
  },

};

const complaints =[
  {name:'Pending' , value:'02' , routeName:''},
  {name:'Resolved' , value:'10',routeName:''},
  {name:'Rejected' , value:'01',routeName:''},
]

const staticBookings = [
  {
    date: 'Wed, Sep 10 at 9:30 AM',
    professional: 'Marilyn Vetrovs',
    timeslot: 'Sat 28 Sep 2024 at 9:30 AM',
    services: [
      {name: 'Hair Cut', price: 100},
      {name: 'Hair Wash', price: 50},
    ],
  },
];

const paymentMethods = [
  {
  id: '1', 
  key:'applePay',
  name: 'Apple Pay',
  Icon: ApplePay
  },
  {
    id: '2',
    key:'creditCard',
    name: 'Credit/Debit Card',
    Icon: CardPay,
  },
];
const pointsButtons = ['All', 'Earned Points', 'Used Points'];
const requestStatus = ['Pending', 'Resolved', 'Rejected'];

const openingHours = [
  {id:1,  day:'Monday', time:'Open at: 09AM-10PM'},
  {id:1,  day:'Tuesday', time:'Open at: 09AM-10PM'},
  {id:1,  day:'Wednesday', time:'Open at: 08AM-09PM'},
  {id:1,  day:'Thursday', time:'Open at: 08AM-09PM'},
  {id:1,  day:'Friday', time:'Open at: 09AM-10PM'},
  {id:1,  day:'Saturday', time:'Open at: 09AM-10PM'},
  {id:1,  day:'Sunday', time:'Closed'},
]
const AvailableTimeSlots = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
  '08:00 PM',
  '09:00 PM',
  '10:00 PM',
  '11:00 PM',
  '12:00 AM',
];
const venueList={
  nearBy:'Nearby Venues',
  topRated:'Top Rated Venues',
  recommended:'Recommended Venues',
  similar:'Similar Venues',
}


const filterCategories = ["Salon", "Spa", "Nail Art", "Salon & Spa"];
const filterRatings = [5, 4, 3, 2, "All"];
const filterDistances = ["1 km", "1-5 km", "5-10 km", "10-20 km"];


const statuses = ['Completed', 'Pending', 'Cancelled', 'Confirmed'];

const getRandomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];

const bookingHistory = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1, // Unique ID for each item
  date: 'Sep 10, 2024',
  time: '9:10 AM',
  title: 'Hair Avenue',
  location: 'Lakewood, California',
  services: 'Services: Hair Cut, Hair Wash',
  price: 'SAR 200',
  status: getRandomStatus(), // Assign a random status
  imageUri: images.room,
}));

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
  notificationData,
  messages,
  complaints,
  staticBookings,
  paymentMethods,
  pointsButtons,
  requestStatus,
  openingHours,
  AvailableTimeSlots,
  venueList,
  filterCategories,
  filterRatings,
  filterDistances,
  bookingHistory
};
