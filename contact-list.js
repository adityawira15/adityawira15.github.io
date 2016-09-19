var DaftarKontak = [];
var Program = new Object();
Program.tambahKontak = function(nama, email, telepon){
DaftarKontak[DaftarKontak.length] = {
    nama: nama,
    email: email,
    telepon: telepon,
   }
};
Program.LihatSemua = function LihatSemua() {
	var kontak = DaftarKontak.length;
	for (var i = 0; i < kontak; i++) {
		console.log(DaftarKontak[i]);
	}
};
Program.cariKontak = function cariKontak(nama){
var kontak = DaftarKontak.length;
    for (var i = 0; i < kontak; i++) {
        if(nama == DaftarKontak[i].nama){
        console.log(DaftarKontak[i]);
        }
    }
};

Program.tambahKontak("Ruben","ruben@gmail.com","021777555");
Program.tambahKontak("gugel","gugel@gmail.com","021777888")
Program.LihatSemua();
Program.cariKontak("Ruben");