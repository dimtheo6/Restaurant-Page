import './styles.css';
import  loadHome  from './home';
import { loadMenu } from './menu';
import loadAbout from './about';

loadHome();

document.getElementById('homeBtn').addEventListener('click',()=>{
    document.getElementById('content').innerHTML = "";
    loadHome();
})

document.getElementById('menuBtn').addEventListener('click',()=>{
    document.getElementById('content').innerHTML = "";
    loadMenu();
})

document.getElementById('aboutBtn').addEventListener('click',()=>{
    document.getElementById('content').innerHTML ="";
    loadAbout();
})

