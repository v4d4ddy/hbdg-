function setup() {
    let main = select("main");
    const width = main.elt.offsetWidth;
    const height = main.elt.offsetHeight;
  
    let cnv = createCanvas(width, height);
    cnv.parent(main);
    textAlign(CENTER, CENTER);
  }
  
  function draw() {
    textSize(12);
  
    // Glitchy bezier curves
    stroke(
      1.5 + 1.5 * cos(6.28318 * ((millis() / 1000) + 0.30)) * 255,
      0.5 + 0.5 * cos(6.28318 * ((millis() / 1000) + 0.20)) * 255,
      0.5 + 0.5 * cos(6.28318 * ((millis() / 1000) + 0.10)) * 255
    );
    bezier(
      85 * sin(frameCount / 100) + frameCount % width,
      20 + frameCount % height,
      90 + frameCount % height,
      10 + sin(frameCount / 100) + frameCount % height,
      30 + frameCount % width,
      30 + frameCount % width * sin(frameCount / 100),
      85 * sin(frameCount / 100) + frameCount % width,
      20 + frameCount % width
    );
  
    // Glitchy rectangles
    for (let i = 0, j = 20; i < j; i++) {
      rect(
        i * cos(i * 0.01 * frameCount),
        i * height / j,
        width * (0.5 * cos(frameCount * 0.01) + 1),
        i * 0.5 * sin(frameCount * 0.01)
      );
    }
  
    // Pulsating ellipse with dynamic color
    let r = 150 + 100 * sin(frameCount * 0.05); // Red oscillation
    let g = 200 + 55 * cos(frameCount * 0.03); // Green oscillation
    let b = 220 + 35 * sin(frameCount * 0.07); // Blue oscillation
    fill(r, g, b, 150); // Dynamic color with slight transparency
    ellipse(
      width / 2,
      height / 2,
      0.25 * width * sin(frameCount),
      0.25 * width * sin(frameCount / 20)
    );
  
    // Central text message
    // textSize(32);
    // fill(0);
    // text("HAPPY BIRTHDAY G!", width / 2, height / 2);
    // textSize(18);
    // fill(0);
    // text("Here's an (unordered) birthday playlist, ft. some music I like :) Happy listening!", width / 2, height / 1.8);
    // textSize(8);
    // fill(0);
    // text("❤️ _vdaddy", width / 2, height / 1.7);


  
    // Dynamic mouse circle
    fill(["green", "purple", "black"][frameCount % 2]);
    circle(mouseX, mouseY, frameCount % 5);
  
    // Random emojis and phrases
    textSize(48);
    if (frameCount % 13 === 0) {
      text(
        ["❤️", "💫", "😘", "✨", "❤️", "💫"][
          Math.floor(Math.random() * 6) // Use the correct array size for random
        ],
        mouseX,
        mouseY
      );
    }
  
    // Randomly placed emoji
    text(
      "✨",
      Math.floor(random(0, 5)) * (width / 5) + width / 10,
      Math.floor(random(0, 5)) * (height / 5) + height / 10
    );
  }
  
  function windowResized() {
    let main = select("main");
    const width = main.elt.offsetWidth;
    const height = main.elt.offsetHeight;
    resizeCanvas(width, height);
  }
  