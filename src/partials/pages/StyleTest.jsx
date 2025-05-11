import '../../styles/button.css';
import Header from '../../components/Header/Header';
import EventCard from '../../components/UserEvents/EventCard';

const StyleTest = () => {
  const adventureEvent = {
    category: "Outdoor & Adventure",
    title: "Adventure Gear Show",
    description: "Top outdoor brands showcase the latest gear. Discounts, demos, and expert consultations.",
    location: "Rocky Ridge Hall, Denver, CO",
    date: "June 5, 2029 – 3:00 PM",
    trustSold: "65%",
    trustsLeft: "115",
    price: "$40"
  };


  return (
    <div>
      <Header
        title="Dashboard"
        breadcrumb="Dashboard"
      />

      <button className="button button-primary" style={{ marginRight: '1rem' }}>Button</button>
      <button className="button button-secondary" style={{ marginRight: '1rem' }}>Button</button>
      <button className="button button-ghost">Button</button>

      <div className="mx-auto bg-gray-50 p-4 mt-8 w-full max-w-7xl">
        <EventCard event={adventureEvent} />
      </div>
    </div>
  );
};

export default StyleTest;