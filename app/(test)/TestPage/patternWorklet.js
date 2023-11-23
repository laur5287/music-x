// patternWorklet.js
class Shape {
	paint(ctx, geom, properties) {
		// Your paint worklet logic here
		ctx.strokeStyle = 'white';
		ctx.lineWidth = 4;
		ctx.beginPath();
		ctx.arc(200, 200, 50, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.closePath();
	}
}

CSS.paintWorklet.addModule('patternWorklet.js');