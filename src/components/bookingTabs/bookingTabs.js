import React from 'react';
import TopTabView from '../../components/loyaltyTabs/TopTabButton';
import { SceneMap } from 'react-native-tab-view';
import PendingBooking from '../../screens/pendingBookingScreen/pendingBooking';
import CompletedBooking from '../../screens/completedBookingScreen/completedBooking';
import CancelledBooking from '../../screens/cancelledBookingScreen/cancelledBooking';
import ConfirmedBooking from '../../screens/confirmedBookingScreen/confirmedBooking';

const scenes = SceneMap({
  pending: () => <PendingBooking />,
  confirmed: () => <ConfirmedBooking />,
  cancelled: () => <CancelledBooking />,
  completed: () => <CompletedBooking />,
});

const routes = [
  { key: 'pending', title: 'Pending' },
  { key: 'confirmed', title: 'Confirmed' },
  { key: 'cancelled', title: 'Cancelled' },
  { key: 'completed', title: 'Completed' },
];

export default function BookingTabs() {
  return <TopTabView routes={routes} scenes={scenes} />;
}