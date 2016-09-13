var pengguna = prompt("Ayo suit, pilih jempol, telunjuk, atau kelingking ?");
var lawan = Math.random();
if (lawan <= 0.34) {
	lawan = "jempol";
}
else if (lawan <= 0.67) {
	lawan = " telunjuk";
}else if (lawan <= 1) {
	lawan = "kelingking";
} console.log("computer: "+lawan);
bertarung(pengguna, lawan);
var bertarung = function(pengguna,lawan) {
	if(pengguna === lawan)
	{
		return "Seri!";
	}
	else if(pengguna === "jempol")
    {
        if(lawan === "telunjuk")
        {
            return "kamu menang computer memilih telunjuk :D";
        }
        else
        {
            return "Kamu kalah computer memilih kelingking :'(";   
        }
    }
    else if(pengguna === "telunjuk")
    {
        if(lawan === "kelingking")
        {
            return "Kamu menang computer memilih kelingking :D";
        }
        else
        {
            return "Kamu kalah computer memilih jempol :'(";    
        }
  }
};