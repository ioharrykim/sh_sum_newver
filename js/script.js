(function ($) {

    // 변수 선언
    var loginBtn = $('#login1');
    var bannerBtn = $('#button1');
    var apiBtn = $('#apibutton');
    var loginAns = $('div.loginbutton > p');

    function loginSum() {
        var loginVal = $("[name=loginsum]").val();
        // console.log(loginVal);
        var loginValSum = (loginVal.match(/mem_id/g) || []).length;
        loginAns.text(loginValSum - 2);
    }

    function bannerSum() {
        var bannerVal = $("[name=bannersum]").val();
        console.log(bannerVal);
        var banner1ValSum = (bannerVal.match(/013293/g) || []).length;
        var banner3ValSum = (bannerVal.match(/213&page=1/g) || []).length;
        var banner4ValSum = (bannerVal.match(/19971/g) || []).length;
        var banner5ValSum = (bannerVal.match(/19971/g) || []).length;
        var banner6ValSum = (bannerVal.match(/25910/g) || []).length;
        var banner7ValSum = (bannerVal.match(/25908/g) || []).length;
        var banner8ValSum = (bannerVal.match(/25916/g) || []).length;
        $('div.banner1 > p').text(banner1ValSum);
        $('div.banner2 > p').text(banner1ValSum);
        $('div.banner3 > p').text(banner3ValSum);
        $('div.banner4 > p').text(banner4ValSum);
        $('div.banner5 > p').text(banner5ValSum);
        $('div.banner6 > p').text(banner6ValSum);
        $('div.banner7 > p').text(banner7ValSum);
        $('div.banner8 > p').text(banner8ValSum);
    }

    function apiCreate() {
        var dateVal = $("[name=ondate]").val();
        console.log(dateVal);
        $('div.apilogin > a').attr('href', 'http://shf.nebi.co.kr/s/stat.php?date=2021-'+dateVal+'');
        $('div.apilogin > a').text(dateVal+' 로그인 기록');
        $('div.apibanner > a').attr('href', 'http://shf.nebi.co.kr/s/banner.php?date=2021-'+dateVal+'');
        $('div.apibanner > a').text(dateVal+' 배너 클릭 기록');
    }

    loginBtn.click(function () {
        loginSum();
    });
    bannerBtn.click(function () {
        bannerSum();
    });

    apiBtn.click(function() {
        apiCreate();
    });
    


})(jQuery);
