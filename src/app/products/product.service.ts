export class ProdutcService {
    getProducts() {
        return [
            { imageUrl: "http://loremflickr.com/150/150?random=1", productName: "Product 1", releasedDate: "October 31, 2016", description: "Cras sit amet nibh libero, in gravida... ", rating: 1, num0fReviews: 12 },
            { imageUrl: "http://loremflickr.com/150/150?random=2", productName: "Product 2", releasedDate: "October 31, 2016", description: "Cras sit amet nibh libero, in gravida... ", rating: 2, num0fReviews: 14 },
            { imageUrl: "http://loremflickr.com/150/150?random=3", productName: "Product 3", releasedDate: "October 31, 2016", description: "Cras sit amet nibh libero, in gravida... ", rating: 3, num0fReviews: 16 }

        ];
    }
}