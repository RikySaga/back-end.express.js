module.exports = {

    // Lima parameter pertama adalah untuk koneksi MySQL.

    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "node_mysql",
    dialect: "mysql",
    pool: {
        max: 5, // jumlah maksimum koneksi di kolam.
        min: 0, // jumlah minimum koneksi di kolam.
        acquire: 30000, // waktu maksimum, dalam milidetik, kumpulan itu akan mencoba mendapatkan koneksi sebelum melempar kesalahan.
        idle: 10000 // waktu maksimum, dalam milidetik, bahwa koneksi dapat menganggur sebelum dilepaskan.
    }
};