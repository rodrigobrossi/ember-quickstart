import Component from '@ember/component';

export default Component.extend({

    actions:{
        showProductDetails(product){
            alert("Product"+product);
        }
    }
});
