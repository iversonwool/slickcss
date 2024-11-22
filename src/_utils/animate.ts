type AnimateParams = {
  timing: (t: number) => number
  draw: (p: number) => void
  duration: number
}

function animate({timing, draw, duration}: AnimateParams) {

  let start = performance.now();

  const requestId = requestAnimationFrame(function animate(time) {
    // timeFraction 从 0 增加到 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // 计算当前动画状态
    let progress = timing(timeFraction);

    draw(progress); // 绘制

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });

  return () => {
    cancelAnimationFrame(requestId)
  }
}

export {
  animate
}
