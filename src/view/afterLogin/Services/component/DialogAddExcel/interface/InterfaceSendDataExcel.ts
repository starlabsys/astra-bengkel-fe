// To parse this data:
//
//   import { Convert } from "./file";
//
//   const modelDataExcel = Convert.toModelDataExcel(json);

export interface ModelDataExcel {
    no : number;
    username : string;
    tanggal : string;
    jam_kedatangan_customer : string;
    no_polisi__no_mesin : string;
    tipe_antrian : string;
    tipe_kedatangan : string;
    activity_capacity : string;
    pemilik : string;
    no_hp : string;
    no_mesin : string;
    tahun_motor : number;
    nama_pembawa : string;
    handphone_pembawa : string;
    no_ktp_pembawa : number;
    alamat_ktp_pembawa : string;
    alamat_domisili : string;
    kota_pembawa : string;
    kecamatan_pembawa : string;
    hubungan_dengan_pemilik : string;
    alasan_ke_ahass : string;
    kilometer_sekarang : number;
    kilometer_berikutnya : number;
    gudang : string;
    customer_yang_datang : string;
    keluhan : string;
    gejala_analisa_service_advisor : string;
    kode_jasa : string;
    kode_spare_part : string;
    jumlah : number;
    service_advisor : string;
    final_inspector : string;
    nama_pemilik : string;
    no_polisi : string;
    customer : string;
    nama_tipe_kendaraan : string;
    warna : string;
    tahun_rakit : number;
    no_rangka : string;
    no_mesin_1 : string;
    title : string;
    nama : string;
    no_ktp : number;
    alamat : string;
    provinsi : string;
    kotakabupaten : string;
    kecamatan : string;
    kelurahan : string;
    no_hp_1 : string;
}

