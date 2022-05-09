const fs=require('fs');
const path=require('path');

let jsLib=fs.readFileSync(path.resolve(__dirname,'./vendor/target.min.js'),'utf-8');
let cssLib=fs.readFileSync(path.resolve(__dirname,'./vendor/pptxjs.css'))

const getPptElement=(url)=>{
		let composeHtml=`<style>${cssLib}</style><script src='https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js'></script>
		<script>${jsLib}</script>
		<div id="result"></div><script>
		$("#result").pptxToHtml({
			pptxFileUrl: "${url}",
			fileInputId: "uploadFileInput",
			slideMode: false,
			keyBoardShortCut: false,
			slideModeConfig: {  //on slide mode (slideMode: true)
				first: 1, 
				nav: false, /** true,false : show or not nav buttons*/
				navTxtColor: "white", /** color */
				navNextTxt:"&#8250;", //">"
				navPrevTxt: "&#8249;", //"<"
				showPlayPauseBtn: false,/** true,false */
				keyBoardShortCut: false, /** true,false */
				showSlideNum: false, /** true,false */
				showTotalSlideNum: false, /** true,false */
				autoSlide: false, /** false or seconds (the pause time between slides) , F8 to active(keyBoardShortCut: true) */
				randomAutoSlide: false, /** true,false ,autoSlide:true */ 
				loop: false,  /** true,false */
				background: "black", /** false or color*/
				transition: "default", /** transition type: "slid","fade","default","random" , to show transition efects :transitionTime > 0.5 */
				transitionTime: 1 /** transition time in seconds */
			}
		});
		
		
		</script>`
		return composeHtml;
}
module.exports=getPptElement;