function changeColors(){
    colors = ["#fb0404", "#fb8304", "#faeb24", "#3bb44b", "#2caae2", "#2e3192", "#6c2c8c"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    document.body.style.background = randomColor;
    setTimeout(changeColors, 500);
}