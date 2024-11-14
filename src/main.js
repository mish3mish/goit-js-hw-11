import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const searchValue = event.target.search.value.trim();
  console.log(searchValue);
  if (!searchValue) {
    iziToast.error({
      message: 'The field cannot be empty!',
      position: 'topRight',
    });
    return;
  }

  loader.classList.remove('is-hidden');
  loader.classList.add('is-active');

  gallery.innerHTML = '';

  setTimeout(() => {
    fetchImages(searchValue)
      .then(response => {
        if (response.totalHits === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please, try again!',
            position: 'topRight',
          });
          return;
        }
        gallery.insertAdjacentHTML('beforeend', createMarkup(response.hits));
        const lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        lightbox.refresh();
      })
      .catch(error => console.log(error))
      .finally(() => {
        loader.classList.remove('is-active');
        loader.classList.add('is-hidden');
      });
  }, 500);
}
