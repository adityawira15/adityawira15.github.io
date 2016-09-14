var Program = {
adit:{
    nama:"adit",
    email: "rtw@sda.com",
    telepon: "(346983)",
    },

agung:{
    nama: "agung",
    email:"gth@haus.com",
    telepon: "(3874834)",
    }

};

var DaftarKontak = [Program.adit,Program.agung];

function printPerson(person) {
    console.log("Nama :" +person.nama + "\n" +"email :" + person.email + "\n"+"telepon :" +person.telepon + "\n");
}

var tambahKontak = function(nama, email, telepon){
DaftarKontak[DaftarKontak.length] = {
    nama: nama,
    email: email,
    telepon: telepon,
};
};

function list() {
	var contactsLength = DaftarKontak.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(DaftarKontak[i]);
	}
}

function search(nama){
var contactsLength = DaftarKontak.length;
    for (var i = 0; i < contactsLength; i++) {
        if(nama == DaftarKontak[i].nama){
        printPerson(DaftarKontak[i]);
        }
    }
};

tambahKontak("rizki", "rizki@hj.com", "34763984");
list();
search("rizki");