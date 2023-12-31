export interface InterfaceDataSparepart {
    kodeJasa : number,
    noRefJasa : string
    namaMaterial : string
    stock : number
    hargaJual : string
    tambahanHarga : number
    nilaiDiskon : number
    persentaseDiskon : number
    jumlah : number
    totalHarga : number
    idSparepart : number;
    namaSparepart : string;
    kodeSparepart : string;
    grupSparepart : number;
    namaLokal : string;
    uom : string;
    kategoriETD : string;
    pajakJual : number;
    rak : string;
    barcode : string;
    hargaClaimOli : number;
    catatan : string;
    tipeKomisi : number;
    satuanKomisi : number;
    nilaiKomisi : number;
    stok : number;
    aktif : boolean;
    isOriginalPart : boolean;
    hargaLokal : number;
    hargaNasional : number;
    grupKodeAHM : number;
    isHotLine : boolean;
    etaTercepat : Date;
    etaTerlama : Date;
    message : string;
    ack : number;
}
