/* Rancanglah sebuah JavaScript dengan ketentuan seperti dibawah :
1. memiliki 5 variables :
	* nama lengkap	contoh : Kechap Tamazola
	* berat	dalam (kg) contoh : 300
	* tinggi dalma (cm)	contoh : 500
	* tanggal lahir contoh : (31 Desember 1980)
	* banyak minum dalam satu hari (ml) contoh : 500
2. kemudian gunakan conditional formating yang menentukan apakah Body Mass Index kita baik
gunakan referensi dibawah ini :
	* Rumus https://4.bp.blogspot.com/-nBF9Z1tFGhI/W3MqbdD0j7I/AAAAAAAAAIs/UdyXTIxsBT8Pl8usABxEK_Fusj5S0SnBQCLcBGAs/s1600/HOW%2BTO%2BCALCULATE%2BBODY%2BMASS%2BINDEX%2BBMI.jpg
	* Standart https://pbs.twimg.com/media/EICh-loW4AIACJp.jpg
variable yang digunakan : bmi, kondisibmi
kemudian outputkan seperti dibawah menggunakan template literal:
Halo, nama saya Kechap Tamazola berat saya 300kg, tinggi saya 500cm. Saya lahir pada tanggal 31 Desember 1980, saat ini nilai BMI saya 25, dan saya sedikit overweight. Saya meminum air putih sebanyak 500ml perhari, dan kelihatannya saya [inline conditional - jika : >=1500 text = sudah cukup , jika kurang dari 1500, text = masih kurang minum air putih dan saya harus meminum sebanyak (1500 - air yang diminum)ml lagi)]
**** 
Halo, nama saya Kechap Tamazola berat saya 300kg, tinggi saya 500cm. Saya lahir pada tanggal 31 Desember 1980, saat ini nilai BMI saya 25, dan saya sedikit overweight. Saya meminum air putih sebanyak 500ml perhari, dan kelihatannya saya masih kurang minum air putih dan saya harus meminum sebanyak 1000ml lagi
****
	
** normal conditional **
if(x == 2) {
	result = z+2
}else {
	result = z-2
}
**
	
** inline conditional **
x == 2 ? z + 2 : z - 2
**
*/

/*** YOUR APP BELOW HERE ***/
var name = "Fikri";
var berat = 61; //kg
var tinggi = 170; //cm
var birthday = "03 januari 2005";
var minum = 1000 ; //ml
var tinggi2 = tinggi / 100;//merubah satuan tinggi dari cm ke m

var bmi = berat / Math.pow(tinggi2,2);
var bmi2 = bmi.toFixed(2);//membatasi angka desimal
/*---jika ingin dibulatkan bisa pakai ini : var bmi2 = Math.round(bmi);*/

if(bmi2 < 18.5){
	kondisi = "dan ternyata berat badan saya dibawah normal"
}else if(bmi2 > 18.5 && bmi2 < 25){
	kondisi = "dan ternyata berat saya normal"
}else if(bmi2>=25 && bmi2<30 ) {
	kondisi = "dan ternyata berat saya sudah overweight"
}else if(bmi2 >= 30 && bmi2 <35){
	kondisi ="dan ternyata berat saya sudah obesitas kelas 1"
}else if(bmi2 >= 35 && bmi2 <40){
	kondisi ="dan ternyata berat saya sudah obesitas kelas 2"
}else if(bmi2 >= 40){
	kondisi ="dan ternyata berat saya sudah obesitas kelas 3"
}

console.log(`Halo, nama saya ${name} berat saya ${berat}, tinggi saya ${tinggi} cm. Saya lahir pada tanggal ${birthday}, saat ini nilai BMI saya ${bmi2},${kondisi}. Saya meminum air putih sebanyak ${minum}ml perhari, dan kelihatannya saya ${minum < 1500 ? `masih kurang minum air putih dan saya harus meminum sebanyak ${1500-minum}ml lagi` : "sudah cukup minum air putih"}`)





