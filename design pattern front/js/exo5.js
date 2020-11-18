let shopList = (function(){

    let instance

    function init() {

        let list = []

        function getList() {
            return list
        }

        function addItem(item) {
            
            if (typeof quantity !== 'number') {
                throw new Error('quantity must be a number')
            }

            list.push({
                'item' : item,
                'quantity': quantity,
            })
        }

        return {
            getList: getList
            getNumberOfItems: function() {
                return list.lenght
            }
            addList: addItem
        }
    }

    function getInstance(){
        if (!instance) {
            instance = init()
        }

        return instance
    }

    return{
        getInstance: getInstance
    }

})()

shopList.getInstance().addItem('riz', 1)
shopList.getInstance().addItem('pates', 2)
shopList.getInstance().addItem('viande', 4)

console.log(shopList.getInstance())
console.log('item', shopList.getNumberOfItems())