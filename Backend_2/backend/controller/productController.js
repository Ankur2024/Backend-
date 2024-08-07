import data from '../data/data.js'; 

export const getAllProducts = (req, res) => {
    res.json(data);
};

export const getProductById = (req, res) => {
    const product = data.find(p => p.id === req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

export const getProductsByCategory = (req, res) => {
    const category = req.params.category.toLowerCase(); 
    // console.log(data.category.hasOwnProperty(category))
    // console.log(data.category[category])
    console.log(category);
    // Filter products based on the request category
    const filteredProducts = data.filter((product) => {
        console.log(product.category.hasOwnProperty(category))
        console.log(product.category[category])
        // Check if the category key exists in the product's category object
        if( product.category.hasOwnProperty(category) && product.category[category]){
            return product;
        }
    });

    if (filteredProducts.length > 0) {
        res.json(filteredProducts);
    } else {
        res.status(404).json({ message: 'No products found for this category' });
    }
};


export const addProduct = (req, res) => {
    const newProduct = req.body;
    data.push(newProduct);
    res.status(201).json(newProduct);
};

export const deleteProduct = (req, res) => {
    const id = req.params.id;
    const index = data.findIndex(p => p.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        res.status(200).json({ message: 'Product deleted' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};
