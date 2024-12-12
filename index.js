/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
// ini merupkana kode yang sebelumnya
// function showDownload(result) {
//   console.log("Download selesai");
//   console.log("Hasil Download: " + result);
// }
const showDownload = async () => {
  const result = await download();
  console.log(`Download selesai\nHasil Download: ${result}`);
};
// showDownload()
/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */
// ini fungsi sebelumnya
// function download(callShowDownload) {
//   setTimeout(function () {
//     const result = "windows-10.exe";
//     callShowDownload(result);
//   }, 3000);
// }
const download = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = "windows-10.exe";
      resolve(result); // Menyelesaikan Promise dengan hasil
    }, 3000); // Simulasi proses asynchronous selama 3 detik
  });
};

showDownload();
// ini panggilan sebelumnya.
//   download(showDownload);

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
