import { googleMapsApiKey } from '../../lib/env';

const destination = 'Monmouth+County';
const title = 'Google Maps Embedded API Map';

export default function MapEmbed() {
  if (!googleMapsApiKey) {
    return (
      <a
        className="map-fallback"
        href={`https://www.google.com/maps/search/?api=1&query=${destination}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="eyebrow">{title}</span>
        <strong>Monmouth County</strong>
      </a>
    );
  }

  const src = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${destination}`;

  return (
    <iframe
      className="map-frame"
      title={title}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
