console.log('%cPowered by Đàm Minh Giang 😎\n==> https://fb.com/giang.apk', 'font:2.5em Roboto;color:#ff0000');
function generate(){var linkDL=document.getElementById("download"),btn=document.getElementById("btn"),direklink=document.getElementById("download").href,waktu=10;var teks_waktu=document.createElement("span");linkDL.parentNode.replaceChild(teks_waktu,linkDL);var id;id=setInterval(function(){waktu--;if(waktu<0){teks_waktu.parentNode.replaceChild(linkDL,teks_waktu);clearInterval(id);window.location.replace(direklink);linkDL.style.display="inline"}else{teks_waktu.innerHTML="<i class='fa fa-clock-o' aria-hidden='true'/> "+"Tệp đã sẵn sàng để tải xuống sau "+""+waktu.toString()+" Giây....";btn.style.display="none"}},1000)}
