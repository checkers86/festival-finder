function FestivalCard({ name, date, location, description }) {
  return (
    <div className="festival-card">
      <h2>{name}</h2>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
    </div>
  );
}

export default FestivalCard;