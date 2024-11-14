export function fetchImages(searchValue) {
  const params = new URLSearchParams({
    key: '47046376-5398f80f14019d8274a22c320',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
