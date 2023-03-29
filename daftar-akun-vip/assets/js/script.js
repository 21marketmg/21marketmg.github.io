function makeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

window.addEventListener('DOMContentLoaded', function() {
    const buttonGenerate = $('.generate-akun-vip');

    $(buttonGenerate).click(function(e) {
        e.preventDefault();
        // const username = $('#username');
        const website = $('#website');
        const server = $('#server');
        const vipCode = makeId(5);
        const akunVipContainer = $('.akun-vip-container');
        const akunVip = $('.akun-vip')
        const namaWebsite = $('.nama-website')

        // if($(username).val() == '') {
        //     return swalFire('error', 'Ups', 'Username harus diisi');
        // }

        let targetUrl = '';
        const websiteValue = $(website).val();

        if(websiteValue == '') {
            return swalFire('error', 'Ups', 'Nama situs harus dipilih');
        } else if(websiteValue == 'Rokokslot') {
            targetUrl = 'https://rokokslotvip4.com/register';
        } else if (websiteValue == 'For4D') {
            targetUrl = 'https://totofor4d.com/register.php';
        } else if (websiteValue == 'Rokokbet') {
            targetUrl = 'https://csrokokbet.com/register.php';
        } else if (websiteValue == 'Bet4D') {
            targetUrl = 'https://csbet4d1.com/signup';
        } else if (websiteValue == 'Okewla') {
            targetUrl = 'https://bookewla.com/signup';
        } else if (websiteValue == 'Shiowla') {
            targetUrl = 'https://mgshiowla.com/signup';
        } else if (websiteValue == 'Mega4D') {
            targetUrl = 'https://csmega4d1.com/signup';
        } else {
            return swalFire('error', 'Ups', 'Terjadi kesalahan');
        }

        let serverLocation = $(server).val();
        
        if(serverLocation == '') {
            return swalFire('error', 'Ups', 'Server harus dipilih');
        }

        // const newAkunVip = $(username).val() + 'VIP' + vipCode;
        const newAkunVip = 'VIP' + vipCode;

        $(akunVipContainer).css('display', 'block');
        $(namaWebsite).text(websiteValue);
        $(namaWebsite).parent().attr('href', targetUrl);
        $(akunVip).text(newAkunVip);

        Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: 'Silahkan daftar di situs '+ websiteValue +' dengan username VIP berikut '+ newAkunVip + ' . Username tersebut telah berhasil terdaftar sebagai akun vip di server ' + serverLocation,
            confirmButtonText: 'Daftarkan sekarang',
            confirmButtonColor: '#fc3b00',
            showCancelButton: true,
            cancelButtonText: 'Kembali',
            reverseButtons: true
        }).then((result) => {
            if(result.isConfirmed) {
                navigator.clipboard.writeText(newAkunVip);
                Swal.fire({
                    icon: 'success',
                    title: 'Username dicopy',
                    text: 'Username VIP telah dicopy',
                }).then(() => {
                    window.open(targetUrl, '_blank');
                });
            }
        });

    })
});

function swalFire(icon, title, text) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
    });
}