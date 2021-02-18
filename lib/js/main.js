// by default no download need
var pack1 = [
	"",
	"chandrabatiOMJ"
]

// downloade files
var pack2 = [
	"lib/font/CHITO___.ttf",
	"lib/font/Charukola_Unicode-Regular.ttf"
]


// load_font_and_push_to_pack1
function loadFont(){
	
	for(let myFont in pack2) {
	
		let fontName = pack2[myFont].split("/")[2].split(".")[0];
		var fontUrl = pack2[myFont];

		var newStyle = document.createElement('style');
		
		

		newStyle.appendChild(document.createTextNode("\
		@font-face {\
		    font-family: " + fontName + ";\
		    src: url('" + fontUrl + "');\
		}\
		"));

		document.head.appendChild(newStyle);
		pack1.push(fontName);
	}
}

function indexController(direction){
	
	if(currentIndex == 0 && direction<0 ){
		currentIndex = pack.length-1;
	}else{
		currentIndex += ( 1 * direction );
		currentIndex = currentIndex % pack.length;
	}

	customText.style.fontFamily = pack[ currentIndex ];
	console.log( "Index: "+ currentIndex);
	console.log( pack[currentIndex] );
}

var pack = pack1;
var customText = document.getElementById("banglaText");
var fontPrev = document.getElementById("fontPrev");
var fontNext = document.getElementById("fontNext");
var currentIndex = 0;

// init
customText.style.fontFamily = pack1[ currentIndex ];
loadFont();

fontPrev.addEventListener("click", function(){
	indexController(-1);
});

fontNext.addEventListener("click", function(){
	indexController(1);
});









