export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
  return date.toLocaleDateString('es-ES', options);
}

export function formatLocation(location) {
  return `${location.place} • ${location.city}, ${location.state}`
}

export function formatPrice(price) {
  return price === 0 ? 'Free' : `$${price.toFixed(2)}`
}