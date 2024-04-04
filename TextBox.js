let text=document.getElementById("text");
let textInfo=document.getElementById("textinfo");
let clr;


		function transformUpperCase()
		{

			text.value=text.value.toUpperCase();
		}

		function transformLowerCase()
		 {

			text.value=text.value.toLowerCase();
		}

		function findText()
		{
            let searchText=prompt("Enter the text :");
            if (text.value.includes(searchText)) 
            {
            	alert(`Search text "${searchText}"is present`);
            }
            else
            {
            	alert(`Search text "${searchText}" is  not present`);
            }
		}

		function changeColor() 
		{
			clr=prompt(("Enter your favourite color  :").toLowerCase());

			text.style.color=clr;

		}

		function textUnderline()
		{
			text.style.textDecoration=`underline 2px solid ${clr}`;
		}

		function copyText ()
		{
			navigator.clipboard.writeText(text.value);

		}

		 function changeFontFamily()
		 {
			let fontFamily = prompt("Enter font family:");
			text.style.fontFamily = fontFamily;
		}

		function alignLeft() {
			text.style.textAlign = "left";
		}

		function alignCenter() {
			text.style.textAlign = "center";
		}

		function alignRight() {
			text.style.textAlign = "right";
		}


		function updateInfo()
		{
			let numberOfWords=text.value.trim().split("").length;

			textInfo.innerHTML=`This text contains ${numberOfWords} words and ${text.value.length} characters`; 
		}

