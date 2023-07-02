const apiUrl = 'https://knassbani2.execute-api.us-east-2.amazonaws.com/events/';

export async function fetchEvents(category) {
  const url = `${apiUrl}${category}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}