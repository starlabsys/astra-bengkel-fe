// To parse this data:
//
//   import { Convert, ModelListMekanik } from "./file";
//
//   const modelListMekanik = Convert.toModelListMekanik(json);

export interface ModelListMekanik {
    errorCode : string;
    status : boolean;
    message : string;
    data : Data;
}

export interface Data {
    listOfKaryawanModel : ListOfKaryawanModel[];
    totalRow : number;
    message : string;
    ack : number;
}

export interface ListOfKaryawanModel {
    action : number;
    id : number;
    kodeKaryawan : string;
    namaKaryawan : string;
    jenisKelamin : string;
    alamat : string;
    city : City;
    province : Province;
    noTelepon : string;
    noHP : string;
    kTP : string;
    tanggalMasuk : Date;
    tanggalBerhenti : Date;
    area : Area;
    email : string;
    catatan : string;
    tempatLahir : string;
    tanggalLahir : Date;
    agama : number;
    berlakuKTP : Date;
    kebangsaan : number;
    statusKawin : number;
    statusKaryawan : number;
    statusKomisi : number;
    tipeKomisi : number;
    satuanKomisi : string;
    nilaiKomisi : number;
    statusPIT : number;
    nik : string;
    listJabatan : ListJabatan[];
    listPayroll : ListPayroll[];
    listTraining : ListTraining[];
    aktif : boolean;
}

export interface Area {
    id : number;
    provinceID : number;
    cityID : number;
    zipCode : string;
    kelurahan : string;
    kecamatan : string;
    kabupaten : string;
    ahmCode : string;
    bpsCode : string;
    rowStatus : number;
}

export interface City {
    id : number;
    text : string;
    rowStatus : number;
    flag : number;
}

export interface ListJabatan {
    jabatanID : number;
    jabatan : string;
}

export interface ListPayroll {
    payrollID : number;
    gaji : string;
    nilaiGaji : number;
    aktif : boolean;
}

export interface ListTraining {
    trainingLevelMekanikID : number;
    trainingLevel : string;
    jabatanID : number;
}

export interface Province {
    id : number;
    value : string;
    provinceCode : string;
    text : string;
}

// Converts JSON strings to/from your types
export class ConvertModelListMekanik {
    public static toModelListMekanik( json : string ) : ModelListMekanik {
        return JSON.parse( json );
    }

    public static modelListMekanikToJson( value : ModelListMekanik ) : string {
        return JSON.stringify( value );
    }
}
