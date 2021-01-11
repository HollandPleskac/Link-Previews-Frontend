const previewDiv = document.getElementById('preview-div');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', async function () {
  const response = await fetch('http://localhost:3000/',
    {
      method: 'POST',
      body: JSON.stringify({text:'https://www.amazon.com/ is the amazons website'}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    });
    console.log(response.data);
});
