/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: AzamonShop
 * 
 * Using object-oriented analysis, we arrive at the following classes.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */
class AzamonShop {
	constructor() {
		super();

		this.carts;  // ArrayList<AzamonCart>
		this.articles; //ArrayList<AzamonArticle> 
	}

	listArticles() {
	}
}

class AzamonArticle {

	constructor() {
		super();

		this.name; // String 
		this.type; // String
		this.price; // int
	}
}

class AzamonCart {
	constructor() {
		super();

		this.userName;  // String 
		this.articles;  // ArrayList<AzamonArticle> 
	}

	listArticles() {
	}

	addArticleToCart() {
	}

	calculatePriceOfArticlesInCart() {
	}
}