var m = require("mithril").default
var User = require("../models/User")

module.exports = {
    //only calls that function when the component renders. 
    //Also, if the component is ever recreated 
    // (through navigating back and forth through the application),
    // the function won't be called again as expected.
    oninit: User.loadList,

    view: function(){
        // tag is not specified , div is the default. 
        // this is equivalent to "<div class="user-list"></div>."
         // return m('.user-list')

         // looping thro the User.list from models we created. 


        return m(".user-list",User.list.map(function(user){
            return m("a.user-list-item", {href: "/edit/"+user.id,oncreate: m.route.link},user.firstName + " "+user.lastName )
        }))
       
    }
}