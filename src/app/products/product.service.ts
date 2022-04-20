export class ProdutcService {
    getProducts() {
        return [
            { imageUrl: "http://loremflickr.com/150/150?random=1", productName: "Product 1", releasedDate: new Date(2016,5,30), description: "Cras sit amet nibh libero, in gravida... ", rating: 1, num0fReviews: 12 },
            { imageUrl: "http://loremflickr.com/150/150?random=2", productName: "Product 2", releasedDate: new Date(2017,3,10), description: "Me being a total mess... ", rating: 2, num0fReviews: 14 },
            { imageUrl: "http://loremflickr.com/150/150?random=3", productName: "Product 3", releasedDate: new Date(2014,1,20), description: "The morning sunshine of all times... ", rating: 3, num0fReviews: 16 }

        ];
    }
}