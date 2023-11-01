// Define a data model for products
import List "mo:base/List";
actor{
    type Product = {
    id: Nat;
    name: Text;
    description: Text;
    price: Nat;
};

// Initialize some sample products
var products :List.List<Product> = List.nil<Product>();

public func insertProducts(data:Product):async Text{
    products := List.push(data,products);
    return "inserted Data";
};
public  query func getProducts(num:Nat):async ?Product{
    let data = List.get(products,num);
    return data;
};

}