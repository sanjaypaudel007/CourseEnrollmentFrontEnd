/**
 * Created by sanja on 4/21/2016.
 */
"use strict";

ceApp.factory("Auth", function ($sessionStorage) {
    return {
        isLoggedIn: function () {
            return ($sessionStorage.loggedUser == null) ? false : true;
        },
        hasRole : function(){
            return ($sessionStorage.loggedUser != null) ? $sessionStorage.loggedUser.role : null;
        }

    };
});