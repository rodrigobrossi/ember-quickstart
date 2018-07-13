import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return ['Caixa de som','Mesa 1', 'Mesa 2'];
    }
});
