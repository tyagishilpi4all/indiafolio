export const FbInit = () => {
    window.fbAsyncInit = () => {
        window.FB.init({
            appId: '1196896237183947',
            cookie: true,
            xfbml: true,
            version: 'v3.3',
        });
    };



    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}