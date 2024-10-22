const imageContainer = document.getElementById('image-container');
const textBox = document.getElementById('textbox');
const typingDelay = 22;
let textIndex = 0;
let timerId;

function typeText(text) {
  textBox.textContent = text.substr(0, textIndex);
  textIndex++;
  if (textIndex <= text.length) {
    timerId = setTimeout(function() {
      typeText(text);
    }, typingDelay);
  }
}

imageContainer.addEventListener('mouseover', function() {
  const text = "This is a typing animation!"; // 원하는 텍스트로 교체
  textIndex = 0;
  clearTimeout(timerId);
  typeText(text);
  textBox.style.display = 'flex'; // 텍스트 박스 표시
});

imageContainer.addEventListener('mouseout', function() {
  textBox.textContent = '';
  textBox.style.display = 'none'; // 텍스트 박스 숨기기
  clearTimeout(timerId);
});
