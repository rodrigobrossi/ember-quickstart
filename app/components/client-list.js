import Component from '@ember/component';

export default Component.extend({

    actions: {
        showClient(client) {
            alert("Name:" + cient);
        },
        deleteClient(client) {
            var txt;
            var r = confirm("Do you want to delete: " + client+" registry");
            if (r == true) {
                txt = "You pressed OK!";
            } else {
                txt = "You pressed Cancel!";
            }
        }
    }
});
