// import m from "mithril";
// import UserList from "./views/UserList";

var m = require("mithril").default;
var UserList = require("./views/UserList");
var UserForm = require("./views/UserForm");
var Layout = require("./views/Layout")
// m.render(document.body, UserList)
// m.mount(document.body, UserList)
m.route(document.body,"/list",{
    // "/list": UserList,
    "/list": {
        render: function(){
            return m(Layout,m(UserList))
        }
    },
    // "/edit/:id": UserForm
    "/edit/:id": {
        render: function(vnode){
            return m(Layout,m(UserForm,vnode.attrs))
        }
    }
})

