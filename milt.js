var timeout	= 500;
var closetimer	= 0;
var ddmenuitem	= 0;

// open hidden elements
function milton1(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed elements
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close elements when click-out
document.onclick = mclose; 
	
	// ImageSlide Show start
		
		 var imagecount = 1;
            var total= 6;
            
            function slide(x) {
                var Image = document.getElementById("milton");
                imagecount = imagecount + x;
                if(imagecount > total){imagecount =1;}
                if(imagecount < 1){imagecount =total;}
                Image.src = "images/"+ imagecount +".jpg";//missing ".jpg" here that's why your code doesn't work
            }
            window.setInterval(function slideA() {
                var Image = document.getElementById('milton');
                imagecount = imagecount + 1;
                if(imagecount > total){imagecount =1;}
                if(imagecount < 1){imagecount =total;}
                Image.src = "images/"+ imagecount +".jpg";//missing ".jpg" here that's why your code doesn't work
            },5000);
		
	//ImageSlide show end
	
	//Monthly Payment elements start
		
		function computeLoan(){
			var amount = document.getElementById('amount').value;
			var interest_rate = document.getElementById('interest_rate').value;
			var months = document.getElementById('months').value;
			var interest = (amount * (interest_rate * .01)) / months;
			var payment = ((amount / months) + interest).toFixed(2);
		
		payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;
}
		
	//Monthly Payment elements end
	
	//animation part
	
		var scrollY = 0;
            var distance = 40;
            var speed = 24;
            function autoScrollTo(el) {
                var currentY = window.pageYOffset;
                var targetY = document.getElementById(el).offsetTop;
                var bodyHeight = document.body.offsetHeight;
                var yPos = currentY + window.innerHeight;
                var animator = setTimeout('autoScrollTo(\''+el+'\')',24);
                if(yPos > bodyHeight) {
                    clearTimeout(animator);  
                }else {
                    if(currentY < targetY-distance) {
                        scrollY = currentY+distance;
                        window.scroll(0, scrollY);
                    }else {
                        clearTimeout(animator);   
                    }
                }
            }
            function resetScroller(el) {
                var currentY = window.pageYOffset;
                var targetY = document.getElementById(el).offsetTop;
                var animator = setTimeout('resetScroller(\''+el+'\')',speed);
                if(currentY > targetY) {
                    scrollY = currentY-distance;
                    window.scroll(0, scrollY);
                }else {
                    clearTimeout(animator);   
                }
            }