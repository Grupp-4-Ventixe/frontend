const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-4">
      <div className="flex">  
       
        <div className="skeleton h-46 w-57 mt-5 ml-5 rounded-2xl"></div>
        
       
        <div className="p-4 flex-1">
          
          <div className="inline-block">
            <h3 className="text-xs font-semibold text-blue-950 uppercase tracking-wider bg-pink-200 px-2 py-1 rounded-md">
              {event.category}
            </h3>
          </div>
          <h2 className="mt-1 text-xl font-bold text-gray-800">
            {event.title}
          </h2>
          <p className="mt-2 text-gray-600">
            {event.description}
          </p>
          <div className="mt-3 text-sm text-gray-700">
            <p>{event.location}</p>
            <p>{event.date}</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div>
              <p className="text-sm font-medium text-gray-500">{event.trustSold}</p>
              <p className="text-xs text-gray-400">Tickets Sold</p>
              <progress className="progress progress-secondary w-56" value="65" max="100"></progress>

            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{event.trustsLeft}</p>
              <p className="text-xs text-gray-400">Tickets Left</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{event.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;