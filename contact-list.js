var DaftarKontak = new Array();
DaftarKontak.Program = new Object();
DaftarKontak.Program.tambahKontak = function(nama, email, telepon){
DaftarKontak[DaftarKontak.length] = {
    nama: nama,
    email: email,
    telepon: telepon,
   }
};
DaftarKontak.Program.LihatSemua = function LihatSemua() {
	var kontak = DaftarKontak.length;
	for (var i = 0; i < kontak; i++) {
		console.log(DaftarKontak[i]);
	}
};
DaftarKontak.Program.cariKontak = function cariKontak(nama){
var kontak = DaftarKontak.length;
    for (var i = 0; i < kontak; i++) {
        if(nama == DaftarKontak[i].nama){
        console.log(DaftarKontak[i]);
        }
    }
};

DaftarKontak.Program.tambahKontak("Ruben","ruben@gmail.com","021777555");
DaftarKontak.Program.tambahKontak("gugel","gugel@gmail.com","021777888")
DaftarKontak.Program.LihatSemua();
DaftarKontak.Program.cariKontak("Ruben");
console.log(DaftarKontak);