class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ElementAttribute {
    constructor(attrName, attrvalue) {
        this.name = attrName;
        this.value = attrvalue;
    }
}

class Component {
    constructor(renderHookId, shouldRender = true) {
        this.hookId = renderHookId;
        if (shouldRender) {
            this.render();
        }
    }

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce(
            (prevValue, CurItem) => prevValue + CurItem.price,
            0
        );
        return sum;
    }

    constructor(renderHookId) {
        super(renderHookId, false);
        this.orderProducts = () => {
            console.log('Ordering...');
            console.log(this.items);
        };
        this.render();
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order now!</button>
        `;
        const orderButton = cartEl.querySelector('button');
        // orderButton.addEventListener('click', () => this.orderProducts())
        orderButton.addEventListener('click', this.orderProducts)
        this.totalOutput = cartEl.querySelector('h2');
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId, false)
        this.product = product;
        this.render();
    }

    addToCart() {
        App.addProductTocart(this.product);
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item');
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
    }
}

class ProductList extends Component {
    #products = [];

    constructor(renderHookId) {
        super(renderHookId, false)
        this.render();
        this.fetchProduct();
    }

    fetchProduct() {
        this.#products = [
            new Product(
                'A Pillow',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9nq0DUaPM0eqChLtR93P5GziG52hA0CVgQ&usqp=CAU',
                'A soft pillow!',
                19.99
            ),
            new Product(
                'A Carpet',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUewPTwQNNGbVaQjLMaUVUnqileheFViInug&usqp=CAU',
                'A carpet which you might like - or not.',
                89.99
            )
        ];
        this.renderProducts();
    }

    renderProducts() {
        for (const prod of this.#products) {
            new ProductItem(prod, 'prod-list');
        }
    }

    render() {
        this.createRootElement('ul', 'product-list', [
            new ElementAttribute('id', 'prod-list')
        ]);
        if (this.#products && this.#products.length > 0) {
            this.renderProducts();
        }
    }
}

class Shop extends Component {
    constructor() {
        super()
    }

    render() {
        this.cart = new ShoppingCart('app');
        new ProductList('app');
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        this.cart = shop.cart;
    }

    static addProductTocart(product) {
        this.cart.addProduct(product);
    }
}

App.init();