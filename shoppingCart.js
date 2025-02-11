var bookOne = {
    name: "HTML",
    price: 250,
    discount: 7,
    reviews: 9,
    rating: 4.5

}
var bookTwo = {
    name: "JavaScript",
    price: 450,
    discount: 9,
    reviews: 15,
    rating: 5

}
var bookThree = {
    name: "Php",
    price: 600,
    discount: 12,
    reviews: 20,
    rating: 4.9

}

var productArray = [bookOne, 5, bookTwo, 3, bookThree, 1]

var count = 1

for (let i = 0; i < productArray.length; i+=2) {
    var ProductName = productArray[i].name;
    var BasePrice = productArray[i].price;
    var reviews= productArray[i].reviews;
    var rating = productArray[i].rating;
    var productCount = productArray[i+1];
    var totalPrice = BasePrice*productCount;
    var totalDiscount=productArray[i].price * ((productArray[i].discount*productCount) / 100);
    var priceAfterDiscount = totalPrice - totalDiscount;

    console.log(`${count}. Product Name: ${ProductName}, Price: ${BasePrice}, reviews: ${reviews}, Rating: ${rating}, Total Discount: ${totalDiscount}, Total Price: ${priceAfterDiscount}`)
    count++
}


