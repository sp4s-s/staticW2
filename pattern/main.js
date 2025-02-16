const container = document.getElementById('pattern-container');
const tiltAngleInput = document.getElementById('tiltAngle');
const distanceInput = document.getElementById('distance');
const curveInput = document.getElementById('curve');
const linesCheckbox = document.getElementById('lines');

const tiltValueDisplay = document.getElementById('tiltValue');
const distanceValueDisplay = document.getElementById('distanceValue');
const curveValueDisplay = document.getElementById('curveValue');

let tiltAngle = 0;
let distance = 50;
let curveIntensity = 0;
let showLines = true;

// Update controls display
tiltAngleInput.addEventListener('input', () => {
  tiltAngle = parseInt(tiltAngleInput.value);
  tiltValueDisplay.textContent = `${tiltAngle}°`;
  generatePattern();
});

distanceInput.addEventListener('input', () => {
  distance = parseInt(distanceInput.value);
  distanceValueDisplay.textContent = `${distance}px`;
  generatePattern();
});

curveInput.addEventListener('input', () => {
  curveIntensity = parseInt(curveInput.value);
  curveValueDisplay.textContent = `${curveIntensity}%`;
  generatePattern();
});

linesCheckbox.addEventListener('change', () => {
  showLines = linesCheckbox.checked;
  generatePattern();
});

function generatePattern() {
  container.innerHTML = ''; // Clear previous pattern

  const rows = Math.ceil(window.innerHeight / distance) + 2;
  const cols = Math.ceil(window.innerWidth / distance) + 2;

  for (let row = -1; row < rows; row++) {
    for (let col = -1; col < cols; col++) {
      const div = document.createElement('div');
      div.classList.add('pattern-div');

      // Calculate position with tilt and curve
      const x = col * distance + (row * curveIntensity * 0.1); // Curve effect
      const y = row * distance;

      div.style.left = `${x}px`;
      div.style.top = `${y}px`;
      div.style.transform = `rotate(${tiltAngle}deg)`;

      container.appendChild(div);

      // Draw lines if enabled
      if (showLines && col > -1 && row > -1) {
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.width = `${distance}px`;
        line.style.height = '1px';
        line.style.backgroundColor = '#ccc';
        line.style.left = `${x}px`;
        line.style.top = `${y + distance / 2}px`;
        line.style.transformOrigin = 'left center';
        line.style.transform = `rotate(${tiltAngle}deg)`;
        container.appendChild(line);

        const verticalLine = document.createElement('div');
        verticalLine.style.position = 'absolute';
        verticalLine.style.width = '1px';
        verticalLine.style.height = `${distance}px`;
        verticalLine.style.backgroundColor = '#ccc';
        verticalLine.style.left = `${x + distance / 2}px`;
        verticalLine.style.top = `${y}px`;
        verticalLine.style.transformOrigin = 'center top';
        verticalLine.style.transform = `rotate(${tiltAngle}deg)`;
        container.appendChild(verticalLine);
      }
    }
  }
}

// Initial pattern generation
generatePattern();

// Handle window resize
window.addEventListener('resize', generatePattern);