// muudab kuupäeva kujult YYYY-MM-DD kujule DD.MM.YYY
function convertDate(strDate) {
    let parts = strDate.split('/');
    if ((String(parts[1]).length === 1) && ((String(parts[0]).length === 1))) {
        return ('0' + String(parts[1]) + '.' + '0' + String(parts[0]) + '.' + parts[2]);
    } else if  (String(parts[1]).length === 1) {
        return ('0' + String(parts[1]) + '.' +parts[0] + '.' + parts[2]);
    } else if  (String(parts[0]).length === 1) {
        return (parts[1] + '.' + '0' + String(parts[0]) + '.' + parts[2]);
    } else {
        return (parts[1] + '.'+ parts[0] + '.' + parts[2]); 
    };

};

function convertComp(Company) {
    if(Company !== null && Company !== '') {
        let parts = Company.split(' ');
        return parts[0]
     };
    
};

function z(Company) {
    if(Company !== null && Company !== '') {
        return '0'
     } 
    
};






module.exports = {
    convertDate: convertDate,
    convertComp:convertComp,
    z:z,
};