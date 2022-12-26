export const npwpFormat = ( nStr : string ) => {
    if ( nStr === null || nStr === undefined ) {
        return '';
    }
    return nStr.replace( /(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})(\d{3})/, '$1.$2.$3.$4-$5.$6' )
};
