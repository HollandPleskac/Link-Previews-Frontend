const previewList = document.getElementById('preview-list');
const submitBtn = document.getElementById('submit-btn');
const textarea = document.querySelector('textarea');

submitBtn.addEventListener('click', async function () {
  const textContent = textarea.value;
  const response = await fetch('http://localhost:3000/',
    {
      method: 'POST',
      body: JSON.stringify({ text: textContent }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    });
  console.log(response.data);

  for (i = 0; i < response.data.length; i++) {
    previewList.insertAdjacentHTML(
      'beforeend',
      `<div class="preview-div">
        <img src="${response.data[i].image || './img/img_not_found.svg'}"
          alt="${response.data[i].title}">
        <div class="preview-content" style="background-color:${response.data[i].themeColor === "#000000" ? "#fff" : response.data[i].themeColor}">
          <h2>${response.data[i].title}</h2>
          <p>${response.data[i].description}</p>
        </div>
      </div>`
    );
  }

});
