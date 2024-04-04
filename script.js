const gallery = document.querySelector('.gallery');
const loadPhotosBtn = document.getElementById('loadPhotosBtn');
const loader = document.querySelector('.loader');

loadPhotosBtn.addEventListener('click', async () => {
  try {
    loader.style.display = 'block';
    const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
    if (!response.ok) {
      throw new Error('Ошибка загрузки фото');
    }
    const data = await response.json();
    displayPhotos(data.message);
  } catch (error) {
    console.error(error);
  } finally {
    loader.style.display = 'none';
  }
});

function displayPhotos(photos) {
  gallery.innerHTML = '';
  photos.forEach(photoUrl => {
    const img = document.createElement('img');
    img.src = photoUrl;
    img.classList.add('photo');
    gallery.appendChild(img);
  });
}