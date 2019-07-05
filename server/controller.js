module.exports = {
    getInventory(req, res) {
      const db = req.app.get('db')
      db.get_inventory()
      .then(inventory => res.status(200).send(inventory))
      .catch(err => res.status(500).send(err))
    },
    addProduct(req, res) {
        const db = req.app.get('db')
        let {name, price, imgurl} = req.body
        db.create_product([imgurl, name, price])
        .then( () => res.sendStatus(200))
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    }
}